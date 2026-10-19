---
title: "Prompt Injections in Sora 2 Cameos"
date: 2025-10-08T08:10:00-05:00
---

OpenAI recently introduced Sora 2, an invite-only beta for their video generation model that looks like a formidable step forward.

A standout capability is "cameo" creation, allowing users to generate and share digital likenesses for use in generated videos. However, cameos allow their creator to attach custom instructions dictating how the likeness behaves, [which can act as a prompt injection hijacking the entire video](https://simonwillison.net/2025/Oct/3/cameo-prompt-injections/). Simon Willison documented some amusing examples, but it doesn't take much imagination to see how this could be abused for more malicious ends.
