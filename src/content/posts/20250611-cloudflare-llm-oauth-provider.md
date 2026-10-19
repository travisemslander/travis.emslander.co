---
title: "Cloudflare's LLM-Written OAuth Provider"
date: 2025-06-11T08:00:00-05:00
---

Cloudflare released a [TypeScript library to implement an OAuth 2.1 provider](https://github.com/cloudflare/workers-oauth-provider) on Cloudflare Workers. What's interesting about it? They used an LLM (Anthropic's Claude) to write it.

If you read the project's README, lead engineer Kenton Varda explains that they started it as an experiment, half-expecting it not to work, but found it worked remarkably well. He points out that while they didn't skimp on human code and security reviews, they let Claude handle writing the code. You can even browse the Git commit history to see the exact LLM prompts used at each step.

It's an eye-opening look at what is possible when pairing a capable developer with an LLM on non-trivial systems code.
