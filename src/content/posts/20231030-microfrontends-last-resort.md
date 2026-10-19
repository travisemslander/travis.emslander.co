---
title: "Microfrontends Should Be Your Last Resort"
date: 2023-10-30T16:20:51-05:00
---

In the article [Microfrontends should be your last resort](https://www.breck-mckye.com/blog/2023/05/Microfrontends-should-be-your-last-resort/), the author makes the case that most companies interested in using a microfrontend (MFE) approach should probably just focus on refactoring their monolithic UI.

> But by doing this [refactor], now we could visualize the problem. Before, the argument was that we could just rewrite everything via MFEs and engineers would just kind of figure things out as they went. When we could visualise the graph of data dependencies, we could see how difficult this would be without a dedicated effort to decouple the domains in the code.

I feel like this is great general advice when considering any work to distribute a codebase. Microfrontends specifically seem likely to be seen as much more simplistic than they are in reality.
