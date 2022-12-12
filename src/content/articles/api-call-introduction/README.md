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

Spotify is a digital streaming service that streams music. Because of this business model, they need to have a database of pretty much every single song in the world. Spotify also offers a Web API that allows developers to *communicate* with their service through http requests. For example, if you want to have a feature in which a user can search for songs, you can use the Spotify Web API Browse endpoint.

## How can we use API's?

API's can be used to access data from different sources and services, and to automate processes. For example, you can use an API to access financial data from the stock market, or to access weather data. You can also use an API to integrate services like payment processing, SMS messaging, and email into your applications. You can also use an API to access remote databases, to create interactive charts, or to create custom reports. Finally, you can use an API to automate tasks like data processing, data mining, and machine learning.

A good example  is the Google Maps API which allows developers to embed Google Maps into their web applications and to access the map data. This allows developers to create custom applications that can display maps, such as a real-estate application that can display properties on a map or a travel application that can show routes and distances between two points.

Another good example is the Twitter API, which allows developers to search for tweets and to access user profile information. This allows developers to create applications that can display and analyze trends, or to create applications that can monitor user conversations and display them in real-time.

Notice the difference between these two example API's. The Google Maps API provides an entire built-in component (the map component) that you can jam into your application whereas Twitter API, on the other hand, provides raw data from the Twitter database like tweets, users, etc. that you can then use however you'd like: be it writing a data science application that analyzes frequencies of tweets or even your own custom wrapper to Twitter.

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


[Open Weather Map](https://openweathermap.org/api)
• Get current and historical weather data

• Get 5 day forecast

• Get hourly forecast

[CoinDesk](https://www.coindesk.com/api)
• Get bitcoin price index

• Get historical bitcoin prices

• Get current and historical prices for other cryptocurrencies

[Twilio](https://www.twilio.com/docs/usage/api)
• Send and receive SMS

• Send and receive voice calls

• Send and receive MMS messages

[Giphy](https://developers.giphy.com/)
• Search and share GIFs

• Get trending GIFs

• Generate custom GIFs

[OpenCage](https://opencagedata.com/api)
• Geocode locations

• Reverse geocode coordinates

• Get timezone information for locations

[Google Maps](https://developers.google.com/maps/documentation/)
• Get directions

• Get maps

• Find places

• Find addresses

• Get real-time traffic information

[NASA](https://api.nasa.gov/)
• Get astronomy pictures of the day

• Get Mars rover data

• Get satellite data

• Get Earth imagery

[Foursquare](https://developer.foursquare.com/)
• Search for places

• Get tips, reviews and ratings

• Get venue photos

• Find nearby venues

[IBM Watson](https://www.ibm.com/cloud/watson-services)
• Natural language processing

• Visual recognition

• Text to speech

• Speech to text

[YouTube](https://developers.google.com/youtube/v3/)
• Search for videos

• Get video information

• Get video statistics

• Get comments and ratings for videos

[Facebook](https://developers.facebook.com/docs)
• Get user profile information

• Get posts and comments

• Get events information

• Get pages information

[Instagram](https://www.instagram.com/developer/)
• Get user profile information

• Get posts and comments

• Get location information

• Get hashtag search results

[Reddit](https://www.reddit.com/dev/api/)
• Get subreddit information

• Get user profile information

• Get posts and comments

• Get user karma and activity

[GitHub](https://developer.github.com/v3/)
• Get user profile information

• Get repository information

• Get commit information

• Get issue information

[Flickr](https://www.flickr.com/services/api/)
• Get user profile information

• Get photos and videos

• Get photo album information

• Get group information

[Stripe](https://stripe.com/docs/api)
• Process payments

• Get customer information

• Get payment information

• Refund payments

[SendGrid](https://sendgrid.com/docs/API_Reference/api_v3.html)
• Send emails

• Get email statistics

• Create and manage contacts

• Create and manage templates

[Twitch](https://dev.twitch.tv/docs/api/)
• Get user profile information

• Get videos and streams

• Get game information

• Get chat information

[Soundcloud](https://developers.soundcloud.com/)
• Get user profile information

• Get streamable audio tracks

• Get playlist information

• Get comments and likes

[Last.fm](https://www.last.fm/api/)
• Get user profile information

• Get artist information

• Get album information

• Get track information

[Dropbox](https://www.dropbox.com/developers/documentation/http/overview)
• Get user profile information

• Get folder information

• List, download and upload files

• Create and manage shared links

[Digital Ocean](https://developers.digitalocean.com/documentation/v2/)
• Create and manage droplets

• Get account information

• Get image information

• Get key information

[NASA Earth](https://api.nasa.gov/api.html#Earth)
• Get Earth imagery

• Get natural events

• Get land cover

• Get vegetation index

[IBM Watson Translate](https://cloud.ibm.com/apidocs/language-translator)
• Translate text

• Get language detection

• Get language models

• Get translation models

[Google Translate](https://cloud.google.com/translate/docs/reference/libraries)
• Translate text

• Get language detection

• Get language models

• Get translation models

[Wunderground](https://www.wunderground.com/weather/api/)
• Get current weather conditions

• Get hourly and 10 day forecast

• Get historical weather data

• Get severe weather alerts

[Wolfram Alpha](https://products.wolframalpha.com/api/)
• Get computation results

• Get visualizations

• Get units and currency conversions

• Get natural language processing

• _note_: needs api key but extremely simple process


## Why do companies offer API's?

First off, not all API's are free. Most API services charge developers based on the number of calls made but have a free tier (you can usually stay in free tier for the duration of a hackathon). For example, the Google Maps API offers an endpoint that will return the speed limit given a road segment that is priced at $20 USD per 1000 calls ($0.02 per call). Sometimes, it's not based off of profit. Riot Games (creators of a popular game called League of Legends) offer an API that allow you to search player ranks, match histories, etc. free of charge (with a limit) so people can develop third party software for them. Notice that player lookups are all 3rd party (op.gg, blitz, mobalytics, etc.)

API's that require payment will usually have a free tier that allow you to use the API for free as long as you stay under a certain number of calls because they want you to try out their service first so if you decide to continue working on an app and gets popular, they will eventually make a profit. 

In general, companies offer API's to increase the exposure of their services, and to give developers an easier way to access their data. They also offer API's to encourage developers to build useful applications that use their services. This allows companies to expand their reach into new markets, and to get more customers. 
