# API Calls

*Note: This was originally content that was made as a reference sheet for a workshop which includes a live demo. If I can find the live demo, I'll go ahead and attach it here but for now, this is just some random content I added here since I thought the content might be interesting to someone. Hopefully, I'll get around to rewriting this section so it's a complete read*

## Table of Contents

* [Intro](#intro)
* [API - Application Programming Interface](#api-/-application-programming-interface)
* [How can we use API's?](#how-can-we-use-api's?)
* [Demo](#demo)
    * [No auth](#no-auth)
    * [Bearer Token Auth](#bearer-token-auth)
    * [OAuth 2.0](#oauth-2.0)
* [Some free API's to look at](#some-free-api's-to-look-at)
* [Why do companies offer API's?](#why-do-companies-offer-api's?)


## Intro

First, we should first learn about what an API is. API is a general term but at hackathons, we will mostly be dealing with 
Web API's.

## API / Application Programming Interface

The definition for API in general is simply a way for two pieces of software to communicate with one another (keyword: interface). Web API's are a subset of API's that in which the two pieces of software use HTTP requests to communicate. This definition is still pretty confusing so let's take a look at an example.

Spotify is a digital streaming service that streams music. Because of this business model, they need to have a database of pretty much every single song in the world. Spotify also offers a Web API that allows developers to *communicate* with their service through http requests. For example, if you want to have a feature in which a user can search for songs, you can use the spotify Web API Browse endpoint.

## How can we use API's?

Well, imagine we're writing a music based app - let's say an app in which users swipe left and right (like Tinder) on random songs and all the songs that they swipe right on will get saved into their own playlist. To implement this, we will "call" Spotify's Web API to to pull random songs and after the user is done swiping, we need to then call the Spotify Web API again to create a playlist, add all the swiped songs, and finally return the playlist link. Everytime we "call" the Spotify Web API, we are making an HTTP request to a specific "endpoint".

## Demo:

#### No auth
[disease.sh](https://disease.sh/v3/covid-19/all)

#### Bearer Token Auth
[Yelp API business search endpoint](https://www.yelp.com/developers/documentation/v3/business_search)
[Get Started Instructions](https://www.yelp.com/developers/documentation/v3/get_started)
Needs to be called from a server

#### OAuth 2.0
Login with ----


## Some free API's to look at

[Spotify](https://developer.spotify.com/documentation/)
• Get song, artist, album information

• Manage user playlists (create, add, delete)

• Find full list of features [here](https://developer.spotify.com/documentation/web-api/reference-beta/)

• _note_: need to register and have to authorize users first (implement Login with Spotify button in app)

[Yelp](https://www.yelp.com/developers/documentation/v3)
• Get restaurant and business information

    • Get information, reviews, ratings

• _note_: need to register and get api key

[disease.sh](https://disease.sh/docs/)
• disease statistics (mainly covid related)

[Stock Data](https://www.alphavantage.co/documentation/)
• gets latest stock data

• gets prices, lows, highs and all time data for most stock exchanges

• _note_: needs api key but extremely simple process


## Why do companies offer API's?

First off, not all API's are free. Most API services charge developers based on the number of calls made but have a free tier (you can usually stay in free tier for the duration of a hackathon). For example, the Google Maps API offers an endpoint that will return the speed limit given a road segment that is priced at $20 USD per 1000 calls ($0.02 per call). Sometimes, it's not based off of profit. Riot Games (creators of a popular game called League of Legends) offer an API that allow you to search player ranks, match histories, etc. free of charge (with a limit) so people can develop third party software for them. Notice that player lookups are all 3rd party (op.gg, blitz, mobalytics, etc.)

API's that require payment will usually have a free tier that allow you to use the API for free as long as you stay under a certain number of calls because they want you to try out their service first so if you decide to continue working on an app and gets popular, they will eventually make a profit. 