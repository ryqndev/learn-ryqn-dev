# Hackathon Cheat Sheet

```table-of-contents

* [Overview](#overview)
* [Basic](#basic)
    1. [Persist data locally](#persist-data-locally)
```

## Overview

## Basic

### Persist data locally

Let's say you want to save data that you want to persist and retrieve even after the user closes your website. Normally, you'd use a database of some sort so that a user can retrieve stuff when they login into a new device, however, there's a way to persist data locally without needing a database.

In comes [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

Localstorage is a built-in function in browsers (supported in every major browser) that allows you to persist data in each browser, unique to every url. That means, if you use localStorage on your website - other websites can't read your localStorage data but the next time someone goes on your website, you can pull from that data again.

#### Use cases

Some popular use cases here include:

> **Saving a high score for a game** Apps like wordle used localStorage to save your high score - which is why you don't keep your scores if you switch devices (NYT has since attached it to their login system)

#### Caveats

localStorage data is saved locally, which actually means that a user can manually change this data. This is why, it's not _actually_ ideal for things like saving a high score since that allows users to "fake" their scores.

It's actually fairly simple to alter localStorage data so usually this feature is used on production web apps for things like user selected themes, preferred languages, and other visual things.

#### How to

```javascript script.js
// Loads up the stored value
let data = localStorage.getItem("my-saved-data");
```

If this item has not been set before (i.e. first time loading the website), data will have a value of undefined. So often times, you'll want to set a default value:

```javascript script.js
let data = localStorage.getItem("my-saved-data") ?? "default";
```

Localstorage only allows you to store strings, so if you want to save entire objects/dictionaries of data, you'll need to stringify it first, and then parse it when you load it up.

```javascript script.js
const userObject = {
    name: "Ryan",
    type: "Cool dude",
};

let data = localStorage.setItem("user") ?? "default";
```
