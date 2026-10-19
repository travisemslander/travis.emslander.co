---
title: "ggsql: A Grammar of Graphics for SQL"
date: 2026-04-29T08:00:00-05:00
---

I recently came across an open source project from Posit called [ggsql (A grammar of graphics for SQL)](https://opensource.posit.co/blog/2026-04-20_ggsql_alpha_release/).

The concept of a "Grammar of Graphics" (popularized by Leland Wilkinson and R's `ggplot2`) is that any statistical graphic can be composed by combining independent layers: data, aesthetics, geometries, coordinates, and facets. What `ggsql` does is introduce a SQL-like syntax for building these visualizations directly within SQL queries.

The announcement post includes great demos of the syntax in action. It looks like a promising approach for interactive data exploration without switching contexts between SQL and Python/Jupyter. It also strikes me as a compelling interface for AI agents to generate visualizations declaratively without requiring full arbitrary code execution.
