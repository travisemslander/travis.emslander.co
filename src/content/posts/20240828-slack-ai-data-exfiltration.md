---
title: "Data Exfiltration from Slack AI"
date: 2024-08-28T08:00:00-05:00
---

I read [this responsible disclosure on a Slack AI feature](https://promptarmor.substack.com/p/data-exfiltration-from-slack-ai-via) and a claimed ability to use indirect prompt injection to retrieve data normally inaccessible to a user due to being in a private channel they are not a member of.

The claim is a bit hard to believe knowing how these RAG AI systems work—the content inaccessible to the user shouldn't even be part of the context in the prompt to the AI—but the evidence they show in the reproduction steps appears damning if true.

This is an area of big concern when thinking about how to take advantage of these types of systems that can theoretically give you instant access and analysis of large sets of data: how do you implement proper controls on data access?
