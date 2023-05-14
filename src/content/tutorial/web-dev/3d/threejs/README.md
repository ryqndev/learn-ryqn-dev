# Intro to 3D Web Dev [Three.js]

```table-of-contents

* [Overview](#overview)
    1. [Background](#background)
    2. [Prerequisites](#prerequisites)
* [Getting Started](#getting-started)
    1. [Concepts](#concepts)
    2. [Boilerplate code](#boilerplate-code)
```

## Overview

In my opinion, 3-dimensional visualization is one of the cooler things you can do in the web - but it's much more different than traditional web development. In this tutorial, we'll go over the basics of 3D web development using Three.js - a Javascript library built for making 3d visualizations with WebGL in the browser.

### Background 

I mentioned that Three.js uses WebGL, but what is WebGL? This is the code for a Fragment Shader:

```html
<script id="vertex-shader" type="x-shader/x-vertex">
  attribute vec2 aVertexPosition;

  uniform vec2 uScalingFactor;
  uniform vec2 uRotationVector;

  void main() {
    vec2 rotatedPosition = vec2(
      aVertexPosition.x * uRotationVector.y +
            aVertexPosition.y * uRotationVector.x,
      aVertexPosition.y * uRotationVector.y -
            aVertexPosition.x * uRotationVector.x
    );

    gl_Position = vec4(rotatedPosition * uScalingFactor, 0.0, 1.0);
  }
</script>

```

Pretty scary imo. Essentially, WebGL is a built-in Javascript API that allows you to utilize the GPU and render 3D graphics efficiently in the browser, but it's not very easy to learn. Luckily, some developers have created Three.js - a library that utilizes WebGL under the hood but exposes a much more user-friendly API for developers to use. If you end up really going off the deep end in 3D web dev, the Three.js library probably won't cover all of your use cases and you'll have to dive into WebGL directly. If you're just starting out, however, Three.js is a perfect start.

### Prerequisites

- basic web dev
- Intermediate Javascript
- Programming fundamentals (loops, conditionals, functions, etc.)

Notice, there's pretty much no need to know any HTML or CSS - it's almost all programatically done with Javascript. Although you can integrate HTML and CSS overlays/popups (and likely will later on) into your 3D project, it's usually not the main focus of our app.

## Getting Started

### Concepts

All 3D development follows these basic concepts (Game engines like Unity and Unreal Engine also follow these concepts): To render our world in 3D, we need 3 main things: a `scene`, a `camera`, and a `renderer`.

Think about how you, as a human, perceive the 3-dimensional world around you. The entire world is the scene, your eyes are the camera, and the way your brain takes in light from the eye and creates a picture is the renderer.

There are other parts as well - like lights and textures - but we'll cover them later. For now, let's just focus on the scene, camera, and renderer.

### Boilerplate code

We'll start off with a barebones project that looks like this:

```file
└── ryqndev-three-js (folder)
    ├── script.js
    ├── styles.css 
    └── index.html
```

```html index.html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>learn.ryqn.dev Three.js</title>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.151.3/three.min.js"
            integrity="sha512-He29azWb6CQ0yzDGpF61I/SIWlAclbP/Zh95diyYHwpN0VgkH3rtJKJkcApFJG517GxurJQ2UB676HOhB6pyBQ=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        
        <!-- our own custom JS script file that we'll add our code to -->
        <script src="./script.js"></script>

        <!-- simple css that just removes the white margin that comes default -->
        <link rel="stylesheet" type="text/css" href="./styles.css" />
    </head>

    <body>
    </body>
</html>

```

```css styles.css
body {
    margin: 0;
}

```

```js script.js
// empty... for now
```

### 