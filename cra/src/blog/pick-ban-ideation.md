# Pick Ban Ideation

## Getting the idea

This past weekend, my friends played in a fun small League of Legends tournament and as they were talking about the draftm, it reminded me of when I was doing mock drafts with the UCR head coach. I had the idea to make a pick and ban app that was just ... better. The official riot prodraft app is pretty solid and does it's job perfectly well but I could recall some frustration with the site and to me, the site seemed pretty bare bones.

## Current state of prodraft

The official site that riot uses is called prodraft and after seeing all the other riot sites, it was pretty surprising to see that this was the offical tool that riot developed. The app does it's job but it's visually pretty bare and lacks features which I'll get to later. Prodraft is allowed as a tool in tournaments in case players don't own all the champs and because of it's official endorsement by Riot Games, no other drafting app will be used in place of it. Knowing that our application isn't going to be able compete with prodraft as an official tournament draft simulator, our drafting app will be more focused on helping users get better at drafting.

## Issues with prodraft

Having played 10-player custom games and mock drafts, our friend group was pretty familiar with prodraft and it's issues. The biggest one is the timer. In an official tournament, the timer is extremely important because it ensures that both sides have the same amount of time to make draft decisions but also rewards the team that is more prepared. However, if you're playing friendly custom games or simulating drafts, the timer is a nuisance. In a majority of friendly drafts, one side has run out of time and prodrafts picked a random champ and we then have to send a message to the other team: "Aurelion Sol is Sett". Similarly, when discussing drafts, you have to finish the draft due to the timer and then talk about it afterwards. 

Talking to Tony, the UCR head coach, he outlined a couple issues that could be better some of which end up making the timer an issue. The first is the search functionality. "Kai'sa" has an apostrophe but the search function `requires` the apostrophe to be able to search for it. Also, unlike the actual league client, there is no way to search for a category of champions: "marksman, fighter, etc." and no way to sort by lane.

There are a couple other issues that are pretty self explanatory so I'll keep it concise in the section below.

## Main issues

The main features that we want here:

* Drafting simulator tool
* Ability to connect using just a link
* Ability to do another draft without requiring a new link
* Better searching and sorting
* Better aesthetics
* Ability to select game versions - patch 11.9 vs 11.6
* Chat functionality??

Later on, if we continue development

* Player lookup on the draft screen
* Aggregate Pro stats
    * A little ambitious but the ability to display champion stats and winrates sourced from pro play


## Tech decisions

Using a web tech stack seems to be the obvious choice for this. Developing a native app and requiring a download to use the drafting tool makes no sense since the application is not CPU intensive and requires the ability to connect with an opponent using just a link. Considering the web frameworks available at our disposal (React, Svelte, Vue), I'm going to opt for React because of how complex the app may become. 

Because I don't want to host a server, I'm currently looking towards using p2p with WebRTC. This will severely limit functionality but will be free. Since we can't store games on the server, I'm planning on saving the draft state within the url. The issue here is that the original link will be different from the saved draft so we're going to have to inform users of the new link to be saved. The biggest limitation will be how many peer connections anyone can have. I believe the upper limit for peer connections on chrome is ~500 which is fine since drafting will be done between 2 people and have up to ~15 spectators for friendly games but if a streamer with a significant number of users sends a spectator link or has the link visible, the application will boom.

