---
title: "OpenAI's GPT-5.4 Mini and Nano: Fast, Cheap Multimodal Models"
date: 2026-03-18T08:00:00-05:00
---

Simon Willison [wrote about OpenAI's GPT-5.4-mini and GPT-5.4-nano models](https://simonwillison.net/2026/Mar/17/mini-and-nano/). The nano model in particular shows impressive capabilities for its size, standing out as one of the cheapest offerings from the major foundation model labs.

To test its multimodal chops, Simon had it describe a photograph from a museum. The description was detailed and accurate, costing just $0.00069. At that rate, he estimated describing his entire personal collection of 76,000 photos would cost about $52.44.

This got me thinking about production scale: if an application processes roughly 800,000 image uploads a month, running vision descriptions on every single upload would cost around $570 per month. That is remarkably accessible for near-instant classification and accessibility tagging, showing just how fast the economics of AI inference are improving.

And as a fun benchmark, Simon also tested the models with his signature prompt—generating an SVG of a pelican riding a bicycle. The nano model held up surprisingly well, a task that historically produced nightmare fuel on compact models.
