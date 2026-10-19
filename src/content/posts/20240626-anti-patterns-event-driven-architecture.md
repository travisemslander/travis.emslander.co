---
title: "Anti-Patterns in Event-Driven Architecture"
date: 2024-06-26T08:00:00-05:00
---

I recently read a great article on [anti-patterns in Event-Driven Architecture](https://codeopinion.com/beware-anti-patterns-in-event-driven-architecture/). It's fairly concise, but packed with useful gems—such as being careful about leaky abstractions, especially avoiding event schemas that mirror your internal database structure 1-to-1.

I also found this insight on event ordering particularly interesting:

> There are many situations where you might think you need ordered event processing, but you don’t. There are other ways to handle this, such as using sagas, which allow you to handle messages out of order. It’s actually fairly common in the real world, and it’s really a matter of embracing asynchrony. For an example, check out my post [Message Ordering in Pub/Sub or Queues](https://codeopinion.com/message-ordering-in-pub-sub-or-queues/).

The author's companion article on [Message Ordering in Pub/Sub or Queues](https://codeopinion.com/message-ordering-in-pub-sub-or-queues/) is also a helpful deep dive on handling out-of-order messages in distributed systems.
