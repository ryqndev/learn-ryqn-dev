# JS array .map() Lab

## Intro
We'll be covering what is probably the most important function in front-end development: `.map()`. To really understand how powerful and useful this is, we need to make sure we know the basics: `loops`. What is a loop? It's a method of logic control flow based on iteration until a condition is met. In other words, it does something over and over again. Ideally, by now you're familiar with loops as a concept but here are some examples of loops in langauges you might be familiar with:

```python Python 
for i in range(10):
    print(i)
```
```cpp C/C++
for (int i = 0; i < 10; i++) {
    std::cout << i << std::endl;
}
```
```java Java 
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}
```
```c# C#
for (int i = 0; i < 10; i++){
    Console.WriteLine(i);
}
```
and of course, 

```js Javascript
for (i = 0; i < 10; i++){
    console.log(i);
}
```

We mostly see loops when it comes to traversing arrays and that's what we'll be practicing here today.

## What does .map() do?

The `.map()` function in Javascript is a built-in method of the Array object. What that means is that EVERY array in Javascript has this function built into it and you can call it on any Array instance. Essentially what it does is that it applies a function to every value in an array and returns the newly transformed array. In other words, it "maps" one array to another by applying a transformation. Might still be confusing so let's look at some real life use cases of this.

### How to use it?
`.map()` is a function from the Array class that gets called on top of instances of arrays like so:
```javascript Javascript example
const arr = [2, 3, 4];
arr.map();
// or even
[2, 3, 4].map();
```


### What are some applications?

The main idea here is to think of *transformations*. We are transforming one array to another by applying some sort of transformation function.
Here are some abstract applications:
- convert all items in a number array into their squares. (perform math)
- convert all items in a string array into lower case (performs string mutation)
- convert all items in a JSON object array into a string (converting data to string representation)

Mostly in front-end work, we spend most of our time *mapping* arrays of raw data into HTML components. some examples:
- converting an array of string links into actual HTML links ('https://ryqn.dev' -> <a href="https://ryqn.dev">https://ryqn.dev</a>)
- converting an array of JSON object data HTML components

The most common and important use case is this: converting an array of JSON object data HTML components. Let's look at a more detailed example and implementation below:

### Social Media example

Imagine you're a social media giant like Facebook/Meta or Twitter. When a user logs in, you want to show them a list of items/posts in their news feed. How do you do this? Well, when a user logs in, your website will send a request to your backend database saying, "Hey, user12345 just logged in. Give me the news feed posts to display to them." and your server will say, "OK. Here you go:"

```json
{
    "username": "user12345",
    "posts": [
        {
            "content": "Hey there, this is my first post!",
            "user": { 
                "name": "Ryan",
                "profileImage": "",
            },
        }
    ]
}
```

## Can't we do the same thing with a regular for loop?

Yes. The answer is yes but 95% of the time in front-end development, you will prefer array functions like `.map()` over writing a custom for loop. The reason why is that it's less verbose and that it's much easier to understand. When we start working with FE frameworks like React or Vue, you'll be able to inline these directly without an external function. Just a sneak peak (it's ok if this doesn't make sense to you yet):

```jsx NewsFeed.jsx
// React example. Imagine we have a component that takes in raw post data and renders
// the array of post data into NewsFeedItem components and passes in the post data
function NewsFeed(posts) {
    return (
        <div>
            <h1>Your News Feed</h1>
            {posts.map(post => <NewsFeedItem postData={post} />)}
        </div>
    );
}
```




