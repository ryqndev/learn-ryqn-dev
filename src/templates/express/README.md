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

We will be using Javascript as our language of choice for our backend. You may hear the term Node.js thrown around but a minor clarification, Node.js is the runtime environment, rather than the language. Since Javascript was originally developed as a language for the web, only browser could understand and run Javascript. Node.js was eventually developed after as a way to run Javascript outside of the browser when Javascript, as a language, matured. We will also be using a framework called [Express.js](https://expressjs.com/) which is the most popular web framework for Node.js. To sum up, our core backend work will be a web server written in Javascript utilizing the Express.js framework running on Node.

The main prerequisite is to install Node as well as the Node Package Manager that allows us to... manage our packages (more info on that later). You can check out [this link](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to get that done.

Once you have Node and NPM, you can go ahead and download the boilerplate code above or [here](https://github.com/ryqndev/learn-ryqn-dev/tree/main/src/templates/express). 

Before we can run the server, we need to install all the packages and libraries that our program depends on to run (a.k.a. dependencies). This is where NPM comes in handy. In our code, you will find a file called `package.json`. This file is a list of information about our code that NPM uses in JSON format. Down the list of items in that JSON are two properties named `dependencies` and `devDependencies`. In those keys, there are a list of libraries that we need as well as the version which NPM will conveniently install for us when we type

```bash
~$ npm install
```

in the terminal.

#### Running the server

The way you run node directly is to use the node command in your terminal and you would normally use the command:

```bash
~$ node [your-file-name].js

~$ node app.js
```

However, whenever we make changes to our webserver, we would have to restart it. Luckily, there is a library that helps speed up development (...among many other things such as crash handling) listed in our `devDependencies` called [Nodemon](https://nodemon.io/). Instead of typing `~$ node app.js`, we can start the server by just typing 

```bash
~$ nodemon
```

which should result in something like this:

```bash
~$ nodemon
[nodemon] 2.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
Server started and listening on port: 5000 (Press CTRL+C to quit)
    
You can access the server through [http://localhost:5000/]

```

If you see this, then congratulations, you are now running a web server. You can visit (http://localhost:5000/)[http://localhost:5000/] in your browser to verify that your server is responding to requests. The default endpoint, localhost:5000, should return this exact article in the browser (which is defined on line 12 in app.js).

## Understanding the code

[...]