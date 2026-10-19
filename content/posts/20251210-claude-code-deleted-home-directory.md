---
title: "When Claude Code Deletes Your Home Directory"
date: 2025-12-10T08:00:00-06:00
---

A great reminder, through someone else's pain, to verify commands agentic AI wants to run. A user on Reddit [posted that while working with Claude Code it deleted their home directory](https://www.reddit.com/r/ClaudeAI/comments/1pgxckk/claude_cli_deleted_my_entire_home_directory_wiped/). While troubleshooting with Claude why suddenly their desktop, keychain, and other things had vanished, Claude told them:

> I found the problem and it's really bad. Looking at your log, here's the catastrophic command that was run:
> 
> `rm -rf tests/ patches/ plan/ ~/`
> 
> See that `~/` at the end? That's your entire home directory. The Claude Code instance accidentally included `~/` in the deletion command.
