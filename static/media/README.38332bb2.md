# Starting out with React

## Table of Contents

* [Intro](#intro)
* [What is React?](#what-is-react?)
* [When should I use React?](#when-should-i-use-react?)
* [Write a basic React program](#write-a-basic-react-program)
    1. [Installation and Setup](#installation-and-setup)
    2. [Running our code](#running-our-code)
* [Understanding what we just did](#understanding-what-we-just-did)
    1. [Analyzing our source code](#analyzing-our-source-code)
    2. [Analyzing our terminal](#analyzing-our-terminal)
    3. [Testing our web server](#testing-our-web-server)
* [Where do we go from here?](#where-do-we-go-from-here?)
    

## Intro

The web has been around for over three decades now and even today, it's still evolving. As computers get faster and the limits of technology get pushed, we, as software developers, should take full advantage of new realm of possibilities.

Consider, just 10 years ago, youtube videos uploaded at 480p were considered "high-quality" and now, even 1080p at 60fps isn't enough for some users.
![CHOCOLATE RAINNN](./assets/CHOCOLATE-RAINNNN.png) ![lit resolutions](./assets/lit-resolutions.png)

First image: resolutions offered from an old CLASSIC "Chocolate Rain" by Tay Zonday (Youtube: April 2007)

Second image: resolutions offered from an random video I found about nature (Youtube: November 2021) 

Why are all of these resolutions supported now and not back then? A couple reasons:

• Internet infrastructure limitations\
&nbsp;&nbsp;&nbsp;
• Internet hardware was not good enough to support such high quality video streaming

• Personal computer limitations\
&nbsp;&nbsp;&nbsp;
• PC's were not powerful enough to reliably play these videos even if they had the data on hand

• Monitor limitations\
&nbsp;&nbsp;&nbsp;
• Affordable monitors couldn't even display resolutions that high even if they had all of above

Why is any of this important? Well, it's imperative to understand just how much websites have changed, and with that, how much the way we *write* websites has changed as well. Although you can still write websites in plain HTML/CSS/Javscript, you may not be taking full advantage of the power modern browsers have. 

I'll elaborate more on this later in the [When should I use React?](#when-should-i-use-react?) section but keep in mind that plain HTML/CSS/Javascript can sometimes be the better solution and you should always use the proper tools for every job.

## What is React?

The official definition: `React is a Javascript library for building UI's (User Interfaces) or components.` That's great! But, what does it mean? Here's *my* description: `React makes writing webapps easier. by alot.`

Here's a really bad, but short explanation of how React works - when you write code using React, you write code in Javascript and React will compile that into valid HTML code. So you're not really writing HTML code (although JSX looks alot like HTML), but Javascript instructions on how React should generate that final HTML/CSS/JS.

> ###### What's the difference between a web-app and a website?
>
>    A web-app has more functionality and interactivity vs. a website - which is more static. Twitter is a web app because your feed is dynamic - the posts that you see change depending on the day, the user, and various other factors. Your user interface (what you see) changes based off of user interaction, for example, when you retweet or block someone.
>
>   A restaurant might have a website that has information about the location and menu but what a user sees does not change depending on the time of day, nor the user. The data is static and does not respond to any user interaction. (assuming there's no online ordering, etc.)
 
Here are some quick snippets that show you *how* React makes things simpler for you. Note: These snippets will not run by themselves, they're just here to illustrate differences in doing the same thing.



```html Plain HTML/CSS/Javscript 
<div id="display">old data</div>
<button onclick="
    document.getElementById('display').innerHTML = 'changed data';
    document.getElementById('display-2').innerHTML = 'changed data';
">
    Click me to change the text!
</button>
<div id="display-2">old data</div>

```

```javascript React
const [textContent, setTextContent] = useState('old data');
return (
    <>
        <div>{textContent}</div>
        <button onclick={() => setTextContent('changed data')}>
            Click me to change the text!
        </button>
        <div>{textContent}</div>
    </>
);
```

What's the difference aside from the syntax? 

In vanilla HTML/CSS/Javascript, your code is much more `imperative`. Notice how not only do we explicitly say `when` to change the interface, but also `where` and to `what`.

However, in the React example, we have a variable (called `State` in React) and we directly embed that variable into the HTML (called `JSX` in React)
and whenever we change that variable, all instances of that variable will be updated in the interface without us telling Javascript specifically to change it.

This is a pretty basic example and probably sounds confusing to some of you but I want you to imagine how an app like Twitter of Facebook can benefit from this.

> In any given user's Facebook feed (or meta-feed???), there could be hundreds of posts that each have live comments updating on each individual post. The question then arises, how do you manage all of these data updates that are occuring at any given second? If someone comments on a certain post, it should immediately be reflected in the user interface but there are hundreds of posts, how do you know which HTML element you need to update? What if you need to update multiple places?

This is why declarative libraries like React are so powerful; we don't need to manage all of these different connections like which buttons and inputs will change which displays. Rather than managing the interface itself, we manage the data behind it. The idea is simple, `if there's a change in the data, React will "react" to it. That's why it's called React.`

## When should I use React?

Going back to my definition of React, I said it makes writing webapps *easier*. That doesn't mean that without React, it is impossible to write the next Facebook but it does make the job 10000x more doable. However, everything I've said so far is really just an argument for using a web framework/library and I would say that for pretty much any production project you have, you should always opt for a web framework/library of some sort whether that be React, JQuery, Vue, Svelte, Three.js, etc. over plain vanilla HTML/CSS/JS. 

React is, once again, a library for building web interfaces. Before you consider whether or not you want React or one of its competitors, ask yourself if a web interface is the most important part of your product. If you're building a AR/VR product in the browser, or a graphics intensive game, you probably don't need React. To reiterate, pick the right tool for the job. Accidental complexity is killer. 

Once you're sure that you need a web framework to develop user interfaces, it's time to pick which one - as there are many. To name a few:
• React.js\
• Vue.js\
• JQuery\
• Svelte\
• Angular

If you're asking which library/framework to use for - say - a startup with a team, the answer is whatever your team is most proficient in. If 2/3 of your frontend team is comfortable in Vue.js, you should probably stick with that as the differences between these component-based frameworks are not nearly worth the difference in developer experience (DX).

If you're asking which library/framework to learn because you're a student or have no prior experience in web development, then that varies and answers will differ wildly depending on who you ask.

Here's a good compilation of stats that show the trends of web technologies: [State of JS 2020](https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/)

React is, by far, the most popular library. Although popularity !== better, it does mean that there's more StackOverflow questions, more resources online, and more job opportunities. 

Since framework preference is mostly just a matter of personal preference, I would search online for different opinions and maybe even try the frameworks yourself but my opinion is I prefer React. Going into the details of why isn't that important for the purposes of this specific article.


## Write a basic React program

### Installation and Setup

Just like regular vanilla web development, we're going to need a text editor of some sort - ideally an IDE. My IDE of choice is [VSCode](https://code.visualstudio.com/), as is for many web developers but since testing will be done through browsers and the compilation is done with one terminal command, any text editor is fine.

As mentioned earlier, you will need a browser (likely something you already have) but preferably Chrome or Firefox. Sorry Safari and Internet Explorer lovers.

Lastly, you're going to need React but more specifically, the developer environment that can install it (as well as other packages React will need). We will need to [install Node and the package manager](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) it comes with - NPM (which funnily enough, does not actually stand for Node Package Manager)

Ensure that the versions you have installed are correct: [Node >= 14.0.0 and npm >= 5.6]

You can type these commands in a standalone terminal or in the [integrated terminal built into VSCode](https://code.visualstudio.com/docs/editor/integrated-terminal).

```bash
node -v
npm -v
```

If you have all of these, then you can go ahead and install the boilerplate code which will set up everything for you to immediately dive into React code.

Create a new folder somewhere on your system. This is where all of our files will go. If you haven't done so already, open this folder up in the terminal and type the command `npx create-react-app .`. An example of this process will look something like this:

```bash
$ ls
Applications	Documents	Movies
Downloads	    Desktop		Library	

$ cd Desktop

$ mkdir react-test

$ cd Desktop

$ npx create-react-app .
Creating a new React app in /Users/Ryan/Desktop/react-test.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...

...
```
Here, I `cd` into my Desktop directory and create a folder called react-test. Then I `cd` into that folder I just created and run the command `npx create-react-app .`. *Note: The `.` at the end just means "in this folder" but you can type a folder name instead and it will create a folder for you.*

### Running our code