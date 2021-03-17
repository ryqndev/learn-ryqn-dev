# Express.js Quickstart

*note: the `intro` and `a quick look` sections are the same as those in the frontend docs and other backend docs. Feel free to skip it if you've already read it once.*

## Table of Contents

* [Intro](#intro)
* [A quick look](#a-quick-look)
    * [Frontend](#frontend)
    * [Backend](#backend)
    * [Final thoughts](#final-thoughts)
* [Starting the backend work](#starting-the-backend-work)
    * [Setup](#setup)
    * [Running the server](#running-the-server)
* [Understanding the code](#understanding-the-code)

## Intro

Looks like you're the designated backend developer, huh? Let's go ahead and get you started but before you actually dive into the code, you should first get a good understanding of the entire architecture of your app. We're going to be developing a web app - which is simply an app that you can use through the browser (Examples of web apps include Facebook, Twitter, and Netflix). These web apps are split into 2 main sections: the frontend and the backend. Take a look at the diagram below to see what they do:

![Frontend-backend-diagram](./assets/frontend-backend.png)

*Image source: [altexsoft](https://www.altexsoft.com/blog/front-end-development-technologies-concepts/)*

One thing to note is that there is only one web server (backend) but multiple clients (instances of frontend). This is because there will be multiple users on your website at different times on different computers - all independently running their own version of the frontend code in their browsers but they will all be communicating with the same backend web server.

In other words, without a backend, there is no way to connect other users on the frontend. They are all running your frontend code but completely independent of other users. In some cases, this is fine! You may want to develop an app that works offline only like a calculator, for example. However, if you want to connect other users Facebook or Twitter, you need to have a backend.

#### A quick look

Now let's talk about the frontend and backend on a more technical level. The frontend will consist of three languages (HTML/CSS/Javascript) that work in conjunction to describe how a website looks and operates. HTML will define the structure and content of the webpage, CSS will `style` it to look pretty, and Javascript is the programming language that will provide interactivity to the site. The backend will be a server that you run on your own computer connected to the internet (in production, you would `host` your server on a cloud service like [AWS](https://aws.amazon.com/) or [GCP](https://cloud.google.com/)) and listen for requests sent from your frontend.


Let's examine how all these parts work together in a website like Google. When a user navigates to [https://google.com](https://google.com), the browser makes a `GET request` to the Google server which returns an HTML file. The browser will parse the HTML (including CSS and Javascript) and display it. When the user starts to search for a term or phrase, the frontend will trigger a function when the search button is clicked which reads the user input in the textbox, and sends that result to the backend using something called an `http request` (a superset of the `GET request` earlier). The Google backend will then return a `http response` to your `request` with a list of search results. The frontend parses this returned data and displays it in the browser accordingly.

What tasks are these parts responsible for? Let's take a look! 

#### Frontend


The frontend was tasked with designing a website with a user interface (UI) that a user can use intuitively and then manage all user interactions (typing in a text box, clicking a button, etc.). It then has to send an `HTTP request`, wait for a response, and then get back some data. Finally, it's responsible for transforming this data (which is usually in a format called JSON) into something the user can understand quickly in the browser. You can see that frontend work here is largely responsible for user interaction and experience (UI/UX) rather than working with the core algorithms and logic.

#### Backend

The backend was tasked with first developing a web crawler that crawls the web for various websites and ranks the sites based on their importance - an algorithm now famously known as PageRank - and stores this information in their database. Then, they set up a backend server that's constantly running and listening for `requests`. Whenever a user clicks that search button on the frontend, it will send a `request` that has information regarding the search such as the term or phrase they want searched (and any other data they want to send as well) and the backend server will run the search on their database, get back a list of matched results, and then return the data in a `response` - likely in JSON format. You can see here that the backend has no visual component and is much more focused on solving problems and writing algorithms. 

#### Final thoughts

The Google search more about the search algorithm than the user interface. We know this because if we look at their competitors (like Bing and Yahoo), the main thing that separates Google from others is how effective and relevant their search algorithm is, rather than UI/UX (Notice how similar all search engines look). In this case, the backend will likely be doing most of the work, however, this is not always the case. Web apps like Google Docs or Google Maps are originally more focused on the frontend. Google Maps is responsible for generating a map and dynamically loading in assets while you navigate around (you don't download all the images of the entire world when you open the app) and transitioning from map view to street view. Over the years, Google has added more and more functionality to these programs that add complexity to the backend - such as live collaborating on Google Docs - but the point is that the amount of work you should expect is depending on what functionality you want your app to support. At the brainstorm stage of your app development, it's important to list out all the features you want your app to have, figure out which team (frontend or backend) is best suited for that developing that feature, and then split the responsibilities of your team accordingly.


## Starting the backend work

Now that we have a good understanding of the general architecture of web apps, let's go ahead and start doing our part in making a backend.

#### Setup


## Understanding the code

[...]