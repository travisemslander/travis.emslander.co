---
title: "TSA Flight Program SQL Injection Vulnerability"
date: 2024-09-11T08:00:00-05:00
---

In [this article, a security researcher discovered vulnerabilities](https://ian.sh/tsa) in a system that the TSA utilizes for special flight programs for frequent flyers such as crew members.

It's a fascinating write-up because it details exactly how the SQL injection vulnerability worked as well as the fact that the TSA was completely unresponsive about the issue. It's a great example of how SQL injection vulnerabilities can have huge real-world impact, and why we always need to be careful and use proper parameter binding when querying with user input.
