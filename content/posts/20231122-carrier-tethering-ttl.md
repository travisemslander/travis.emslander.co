---
title: "Bypassing Carrier Tethering Throttling via TTL"
date: 2023-11-22T08:05:21-06:00
---

I ran across an interesting post on Mastodon explaining that if you tether your laptop to your phone's cellular connection, some phone carriers detect it and throttle your speed. Interestingly, the way they detect tethering is by seeing an additional network hop when routing traffic through paths designed to take 64 hops. You can bypass this on macOS simply by updating your OS to set the default TTL to 65 hops instead of stopping at 64. Once you run this command, you'll see full speeds in cases where the carrier was throttling tethered traffic:

> [briankrebs@infosec.exchange](https://infosec.exchange/@briankrebs/111434555426146154) - On a Mac, you can change the time to live (TTL) for your connection by opening a command prompt (Terminal) and typing these two commands (you'll be asked for an admin password after entering the first of these commands):
> 
> sudo sysctl -w net.inet.ip.ttl=65
> 
> sudo sysctl -w net.inet6.ip6.hlim=65
