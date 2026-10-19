---
title: "Decompiling a 27-Year-Old VB4 App with Claude"
date: 2025-03-12T08:00:00-05:00
---

A fascinating use case [surfaced on Reddit](https://www.reddit.com/r/ClaudeAI/comments/1iyumpf/i_uploaded_a_27yearold_exe_file_to_claude_37_and/): someone had a 27-year-old Windows executable written in Visual Basic 4 that wouldn't run on modern Windows. They uploaded the `.exe` directly to Claude 3.7 Sonnet and asked for help getting it to run, asking if it could be converted to Python.

Amazingly enough, it did exactly that. As the author noted, this likely worked well because older Visual Basic compiled to interpreted "p-code" rather than native machine code, allowing the LLM to identify calls to various VB runtime functions and reconstruct the logic. Still, seeing a language model take a raw legacy executable and port it into working Python is pretty incredible.
