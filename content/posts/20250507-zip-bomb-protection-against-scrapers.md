---
title: "Defending Against Web Scrapers with Zip Bombs"
date: 2025-05-07T08:00:00-05:00
---

Someone found an interesting approach for dealing with a continuous barrage of bots scraping their website. While bots can be harmless web crawlers for search engines, there is growing concern about bots scraping aggressively for LLM training or attackers looking for exploit vectors.

[This engineer decided to feed them compressed 0-byte files](https://idiallo.com/blog/zipbomb-protection), which cause most bots to crash as they run out of memory trying to decompress them. Clever idea.
