---
title: "LLM Security and The Lethal Trifecta"
date: 2025-08-13T08:00:00-05:00
---

Simon Willison recently gave a [great presentation on LLM security](https://simonwillison.net/2025/Aug/9/bay-area-ai/). He does a fantastic job of covering primary attack vectors like prompt injection, but also frames system security around a concept he calls "the lethal trifecta." Because it is practically impossible to guarantee an LLM won't be tricked into leaking data through guardrails alone, you have to design system architectures so that the vulnerability is structurally impossible by breaking at least one of the three legs of the trifecta (access to private data, exposure to untrusted inputs, and the ability to trigger external side effects).

He also shared a [concrete example of an LLM workflow being tricked into exfiltrating secrets](https://simonwillison.net/2025/Aug/9/when-a-jira-ticket-can-steal-your-secrets/). Zenity Labs demonstrated that if a developer uses Cursor (or any MCP-enabled AI tool) connected to an MCP server reading support tickets and another MCP server with GitHub access, a malicious Jira ticket can trick the agent into searching GitHub repositories for JWT tokens and exfiltrating them.
