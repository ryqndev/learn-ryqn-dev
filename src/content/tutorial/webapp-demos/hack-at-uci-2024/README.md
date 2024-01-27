# Hack at UCI 2024: Intro to Product Design and Web Dev

```table-of-contents

* [Overview](#overview)
* [Team Split](#team-split)
* [Ideation](#ideation)
    1. [Data Sources](#data-sources)
    2. [Architecture](#architecture)
* [Live Demo](#live-demo)
    1. [Frontend Prerequisites](#frontend-prerequisites)
    2. [Backend Prerequisites](#backend-prerequisites)
* [Additional Resources](#additional-resources)
* [Wrapping Up](#wrapping-up)
```

## Overview

Welcome to Hack at UCI 2024! The general, overarching goal at a hackathon is to create _something_. There's no limit on what you can make or how you make it but we tend to see web apps as the most popular submission. This is in part because web apps are _(arguably)_ the simplest to use but also _(arguably)_ the simplest to get started.

As some quick examples, you could create a game in Unity but that requires exporting some executable that someone has to download on their phone or computer. You could create an Android or iOS native app, but then you only have a product that works on a single OS (can't write an iOS app that works on Android and vice versa). You could write some AI/ML or data vis applications in R or Python, but that requires a user to have R or Python installed on their computer.

For the average joe, if you give them a website, they can open it on their phone, tablet, or computer and expect it to work on any operating system or browser - without needing to install anything or do any setup on their device. They click on a link and everything just ... works!

Development-wise, it's extremely simple to get started. To write and run code, you only need a text editor and a browser (which you already have if you're reading this).

## Team Split

An important factor to deciding your application is who is on your team, what those individual members excel at, and also what skills they may want to pick up. No two hackathon team/projects will be the same (even if the idea is the same) and you'll want to allocate based on what you're trying to achieve. If, as a team, you've decided you really, really, really want to win a prize, maybe your plan will be to task individual members on places they're strongest at: python experts on backend, creative developers on HTML frontend, etc. It also depends on your project, if you choose to utilize Firestore or some other BaaS (backend-as-a-service), you'll probably be a full team of frontend devs.

## Ideation

Ideation comes from different angles depending on the context. If you're a product designer for a company, your new product will likely stem from one of the products your company already makes. If you work for Garmin under the GPS making team, you might find yourself trying to come up with ways that you can improve people's lives when they're using a Garmin GPS Product. For a hackathon though, you can create _anything_. Although offers you flexibility, the paradox of choice makes it fairly difficult to find a starting point in your ideation.

So, a common way to sort of "force" and idea at a hackathon is to work backwards. Rather than trying to figure out a problem that you want to solve with your app, you can look at the list of data and tools you have at your disposal and work backwards to see if these things can solve issues that currently exist.

### Data Sources

I know that Yelp has a gigantic database of restaurants and businesses and their data. I can google something like: `Yelp API` and see that Yelp, indeed, does have an API.

![Yelp Fusion API homepage](./assets/yelp-api.png)

Other examples:

**API's**

-   stock API: get live stock info, tickers, etc.
-   Yelp API: get restaurant, business data
-   Spotify API: get user playlists, songs

**Tools/Libraries**

-   Firestore: live database as a service
-   WebAudio API/Tone.js: make music in the browser
-   [Three.js](https://threejs.org//WebGL): make 3d applications in the browser
-   [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) API: get user information, coordinates, device, camera, etc.
-   [leaflet](https://leafletjs.com/): map library
-   [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API): speech recognition, etc.

### Architecture

So now we have an idea. Great! How do we execute it? Since we came up with our idea backwards, it's actually almost guaranteed that it'll work. If you were to come up with an idea organically, you first need to do research if it's actually _possible_ or doable before you start working on it. What you'll find here, unfortunately, is that a lot of REALLY REALLY good ideas fall short because one tiny piece of the application just isn't doable yet.

For most web apps (and apps in general), you're going to need a frontend and a backend. Frontend, in general, refers to the interface that our users will interact with when using our app. Backend, is our business logic. It is all the code that will make our application do what we said it does.

> If you think about how a piano works, the key is the frontend, the hammer, the strings and everything that makes the actual sound is the backend. The resulting sound is what gets sent back to the frontend so the user can hear it.

## Live Demo

Frontend Tasks:

1. [Intro to Web Dev](https://learn.ryqn.dev/article/intro-to-web-dev)
    - [if you want to try React](https://learn.ryqn.dev/article/setting-up-react)
    - [create react app](https://learn.ryqn.dev/article/creating-your-first-react-project) // Slightly out of date now, would recommend [Vite](https://v3.vitejs.dev/guide/) instead.
2. Test your backend

Backend Tasks:

1. [Make API call to Yelp](https://learn.ryqn.dev/article/quick-api-call-lesson)
2. [Setup Flask backend](https://learn.ryqn.dev/article/hackathon-flask)
3. Test your backend

### Frontend Prerequisites

-   browser (Chrome/Firefox)
-   code editor (I prefer [VSCode](https://code.visualstudio.com/))

### Backend Prerequisites

-   python3
-   pip (or some other way of installing python packages)
-   code editor (I prefer [VSCode](https://code.visualstudio.com/)), it should be able to run the python code
-   ngrok (maybe, depends if you want to host it onto the internet)

## Wrapping up

This hopefully gives a good overview of how to create a hackathon web app project. The learning of the languages and actual implementation is left up to you but hopefully have left enough resources here to get everyone started!

I'll be mentoring for the entire event so if you have questions, try and find me and I'll do my best to help y'all's!

## Additional Resources

#### [MDN](https://developer.mozilla.org/en-US/)

This is by far the best source of documentation for ANYTHING native to the web. This means, built-in javascript functions and other browser API's and all of their documentation. If you want to work with Dates, for example, you'll want to look at the JS Date Object. If you want to work with a browser API like WebSpeech, WebAudio, WebGl, Navigator, etc. all the documentation is there.

### APIs

For company specific API's, there'll usually be a documentation site and it's just Google-fu trying to find it. I'd suggest trying to implement their quickstart (usually they have a basic tutorial) and then once you get that down, you can start adding your own take and flavor of how this API should be used.

Example for YELP: https://docs.developer.yelp.com/reference/v3_business_search

## Final Questions

-   Any part of that unclear that you want to revisit?
-   Any ideas for styling things?
