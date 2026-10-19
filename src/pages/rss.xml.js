import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { enrichPosts } from '../utils/posts';

export async function GET(context) {
  const rawPosts = await getCollection('posts');
  const posts = enrichPosts(rawPosts);

  return rss({
    title: 'Travis Emslander',
    description: 'Technology leader located in Minneapolis, MN',
    site: context.site || 'https://travis.emslander.co',
    items: posts.map((post) => ({
      title: post.title,
      pubDate: post.date,
      description: post.excerpt,
      link: `/posts/${post.slug}/`,
    })),
  });
}
