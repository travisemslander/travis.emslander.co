---
title: "Demystifying Idiomatic awk"
date: 2025-10-23T08:00:00-05:00
---

I came across a great tutorial called [Idiomatic awk](https://backreference.org/2010/02/10/idiomatic-awk/).

Anyone working in Unix environments eventually encounters intricate shell pipelines using `sed` and `awk` that work text-processing magic. I've often wanted to wield that power, but always found the barrier to entry high and the syntax intimidatingly terse. This is the first explainer that made the core pattern-action paradigms click for me.

While I may not write complex programs in it, having a few idiomatic one-liners in your toolkit is incredibly handy:

```bash
# Print lines that match both "foo" and "bar"
awk '/foo/ && /bar/'

# Print lines that match "foo" but not "bar"
awk '/foo/ && !/bar/'

# Print a range of lines starting from a match of "foo" through "bar"
awk '/foo/,/bar/'
```
