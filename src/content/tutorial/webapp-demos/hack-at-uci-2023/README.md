# Hack at UCI 2023: Intro to Product Design and Web Dev

```table-of-contents

* [Overview](#overview)
* [Why wouldn't you want an Web App?](#why-wouldnt-you-want-a-web-app)
```

## Overview

Welcome to Hack at UCI 2023! The general, overarching goal at a hackathon is to create *something*. There's no limit on what you can make or how you make it but we tend to see web apps as the most popular submission. This is in part because web apps are *(arguably)* the simplest to use but also *(arguably)* the simplest to get started.

As some quick examples, you could create a game in Unity but that requires exporting some executable that someone has to download on their phone or computer. You could create an Android or iOS native app, but then you only have a product that works on a single OS (can't write an iOS app that works on Android and vice versa). You could write some AI/ML or data vis applications in R or Python, but that requires a user to have R or Python installed on their computer.

For the average joe, if you give them a website, they can open it on their phone, tablet, or computer and expect it to work on any operating system or browser - without needing to install anything or do any setup on their device. They click on a link and everything just ... works!

Development-wise, it's extremely simple to get started. To write and run code, you only need a text editor and a browser (which you already have if you're reading this). 

So, it's easy to run and easy to code. Why would we want anything else?

## Why Wouldn't you want a Web App?

There are some good reasons why you wouldn't want to make a web-app. We have multiple different programming languages and systems for a reason. Here are some examples and reasons:

- You want to make a game

You can make games in the web (see: Agar.io, kahoot, [that one egg shooting game](https://shellshock.io/)) but what you'll notice is that these games are 1. not low-latency dependent and 2. not graphically intensive. Games like LoL or Valorant can't be written into the web because they are ping reliant. These are games of skill and any network latency massively disrupts the skill factor of the game. Web is written using TCP connections which are much slower than UDP connections that a native C++ client can use. Similarly, most graphically intensive games are written in C++ or C# - languages that have memory management done by the user. This is because graphically intensive games require extremely efficient code - something that web tech doens't have *just* yet (talk to me if you're interested in where this is going. hint hint it's called WebAssembly). Also, assets are EXPENSIVE. Most websites should be under 1-2 MB in size. Games like Lost Ark and Cyberpunk are usually 100's of GB in size. Long story short, if you're planning on making a beautiful, massive 3d world with many assets - stick to C++ or C# (Unity). 

- You need to use sensors on a phone

Laptops and desktops don't have pedometers or gyroscopes. Can you imagine someone trying to use


## Ideation

Ideation comes from different angles depending on the context. If you're a product designer for a company, your new product will likely stem from one of the products your company already makes. If you work for Garmin under the GPS making team, you might find yourself trying to come up with ways that you can improve people's lives when they're using a Garmin GPS Product. For a hackathon though, you can create *anything*. Although offers you flexibility, the paradox of choice makes it fairly difficult to find a starting point in your ideation.

So, a common way to sort of "force" and idea at a hackathon is to work backwards. Rather than trying to figure out a problem that you want to solve with your app, you can look at the list of data and tools you have at your disposal and work backwards to see if these things can solve issues that currently exist.

### Data Sources

I know that Yelp has a gigantic database of restaurants and businesses and their data. I can google something like: `Yelp API` and see that Yelp, indeed, does have an API. 

![Yelp Fusion API homepage](./assets/yelp-api.png)


