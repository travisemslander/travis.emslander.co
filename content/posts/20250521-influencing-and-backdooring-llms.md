---
title: "Influencing and Backdooring LLMs"
date: 2025-05-21T08:00:00-05:00
---

Recently, Grok (the AI model in X / xAI) went a bit off the rails. No matter what people asked, it kept steering answers back to discussions of "white genocide" in South Africa. This [article from Platformer digs into some theories on how this occurred](https://www.platformer.news/grok-white-genocide-x-adversarial-ai/?ref=platformer-newsletter).

While this specific occurrence was likely just a developer meddling with the system prompt, the article discusses far more insidious and difficult-to-detect ways of influencing LLMs. For instance, Anthropic researchers showed they could [pinpoint and modify feature representations related to the Golden Gate Bridge](https://www.platformer.news/r/5d524501?m=525324c1-c564-4c8c-8304-38494d41848a), causing Claude to constantly steer conversations back to that topic.

Related to this, I recently came across a post from a security researcher demonstrating how you [can fine-tune a model to influence its weights in ways that are nearly impossible to detect](https://blog.sshh.io/p/how-to-backdoor-large-language-models). They posited that there's a very real risk of bad actors secretly backdooring open models—particularly dangerous when these models are trusted to generate code.

Fun times ahead, for sure.
