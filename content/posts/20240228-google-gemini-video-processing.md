---
title: "Processing Video with Google Gemini"
date: 2024-02-28T07:55:15-06:00
---

I came across [this writeup by Simon Willison on exploring video inputs with Google Gemini](https://simonwillison.net/2024/Feb/21/gemini-pro-video/). As a multimodal model, Gemini can accept text, images, and video as input.

It's impressive to see this capability in action. The results were solid, and he noted that token consumption equated to roughly one image per second of video. Google charged about $0.002 per second of video, so processing a 30-second video cost around $0.06, plus small token fees for the text prompt and answer.

At the time of the experiment, Gemini only processed the video frames and did not transcribe or analyze the accompanying audio stream.
