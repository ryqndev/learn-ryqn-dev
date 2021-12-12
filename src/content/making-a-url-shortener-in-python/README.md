# Making a URL shortener in Python

## Table of Contents

* [Intro](#intro)
* [Background info](#background-info)
    1. [About this app](#about-this-app)
    2. [Picking our tools](#picking-our-tools)
* [Installation and Setup](#installation-and-setup)
* [Ready to start coding](#ready-to-start-coding)
* [Writing the business logic](#writing-the-business-logic)
    1. [Generating a short alias](#generating-a-short-alias)
    2. [Get link from alias](#get-link-from-alias)

## Intro
This tutorial assumes basic knowledge of Python3 (variables, functions, if-statements, dictionaries, import python modules).

The main point of this article is to teach the basics of writing a backend server and how to test with it. It just happens so that a URL shortener service has very little frontend work (allowing us to focus on the backend), explores many different topics in backend development (like http codes, etc.), and allows us to add extra features (that you can try to implement on your own later).

You may have heard of services like [bit.ly](https://bit.ly) called URL shorteners whose job is to take a (usually) long link, and generate a shorter alias for it. 

## Background info
If you want to dive straight into code, you can go straight to [Installation and Setup](#installation-and-setup). Otherwise, I'll talk a little about the tools we're going to use.

### About this app
Before we start writing code, we should know exactly what we're trying to make here. Okay, so we want to make a URL shortener. The basic idea is this: a user will go on our site and give us a link that they want shortened. We will then generate a short, random, unique link to them. Then, whenever someone goes on our shortened link, we will redirect them to the longer link. Simple as that!

### Picking our tools
Now that we know the main goal of our app, we need to pick the best tools that will help us achieve that goal. To be able to redirect people, we're going to need to set up a a web server. A `web server` is, in essence, a computer that sits on the internet - constantly listening for requests, and then then executes the request. In this case, we need a `web server` that will sit on the internet and listen for users who access our short link, and then redirect them to the longer link. There are two main tools for setting up web servers in Python: [Flask](https://flask.palletsprojects.com/en/2.0.x/) and [Django](https://www.djangoproject.com/). 

*We will be using Flask due to its simplicity but you may want to look at a more in-depth breakdown between the two tools when you're doing professional development.*

If you think a little bigger, you're going to realize that you're going to have to store all of these short links and their corresponding longer links in a `database` of some sort when you have thousands of links - but we want to keep things simple for now (as an introduction to backend development) so we're going to assume that we have a small userbase and store all of our link mappings as a python dictionary variable in our program.

## Installation and Setup
We need to first install Python3 and  Flask, and setup our boilerplate code. Go ahead and hop [here](https://learn.ryqn.dev/starting-out-with-flask#write-a-flask-program-in-5-lines-of-code) first and follow these instructions until the `Where do we go from here?` section.

## Ready to start coding
After following the steps from the link above, you should end up with this basic structure:
```file
└── url-shortener
            └── app.py
```

```python app.py
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
	return "Hello World!"

```

and when you run the command `flask run` in the terminal, you get this:
```shell terminal
~$ flask run

* Environment: production
WARNING: This is a development server. Do not use it in a production deployment.
Use a production WSGI server instead.
* Debug mode: off
* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

and when you open up [http://127.0.0.1:5000/](http://127.0.0.1:5000/) in the browser (any browser of your choice), you should see something like this:

![result of opening up localhost:5000 in the browser](./assets/setup-result.png)

If you've made it this far, then that means you've set up Python and Flask correctly! The code that we just ran is pretty much the most barebones Flask application you can have. 

Notice that we only wrote 5 lines of code but when we ran it, our code spun up an entire webserver that immediately started listening for requests on the "internet" and responded to a request when we accessed [http://127.0.0.1:5000/](http://127.0.0.1:5000/) in the browser. If you knew what you were doing, this setup takes less than a minute. This is why we (and companies like Lyft and Netflix) reach for a library like Flask when we need to run a webserver.

> One thing to note, companies like Lyft and Netflix likely *aren't* using Flask as a webserver for their main product, but rather for their internal tools. This is because Flask is valued for its simplicity and ability to prototype quickly. This makes Flask the tool of choice for educational tutorials (like this one), hackathons, and internal tooling. If you wanted a powerful and robust webserver expected to serve thousands of different webpages and millions of requests, you may want to reach for Django instead - but you should look at a more in-depth comparison between the tools first.

## Writing the business logic

We're going to set the web server code aside for a quick second and work on the `business logic`. If you're not familiar with that term, business logic simply means the core set of code that solves the main problem our app tackles. 

Going back to the design document, our app is a URL shortener, but all of the setup we did with Flask actually has nothing to do with shortening URLs. In other words, despite being a vital part of our app (by being a medium for users to access our product and redirects short links), out Flask code doesn't actually do any link shortening. This is why our Flask code we wrote just now isn't considered "business logic" and should be separate from it. 

We *could* write all of our code in one file - it would be okay since our codebase is going to be fairly small - but we should try to follow some good programming practices and splitting different pieces of logic into different files is vital to any codebase.

With that in mind, let's go ahead and create a new file in the same folder called `business_logic.py` and here we'll first list out all of the functions we expect to have.

```file
└── url-shortener
            ├── app.py
            └── business_logic.py

```

```python business_logic.py
# We need a python dictionary variable that will store our mapping of 
# short_urls to long_urls
link_mappings = {
    # Here's an example of a mapping
    # 'https://short.com/d63hs': http://learn.ryqn.dev/making-a-url-shortener-in-python#writing-the-business-logic
}

def create_short_link(long_link):
    """Should receive a link in the form of a string (ex. 
    https://short.com/...) and return a short alias that will redirect to 
    the original long_link parameter.
    """
    pass

def get_long_link(short_link_id):
    """Look at dictionary of link_mappings and return the corresponding 
    long_link.
    """
    pass

```

### Generating a short alias

Generating a short alias has 3 main parts to it: first, we need to generate an unused random string, save the mapping of the newly generated alias to the long_link, and then finally return the full aliased url. It would look something like this:

```python business_logic.py
import random

link_mappings = {}

def create_short_link(server_url, long_link):
    """Generates and returns an alias for the given link

    Parameters:
        server_url [string]: Base URL of the server
            Ex.: https://short.com/ (if example aliased link was https://short.com/d63hs)

        long_link [string]: Original link that the alias should redirect to.
            Ex.: http://learn.ryqn.dev/making-a-url-shortener-in-python#writing-the-business-logic

    Returns:
        [string]: full aliased url.
            Ex.: https://short.com/d63hs
    """
    LENGTH_OF_ALIAS_ID = 6
    generated_random_id = generate_random_string(LENGTH_OF_ALIAS_ID);

    link_mappings[generated_random_id] = long_link

    return server_url + generated_random_id

def generate_random_string(length_of_string):
    """Generates a valid random Base62 string of given length

    Parameters:
        length_of_string [int]: length of generated Base62 string
            Ex.: 6

    Returns:
        [string]: random Base62 string
            Ex.: d63hs
    """
    ALPHANUMERIC_CHARACTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

    while True: # loops until it generates unused id. Not expected to iterate in majority cases.

        # Generates list of characters randomly picked from ALPHANUMERIC_CHARACTERS string
        # and then joins them together into a string.
        valid_random_alphanumeric = ''.join(random.choice(
            ALPHANUMERIC_CHARACTERS) for _ in range(length_of_string))

        # Checks validity of generated id. Breaks from loop if valid, otherwise generate again
        if valid_random_alphanumeric not in link_mappings:
            return valid_random_alphanumeric

# ...
```

Notice that in our `link_mappings`, we are storing the generated_id, rather than the entire url. This is because we know that every short url will be prepended with our server url - in this example it's https://short.com/. 

By not storing the whole link, not only do we save space in memory, we also solve another problem which is comparing URLS. https://short.com/d63hs, https://short.com/d63hs/, and http://short.com/d63hs are all "technically" the same URL but have different string values. However, we do know that they all have the same route: [d63hs] which is much easier to compare.


### Design decisions
I'm going to talk about the design decisions behind why I went for certain solutions / coding patterns so feel free to skip to the [next section](#get-link-from-alias) if you're only interested in the code.

#### Choosing a length of random string
First thing you might ask is how did I pick the magic number 6 seemingly out of nowhere for the length of the generated string? We need to keep in mind the point of our service: to keep urls short. This means that the random alias id we append to the end of our short url should be as short as possible. However, the shorter our generated id is, the less combinations possible, resulting in higher collisions and an upper limit to aliases we can make.

The way to find our magic number requires a little bit of math and good understanding of our random number algorithm. URL's are case sensitive - meaning that an uppercase 'A' is different from a lower case 'a'. This allows our alphanumeric string to have 62 different characters: [A-Z] + [a-z] + [0-9] (also known as Base62). Since every character has 62 options, we can calculate the total number of combinations like so:

Total Combinations = 62^(Length of string)

If our alias was only two characters long, our users would be very happy because they would only need to type out https://short.com/j5, but we would only support 4096 aliases. If our alias was 20 characters long, our users would have to type https://short.com/f7sj4fvm3js9fjlzpqru, but we could support 1.329228 * 10^36 different aliases. So, we want to have the shortest alias possible - making it easy for users to type - while supporting enough aliases for our service to be useful.

How do I pick a good number of aliases to support? Look at your use case. If you work for Youtube, for example, and you're generating unique ids for youtube links, you would probably want to look at the current number of Youtube videos and the rate at which Youtube videos get posted. Then you can plan for, say, 10 years of service and derive a safe number from that.

In our case, 6 characters gives us 68,719,476,736 different combinations - a safe number I think for our application while being short enough for users.

#### Random number generator infinite loop

How about our random string generator function? There exists a case where our random number generator gets unlucky or we have too many urls generated already where the loop iterates multiple times before finding a valid id. You may want to catch this case by returning an error after looping too many times, or maybe even replace the last accessed alias, etc. I chose not to address this edge case because of how complex a good solution may be and might detract from the main message here. I do think it would be good practice to implement your own system to check this error, though.

If your service doesn't guarantee permanence, you can attach a timestamp value to the link_mappings that keeps track of the last time the alias was used, and after 5 loops - query the oldest timestamp value and replace that id. Just an idea and it's up to you to debate the pros and cons of this solution.
### Get link from alias

Getting the link is actually pretty simple, thankfully. Since we have a dictionary mapping of short alias id's to their original links, we just need to get the corresponding value of a key, like so:

```python Access dictionary value in Python with key
long_link = link_mappings.get(short_link)

# You may be more familiar with this way:
long_link = link_mappings[short_link]
# but this second way throws a KeyError when the key doesn't exist, 
# whereas .get() will return None. It's better to check for None, 
# rather than catch the error because we expect this to happen 
# frequently

```

Our `get_long_link` function should end up looking like this:

```python business_logic.py
# ...

def get_long_link(short_link_id):
    """Finds and returns original link from alias

    Parameters:
        short_link_id [string]: random string of characters denoting alias. 
            Ex.: d63hs (if aliased link was https://short.com/d63hs)

    Returns:
        [string|None]: full original link as string or NoneType if link wasn't found. 
            Ex.: http://learn.ryqn.dev/making-a-url-shortener-in-python#writing-the-business-logic
    """
    return link_mappings.get(short_link_id)

```


