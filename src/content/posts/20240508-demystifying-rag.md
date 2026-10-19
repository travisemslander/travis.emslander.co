---
title: "Demystifying Retrieval-Augmented Generation"
date: 2024-05-08T08:00:00-05:00
---

A major barrier for many use cases with LLMs is hallucination. RAG (Retrieval-Augmented Generation) is frequently discussed as a solution. While I thought I understood what it was at a high level, I realized I didn't fully understand the underlying mechanics.

I found a great explainer on [Retrieval Augmented Generation (RAG)](https://www.promptingguide.ai/techniques/rag). What really helped clarify things was the [example notebook](https://github.com/dair-ai/Prompt-Engineering-Guide/blob/main/notebooks/pe-rag.ipynb) linked in the article. The core pattern is simple: retrieve data relevant to the task and insert that context into the prompt alongside your question.

The demo uses a vector database storing embeddings to find related content based on vector distances (similar to using embeddings for semantic search). A practical application is using vector embeddings to retrieve relevant documentation articles for a user's inquiry, then passing those excerpts into the LLM to synthesize an accurate answer.

Of course, hallucination is still a risk, but grounding responses in retrieved context significantly reduces it.
