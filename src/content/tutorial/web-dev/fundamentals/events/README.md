# Web Dev Fundamentals: Events

```table-of-contents

* [Overview](#overview)
* [Types of events](#types-of-events)
* [Reacting to events](#reacting-to-events)
* [Common event examples](#common-event-examples)
    1. [Clicking a button](#clicking-a-button)
    2. [Taking in user input](#taking-in-user-input)
    3. [Reacting to user input](#reacting-to-user-input)
    4. [Keyboard events](#keyboard-events)

```

## Overview

Events are a core part of the web experience. In fact, we tend to say that the web experience is event driven. So that begs the question, what is an event? An event can be anything: a button click, a page load, mouse hover, or even something set on a timer. Events are a way for developers to bring interactivity to the webpage. After every event, a developer can make read the metadata about that event, and choose to act on it. Let's take a look at how we would do this:

## Types of events

There's a HUGE list of different types of events in the browser - like I said earlier, an event can be *anything* - but we'll focus on some of the most common ones here and learn how to use them, which you can then extrapolate to any other type of event.

You can find the whole list here: [https://developer.mozilla.org/en-US/docs/Web/Events](https://developer.mozilla.org/en-US/docs/Web/Events)

| Event type | Interactions |
| --- | --- | --- |
| User device | Moving the mouse, pressing the keyboard, touch screen, pressing connected joystick/gamepad |  |
| DOM element | Clicking a button, hovering over a div with the mouse, moving a slider, inputting text into a form |
| Async/Callbacks| Loading in assets (3d objects, for ex.), fetching data from an API, streaming video, recording audio |


## Reacting to events

Running code in response to an event boils down to two main parts: listening to events, and handling them.

Even though events are triggered by a multitude of actions, you can't interact with any of them until you start *listening* to them. To *listen* and *handle* an event, you need to attach an [EventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) to an object and pass in a handler function. There are three main parts to it:

```html index.html
<!DOCTYPE html>
<html>
  <head>
    <title>Event fun!</title>
    <script src="./script.js"></script>
  </head>
  <body>
    <button id="btn">Click me!</button>
  </body>
</html>
```

```js script.js
const button = document.getElementById('btn');

function clicked() {
    console.log('This button has been clicked');
}

button.addEventListener('click', clicked);

```

On line 1: I create a variable called `button` and set it equal to the DOM element. This means that when I'm using the `button` variable, I am pretty much referencing the button that is displayed on the website.

On line 3: I create a function called `clicked`. I can call the function by running `clicked()` - adding the parenthesis after, indicating I want to `call` the function.

On line 7: I add an event listener by calling the `addEventListener()` function that's a part of every HTML element and specify 2 things in the parameters: the `type of event` and the `callback function` that triggers when the attached event is triggered.


### Other elements

Even though a button is normally associated with clicking, you can actually attach the `click` handler onto pretty much any element. This is because 

```html index.html
<!DOCTYPE html>
<html>
  <head>
    <title>Event fun!</title>
    <script src="./script.js"></script>
  </head>
  <body>
    <div id="div">Click me!</div>
    <p id="p">Click me!</p>
  </body>
</html>
```

```js script.js
const div = document.getElementById('div');
const p = document.getElementById('p');

function clicked() {
    console.log('This button has been clicked');
}

div.addEventListener('click', clicked);
p.addEventListener('click', clicked);

```

## Common event examples

Here are some of the more common event handling situations you might have:

### Clicking a button
Extremely common, straightforward

```html index.html
<!DOCTYPE html>
<html>
  <head>
    <title>Event fun!</title>
    <script src="./script.js"></script>
  </head>
  <body>
    <button id="btn">Click me!</btn>
  </body>
</html>
```

```js script.js
const button = document.getElementById('btn');

function clicked() {
    console.log('This button has been clicked');
}

button.addEventListener('click', clicked);

```

### Taking in user input

Example use case: when a user is typing into a search bar and clicks a button to submit

```html index.html
<!DOCTYPE html>
<html>
  <head>
    <title>Event fun!</title>
    <script src="./script.js"></script>
  </head>
  <body>
    <input type="text" id="user-input" />
    <button id="btn">Click me!</btn>
  </body>
</html>
```

```js script.js
const button = document.getElementById('btn');

function clicked() {
    // use the .value property to get the user typed value in the textbox
    const userInput = document.getElementById('user-input').value;

    console.log('The user typed this:', userInput);
    // likely you want to do something with `userInput`
}

button.addEventListener('click', clicked);

```

### Reacting to user input

The example above shows you how to read the user input after the user submits what they wanted to type. If you want an even higher level of control over the text box, you can use the `onchange` event handler to get the user typed values as they're typing into a text box.

Example: There are a ton of use cases here: you could write a handle change function here that only allows numbers and capital letters by reading the user typed letter and deciding whether or not to allow it. You could also write an autocomplete function that suggests options as a user is typing into a search bar.

Essentially, the `onchange` event from an `<input />` tag gets triggered whenever the content inside it gets changed (either by typing, backspacing, or even clearing from select all + backspace)

```html index.html
<!DOCTYPE html>
<html>
  <head>
    <title>Event fun!</title>
    <script src="./script.js"></script>
  </head>
  <body>
    <input type="text" id="user-input" />
    <button id="btn">Click me!</btn>
  </body>
</html>
```

```js script.js
const input = document.getElementById('user-input');

function handleChange(event) {
    console.log('The user typed this:', userInput);
}

input.addEventListener('change', handleChange);

```


### Keyboard events

Keyboard events are a HUGE part of any web application. Sometimes, the web app can be completely centered around keyboard events. For example, games are the biggest users when it comes to keyboard events. Arrow keys and W/A/S/D are very often used as movement commands and are integral to any game. Even business applications like Excel/Figma/Google Docs rely heavily on keyboard events - imagine using any of those without common hotkeys like `Cntrl + C` or `Cntrl + V`.

What's the difference between what I'm about to show you and the one above? The one above is only relevant to the input tag (so if you type outside of it, it won't register) but also, there are tons of keys that don't work inside an input tag like the `Enter` key, Arrow keys, and `Cmd` on Mac or `Alt` on Windows.

```html index.html
<!DOCTYPE html>
<html>
  <head>
    <title>Event fun!</title>
    <script src="./script.js"></script>
  </head>
  <body>
    <input type="text" id="user-input" />
    <button id="btn">Click me!</btn>
  </body>
</html>
```

```js script.js
const input = document.getElementById('user-input');

function handleChange(event) {
    console.log('The user typed this:', userInput);
}

input.addEventListener('change', handleChange);

```
