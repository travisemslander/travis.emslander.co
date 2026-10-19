---
title: "Understanding Embeddings"
date: 2023-11-08T07:30:56-06:00
---

I'd like to share [this blog post about embeddings](https://simonwillison.net/2023/Oct/23/embeddings/) by Simon Willison. What are embeddings? Well, that's what the blog post explains, but my quick attempt at summarizing is that it's a method of turning text into numbers. The number representation is in the form of vectors which sort of score the text across different dimensions. That's probably not an entirely accurate explanation, but the point is you get text into numbers that represent the meaning and content of the text.

The really fascinating part is what you can do with it. You can use a mathematical function called cosine similarity to get the distance between vectors in multi-dimensional space. This helps you understand which text is considered similar based on the embeddings. An impressive demonstration is using word embeddings to perform a mathematical equation: Germany + Paris - France. What do you think the answer is based on similarity to the resulting vector? It's Berlin! Just nuts.

The blog post is definitely a bit dense, but I encourage you to read through parts that seem confusing. There are tons of examples of applications and even a cool tool called `llm` that you can use to immediately start playing around with this stuff yourself—including the ability to run open-source models for embedding calculations entirely locally.
