# Intro to Web Developement [Halloween Edition]

```table-of-contents

* [Overview](#overview)
* [Dive into it](#dive-into-it)
    1.[HTML](#html)
    2. [CSS](#css)
    3. [CSS for positioning](#css-for-positioning)
    4. Javascript](#js)
* [Build our spooky app](#build-our-spooky-app)
    1. [Design](#design)
* [Browsers](#browser)

```

## What you need

Requirements:

-   Computer (doesn't matter mac/windows/linux/etc.)
-   text editor (prefer a code editor like VSCode)

How dope is that? you literally only need a computer and a code editor. The reason why is because in web development, we run/test all of our code in the browser which comes default on every personal computer. In fact, you could probably even use a phone for this (super not recommended though.. do it for the memes)

Soft requirements:

For your IDE (Integrated Developer Environment, aka code editor), would highly recommend VSCode. This is (as of 2024) the industry standard and I'd estimate 90% of web developers in silicon valley use it. I've seen others: webstorm, vi/vim but would say VSCode is probably your choice to start off with.

For browsers, would prefer if you had chrome/firefox (tbh chrome _probably_ better). This is for three main reasons: 1. they have the best developer environment, 2. they have the largest market share (safari is important to test on but their dev ex is not the best) and 3. they have the most support for common web standards.

You can read the [browsers](#browsers) section down below for more information.

## Overview

This workshop is geared for folks who are interested in web development (...or even those not interested tbh...) and have little to no experience in this field. Ideally, having taken one or two coding classes may help you pick up the Javascript portion of this but it's doesn't mean it's impossible or anything. What we're gonna do is go over the basic concepts behind each web development language, and use these to build a quick halloween themed application.

## Dive into it

Phew. Ok let's get started. All web development is done in three language: HTML, CSS, and Javascript (JS). Now, before you get too spooked, it's not really three entire languages you have to learn.. each language is like 1/3 of the entire "web development language" and this actually makes things easier. If you take nothing away from this entire workshop, I'd want you to at least remember these quick one line zingers I use:

1. HTML denotes the content and structure of a website.
2. CSS makes things pretty
3. JS provides interactivity to the webpage

That's it. Knowing these will let you know exactly which languages you need

#### HTML

Once again, HTML (HyperText Markup Language) denotes the content and structure of a website. What does this mean? Essentially, you can think of HTML as a sort of glorified PDF or word document. You're really just putting text/media on a document and saying where things go. It's **not** a programming language so if we put the following in our HTML:

```html
<p>2 + 2</p>
```

you should expect to see the website display the text `2 + 2`, rather than `4` -- because it doesn't execute any instructions. We'll look into how we may want to be able to add in acutal programming when we get to Javascript.

#### CSS

Of the three web development languages, CSS (Cascading Style Sheets) is the easiest to learn but arguably one of the hardest to master. Remember how I said CSS makes things pretty? All CSS does is that it allows users to change individual styling properties of every item on a webpage. An example of a property here could be the color of the text, or the size of the text, or a border - whether it's a dashed/solid/dotted border, etc.. and the syntax is _really_ simple. Each CSS block is split into two parts: a _selector_ and a set of _rules_. Each rule can also be broken down into two parts: a _property_ and a _value_. Let's see it in action:

```css
/**
 * All CSS blocks bollow this format:
 *
 * <selector> {
 *      <property1>: <value1>;
 *      <property2>: <value2>;
 * }
 *
 * some examples:
 */

body {
    margin: 0;
    background-color: black;
    color: white;
}

button {
    padding: 20px;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    border-radius: 8px;
}

.large-button {
    padding: 80px;
}
```

#### CSS for positioning

CSS is used to position items as well as style them. Although you might think, "hey, I thought HTML was supposed to denote structure". Well yes, but HTML only really says what goes first, second, etc. - CSS is what you use to decide if it should be a 1 or 2 column format or maybe a scrollable 1 dimensional list for example. A common practice is to use CSS Flexbox for 1-dimensional positining (think navbars) and CSS Grid for 2D placement (think grid formats) - although personally, I tend to prefer using CSS Grid for all of my positioning.

You should use a dedicated CSS Grid tutorial to learn how to use it but just as an example:

```html grid example (html)
<div class="parent-container">
    <div>a</div>
    <div>b</div>
    <div>c</div>
    <div>d</div>
    <div>e</div>
    <div>f</div>
</div>
```

```css grid example (css)
.parent-container {
    height: 100vh;
    width: 100vw;

    box-sizing: border-box;
    padding: 20px;

    display: grid;
    grid-template-columns: 80px 1fr 120px;
    grid-template-rows: 1fr 100px;
}

/* this selector just means every div that's a direct descendent of the .parent-container class */
.parent-container > div {
    display: grid;
    place-content: center; /* grid allows you to perfectly center items. this is for the letters */
}
```

which results in:

![grid example](./assets/grid-example.png)

#### JS

Javascript provides interactivity for our website. It's event driven - meaning that it's usually executed in response to some sort of event (user mouse click, website finishes loading, user hovers over something, etc.). It's capable of interacting with the HTML itself -> dynamicallly adding and removing HTML elements -> and can pull information from the website (user types into an text input, for example)

### Build our spooky app

Now, let's put all of these together to see what it looks like to build a quick web app.

#### Design

This isn't part of the coding process but normally you'd want to have some designs prepared - maybe sketch out on a piece of paper or prototype on some design software like Figma.

## Browsers

Browsers are lowk one of the bigger pain points of web development. There are like 3 main browsers out there (chrome/firefox/safari) and quite literally, they each have a different rendering engine. What that means is your code can actually run differently if your users have different browsers. Not only that, different browsers have different version and are even different on different devices (yikes!!).

Firefox/Chrome on an iOS device is actually running the same rendering engine as Safari which means that you're actually abiding by Safari limitations. Some browsers like Arc and Brave have some market share but they all use the webkit based rendering engine underneach -> which is known as Chromium and is thus similar to Chrome. There's so much extra information on this that I could probably write up an entire article on this but until you start writing production level applications, you can ignore this part for now.
