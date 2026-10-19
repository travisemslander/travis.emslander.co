---
title: "The Part of PostgreSQL We Hate the Most"
date: 2024-11-06T08:05:00-06:00
---

An article called [The Part of PostgreSQL We Hate the Most](https://www.cs.cmu.edu/~pavlo/blog/2023/04/the-part-of-postgresql-we-hate-the-most.html) discusses a fundamental design decision PostgreSQL made for its Multi-Version Concurrency Control (MVCC).

Due to this decision, the author points out a few big problems, mostly centered around wasted storage, write amplification, and performance penalties. Their ultimate takeaway is that PostgreSQL is not an ideal candidate for write-intensive applications due to these MVCC issues (which is why Uber famously switched away to MySQL), even though it remains a great database for many other workloads.
