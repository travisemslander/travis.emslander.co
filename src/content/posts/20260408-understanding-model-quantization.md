---
title: "Understanding Model Quantization and Floating Point Math"
date: 2026-04-08T08:00:00-05:00
---

If you explore open-weights models on [Hugging Face](https://huggingface.co/), you quickly run into a dizzying array of quantization variants (Q4, Q8, FP16, etc.). It can be confusing to know what these mean and how to choose between them.

I found this [excellent guide from ngrok on model quantization](https://ngrok.com/blog/quantization) to be one of the clearest explanations of the concepts and trade-offs involved.

As a bonus, the article includes great visual diagrams explaining how floating-point numbers are represented in binary. That alone makes it worth reading, helping clarify why floating-point math inaccuracies crop up even in seemingly trivial calculations.
