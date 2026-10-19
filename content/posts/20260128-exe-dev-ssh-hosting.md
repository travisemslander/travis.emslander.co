---
title: "exe.dev: SSH-Based VM Hosting"
date: 2026-01-28T08:00:00-06:00
---

I learned from [Simon Willison's blog about exe.dev](https://simonwillison.net/2026/Jan/22/ssh-has-no-host-header/), a hosting service that gives you up to 25 VMs for $20/month.

The really interesting part is that it's entirely SSH-based. If you visit their website, all you'll find is an instruction to `ssh exe.dev`. Once signed up, you get VMs with unique hostnames (such as `user.exe.dev`) that you access directly via SSH. It's an interesting hosting concept and looks like a great solution when you just need a quick, lightweight way to spin up something on a cloud VM.
