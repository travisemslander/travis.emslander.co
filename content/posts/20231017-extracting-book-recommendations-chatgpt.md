---
title: "Extracting Book Recommendations with ChatGPT"
date: 2023-10-17T07:36:10-05:00
---

Someone wrote about [their experience using the ChatGPT API to help identify and extract postings on Hacker News about books](https://blog.reyem.dev/post/extracting_hn_book_recommendations_with_chatgpt_api/). From what I understand, he separately obtained the comment text using Hacker News's API, but then passed each comment to ChatGPT and asked it to provide the author, book title, and other details if it believed the comment was about a book. While this specific use case isn't of much interest to me, I do find it interesting to think about using LLMs to add additional context to text.

It does sound like there were a lot of issues that he had to wade through, so you'd have to have a plan for auditing the results. As is often the case, you definitely can't blindly trust what these LLMs say. I also found the cost noteworthy:

> Processing 57k comments cost about $40 using gpt 3.5 turbo API.

For a one-off problem where you just need help getting something done, $40 is an easy expense. But if you were trying to build a product that needs to do this at high scale, that could easily blow up into a much larger cost.
