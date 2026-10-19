---
title: "Prototyping with Claude Artifacts"
date: 2024-10-30T08:00:00-05:00
---

A while back Claude released something they called Artifacts. The idea is that it can show an interactive graphical view when answering questions, which is especially interesting when asking for programming solutions. You can actually have it build web apps and then show you the working result inline. Simon Willison recently wrote an article where [he listed out ways he's used it](https://simonwillison.net/2024/Oct/21/claude-artifacts/), and there are some neat use cases.

I toyed around with this to see if it could create a simple task list app that stored tasks in web storage, and the [results were pretty impressive](https://claude.site/artifacts/fc9594d2-32ba-49bb-92ff-8c9874892b22). I then tried some more complicated things and ran into the same limitation mentioned in the article: that it won't perform calls to arbitrary APIs. Still, it's definitely fun to play around with and prototype things quickly.
