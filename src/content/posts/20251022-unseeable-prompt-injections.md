---
title: "Unseeable Prompt Injections and AI Browsers"
date: 2025-10-22T08:10:00-05:00
---

OpenAI recently introduced an AI-powered browser, but giving an LLM free rein over web browsing creates massive security challenges. LLMs remain fundamentally vulnerable to prompt injection, and having an agent ingest arbitrary untrusted web content while holding active session cookies is a terrifying attack surface.

Security researchers at Brave demonstrated that [prompt injections can even be hidden inside images using perturbations imperceptible to the human eye](https://simonwillison.net/2025/Oct/21/unseeable-prompt-injections/). When a multimodal agent views the page, it reads instructions that a human user cannot see at all. That is not a technology you want executing actions inside an authenticated browser session.
