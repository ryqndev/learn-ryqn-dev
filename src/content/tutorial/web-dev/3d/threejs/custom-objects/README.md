# Three.js - Custom Objects

```table-of-contents

* [Overview](#overview)
    1. [Context](#context)
* [Render a custom object](#render-a-custom-object)
    1. [Boilerplate](#boilerplate)
    2. [Sample 3d file](#sample-3d-file)
```

## Overview

So far, we've only really made some weird green looking cube - which is cool and all but... I was thinking big robots and giant monsters or something. How can I render my own custom 3d objects? Good question (that you totally weren't thinking but maybe you were). We're going to want a little bit of context here if you're not familiar with 3d work.

### Context

First, there are a TON of 3d models for free that you can get and use online of varying different needs but one thing you'll notice is the file types. In 3d land, there's a ton of different work that deals with 3d models in different capacities. Manufacturing facilities and 3d printers needs 3d models to help them create physical copies of an item. Different types of manufacturing uses different types: 3D printers use STL's, whereas a CNC might use a STEP file. Film makers and game developers need a 3d format capable of not just rendering a model but also "rigging" (animating movement) them. For the most part, you can google the different file types and look up ways to convert them into each other but the main thing to take away here is, when you have a 3d model, make sure you know the type of file it is so we can use the appropriate loader in Three.js.

## Render a custom object

### Boilerplate

For our starter code, we'll just use the finished code in the previous section with the green spinning lil' cube.

### Getting our 3d asset

Here, I'll be using a 3d asset that's in a GLTF file format. GLTF is the most common format for 3d web developers.

### Load in our 3d model

We'll be loading in our GLTF using the [GLTFLoader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader) that comes with three.js. To do this, all we need to do is copy the load function into our script.js file:

```js script.js
const loader = new GLTFLoader();

// Load a glTF resource
loader.load(
    // resource URL
    "assets/island/floating island.gltf",
    // called when the resource is loaded
    function (gltf) {
        scene.add(gltf.scene);

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object
    },
    // called while loading is progressing
    function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    // called when loading has errors
    function (error) {
        console.log("An error happened");
    }
);
```
