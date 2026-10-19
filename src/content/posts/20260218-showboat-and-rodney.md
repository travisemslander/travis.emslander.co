---
title: "Showboat and Rodney: Helping AI Agents Demonstrate Their Work"
date: 2026-02-18T08:00:00-06:00
---

When working with AI to produce code, especially for building net-new apps and prototypes, it can quickly become difficult to understand the changes it made and verify how they work. Rather than being surprised, it would be much more helpful if part of the agent's workflow included explaining and demonstrating its changes, rather than turning the developer into a full-time QA tester for the model.

Simon Willison tackled this challenge and [built two tools, Showboat and Rodney, for AI agents to demonstrate their work](https://simonwillison.net/2026/Feb/10/showboat-and-rodney/):

- **Showboat**: A tool that helps an agent write a demo Markdown file containing the execution output of commands. While an agent could theoretically construct this directly, providing a strict interface to log notes, record command outputs, and capture image results enforces consistent structure.
- **Rodney**: Automates a Chrome browser and screenshots pages, enabling the agent to verify functionality visually and embed screenshots directly into the demo document.

Has anyone else found good patterns or tools for getting AI agents to test their own changes and visually demonstrate functionality back to you?
