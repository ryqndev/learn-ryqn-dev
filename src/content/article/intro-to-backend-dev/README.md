# Intro to backend development

```table-of-contents

* [Intro](#intro)
* [Backend system responsibilities](#backend-system-responsibilities)

```

## Intro

Web Development often follows the client-server model where you have one set of code for the client (a.k.a. frontend) and one for the server (a.k.a. backend). It's important to note that these codebases have vitally different goals: the main objective of the frontend is to create an interface for users (other humans) to interact with our program by providing clickable buttons, input fields, as well as text, image, and video displays. The backend, however, is responsible for handling much of the business logic - connecting to databases, running complex algorithms, and providing the data for the frontend to display.

A good way to look at it is to look at an existing service we all use and dissect how they may break up their app into client/server. Let's look at Youtube, for example. Youtube has many different frontend elements:

![youtube screenshot showing main video content, suggested video list, and comment section]

Everything you see in the above screenshot is written in frontend code but I'll list out some notable elements:

-   Video player with video controls like play/pause, volume button, scrubber, etc.
-   Recommended video list on the right side
-   Comment section on the bottom

What you might not have realized is that each of these pieces connect to their backend. The very video file you're watching is saved in a special storage system and the stream itself is facilitated by their backend. The recommended video list comes from their [machine learning recommendation matrix](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/45530.pdf) - which gets queried and updated through their backend system. The comment section uses one of the oldest architecture patterns in the book: a backend service that connects to a database that stores all the comments, likes and replies for any given video.

Although the frontend gives us all of the interactive pieces we can see and use, without the business logic sitting in the backend, nothing would be functional and we would simply have a pretty, empty shell of a website.

## Backend system responsibilities

What exactly is a backend responsible for then? The answer varies depending on who you ask: if you ask a backend developer for an early stage startup, you might get a response of they do _everything_ from setting up a web server, setting up a database, setting up a neural net for machine learning, setting up storage systems, setting up authentication systems for login, and then connecting all of them together using endpoints, proxies, load balancers, etc. Phew. (You might not even know half of what I just word vomited but you'll find out soon enough)

If you're asking a backend developer at larger, more established company, you might get an answer of: they write some business logic for a new service they spin up and connect to their main web server. This is because in a bigger company, they'll often have entire teams spun up around each additional system: for example, their database might be maintained by a data engineer in charge of maintaining the data pipeline, a database administrator to manage the database itself, an infrastructure engineer to ensure their storage and hosting cost and uptime are reasonable. In this case, a backend developers job won't encompass their database systems.

## Learn more

With that in mind, let's see how we can spin up our own backend in a variety of different languages.

-   [Java (using Spring framework)](/tutorial/web-dev/backend/java/spring/setup)
-   [Python (using Flask framework)](/article/starting-out-with-flask)
