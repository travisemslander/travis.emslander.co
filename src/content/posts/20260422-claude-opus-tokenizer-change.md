---
title: "Claude Opus 4.7 and the Tokenizer Change"
date: 2026-04-22T08:00:00-05:00
---

The Claude Opus 4.7 release introduced an unexpected change: an updated tokenizer.

Modifying a tokenizer mid-stream is fairly unusual; typically, tokenizer architectures are locked in during initial pretraining and only updated across major model generations. While the broader performance differences in 4.7 remain to be fully benchmarked, one immediate consequence of the new tokenizer is that typical prompts equate to higher token counts.

[Simon Willison did a detailed comparison across several practical use cases](https://simonwillison.net/2026/Apr/20/claude-token-counts/), breaking down how token counts and costs shift under the new encoding.
