---
title: "Why Fly.io Was Wrong About GPUs"
date: 2025-02-26T08:00:00-06:00
---

I read a really insightful [blog post from the CEO of Fly.io about their failed attempt at offering GPU-enabled fly machines](https://fly.io/blog/wrong-about-gpu/).

Fly.io makes deploying apps straightforward, and they predicted early on that developers would want GPU-enabled machines to support AI/ML workloads. The post is a great case study in how correctly identifying where the market is going doesn't automatically translate to product-market fit. Ultimately, they found that most developers building features just want an API to call:

> The biggest problem: developers don’t want GPUs. They don’t even want AI/ML models. They want LLMs. _System engineers_ may have smart, fussy opinions on how to get their models loaded with CUDA, and what the best GPU is. But _software developers_ don’t care about any of that. When a software developer shipping an app comes looking for a way for their app to deliver prompts to an LLM, you can’t just give them a GPU.
