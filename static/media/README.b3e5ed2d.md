# Starting out with React

## Table of Contents

* [Intro](#intro)
* [What is React?](#what-is-react?)
* [When should I use Flask?](#when-should-i-use-react?)
* [Write a Flask program in 5 lines of code](#write-a-flask-program-in-5-lines-of-code)
    1. [Installation and Setup](#installation-and-setup)
    2. [5 Lines of Code](#5-lines-of-code)
    3. [Running our webserver](#running-our-webserver)
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
• Internet infrastructure limitations
    - Internet hardware was not good enough to support such high quality video streaming
• Personal computer limitations
    - PC's were not powerful enough to reliably play these videos even if they had the data on hand
• Monitor limitations
    - Affordable monitors couldn't even display resolutions that high even if they had all of above

Why is any of this important? Well, it's imperative to understand just how much websites have changed, and with that, how much the way we *write* websites has changed as well. Although you can still write websites in plain HTML/CSS/Javscript, you may not be taking full advantage of the power modern browsers have. 

I'll talk about this later in the ["When should I use React?"](#when-should-i-use-react?) section but keep in mind that plain HTML/CSS/Javascript can sometimes be the better solution and you should use the proper tools for every job.

## What is React?

The official definition: React (React.js) is a Javascript library for building UI's (User Interfaces) or components. That's great! But, what does it mean? Here's *my* description: React makes writing webapps easier. by alot. 

> What's the difference between a web-app and a website?
>
>    A web-app has more functionality and interactivity vs. a website - which is more static. Twitter is a web app because your feed is dynamic - the posts that you see change depending on the day, the user, and various other factors. Your user interface (what you see) changes based off of user interaction, for example, when you retweet or block someone.
>
>   A restaurant might have a website that has information about the location and menu but what a user sees does not change depending on the time of day, nor the user. The data is static and does not respond to any user interaction. (assuming there's no online ordering, etc.)
 
Here are some quick snippets that show you *how* React makes things simpler for you. Note: These snippets will not run by themselves, they're just here to illustrate differences in doing the same thing.


```html Plain HTML: index.html

<div id="display">old data</div>
<button onclick="document.getElementById('display').innerHTML = 'changed data';">
    Click me to change the text!
</button>

```

```javascript React: react.jsx
const [textContent, setTextContent] = useState('old data');
return (
    <>
        <div>{textContent}</div>
        <button onclick={() => setTextContent('changed data')}>
            Click me to change the text!
        </button>
    </>
);
```
