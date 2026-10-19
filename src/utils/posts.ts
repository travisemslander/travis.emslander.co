import type { CollectionEntry } from 'astro:content';

export type EnrichedPost = {
  slug: string;
  title: string;
  date: Date;
  dateIso: string;
  dateFormatted: string;
  dateShort: string;
  year: string;
  readingTime: number;
  excerpt: string;
  topic: string;
  primaryDomain: string | null;
  externalLinks: { text: string; url: string; domain: string }[];
  entry: CollectionEntry<'posts'>;
};

const TOPIC_KEYWORDS: Record<string, string[]> = {
  'AI & LLMs': [
    'llm', 'llms', 'chatgpt', 'gpt', 'claude', 'gemini', 'openai',
    'anthropic', 'ai', 'rag', 'embeddings', 'quantization', 'prompt',
    'agent', 'agents', 'sora', 'stable diffusion', 'dall-e', 'ml5',
    'machine learning',
  ],
  Security: [
    'security', 'vulnerability', 'exploit', 'phish', 'oauth', 'password',
    'cryptography', 'encryption', 'public/private key', 'sql injection',
    'exfiltration', 'owasp', 'pwned', 'trivy', 'backdoor', 'scrapers',
    'zip bomb',
  ],
  'Data & Databases': [
    'sql', 'postgres', 'postgresql', 'database', 'databases', 'datalog',
    'btrees', 'b-trees', 'mvcc', 'ggsql', 'index', 'indexes',
    'data engineering',
  ],
  'Web & Frontend': [
    'css', 'html', 'frontend', 'htmx', 'tailwind', 'browser', 'browsers',
    'javascript', 'web', 'url', 'urls', 'microfrontends', 'ui', 'p5.js',
  ],
  Engineering: [
    'git', 'github', 'rust', 'go', 'zig', 'awk', 'opentelemetry',
    'debugging', 'testing', 'architecture', 'event-driven', 'code review',
    'code reviews', 'design docs', 'story points', 'gpu', 'dns', 'icann',
    'ttl', 'uuid', 'vb4', 'floating point',
  ],
};

function matchesWord(text: string, word: string): boolean {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`\\b${escaped}\\b`, 'i').test(text);
}

export function inferTopic(title: string, body: string): string {
  const text = `${title} ${body}`.toLowerCase();
  for (const [topic, words] of Object.entries(TOPIC_KEYWORDS)) {
    if (words.some((w) => matchesWord(text, w))) {
      return topic;
    }
  }
  return 'Curiosities';
}

export function extractLinks(markdown: string): { text: string; url: string; domain: string }[] {
  const regex = new RegExp('\\[([^\\]]+)\\]\\((https?:\\/\\/[^\\s)]+)\\)', 'g');
  const results: { text: string; url: string; domain: string }[] = [];
  let match: RegExpExecArray | null;
  while ((match = regex.exec(markdown)) !== null) {
    try {
      const u = new URL(match[2]);
      const domain = u.hostname.replace(/^www\./, '');
      results.push({ text: match[1], url: match[2], domain });
    } catch {
      // ignore invalid URLs
    }
  }
  return results;
}

export function createExcerpt(markdown: string, maxLen = 175): string {
  const stripped = markdown
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[`*_>#~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (stripped.length <= maxLen) return stripped;
  return stripped.slice(0, maxLen).replace(/\s+\S*$/, '') + '…';
}

export function enrichPosts(entries: CollectionEntry<'posts'>[]): EnrichedPost[] {
  return entries
    .filter((e) => !e.data.draft)
    .map((entry) => {
      const body = entry.body || '';
      const words = body.trim().split(/\s+/).length;
      const readingTime = Math.max(1, Math.round(words / 200));
      const links = extractLinks(body);
      const date = entry.data.date;
      const slug = entry.slug.toLowerCase();
      const explicitTopic = entry.data.topic?.trim() || entry.data.tags?.[0]?.trim();

      return {
        slug,
        title: entry.data.title,
        date,
        dateIso: date.toISOString(),
        dateFormatted: date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          timeZone: 'America/Chicago',
        }),
        dateShort: date.toLocaleDateString('en-US', {
          month: 'short',
          day: '2-digit',
          timeZone: 'America/Chicago',
        }),
        year: date.toLocaleDateString('en-US', {
          year: 'numeric',
          timeZone: 'America/Chicago',
        }),
        readingTime,
        excerpt: createExcerpt(body),
        topic: explicitTopic || inferTopic(entry.data.title, body),
        primaryDomain: links.length > 0 ? links[0].domain : null,
        externalLinks: links,
        entry,
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}
