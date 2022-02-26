# Pick Ban Day 2

## What was completed

Yesterday was pretty much really basic ideation and setting up the boilerplate. I created a landing page with a basic start button that directly leads to the draft but the plan is to link the start button into a room creation page that allows you to set some customized options if you so choose (which will also be accessible through the entire drafting phase - something I think will be really cool). I'll go into the boilerplate in a little more detail here:

## boilerplate

The boilerplate is bootstrapped with create-react-app and I removed the testing and web vitals pages since I don't plan on using them yet. I created an app folder and inside that, I created 4 main folders: assets, components, pages, and styles. The styles page is for the general css styles that will be used in every single component. I half-kinda-maybe-sorta follow the 7-1 sass architecture but really only need a couple folders for now. When the application gets bigger and I start using other libraries, I'll go ahead an populate those but I don't want to have some bloated css at the start of the project. The component and pages folders all hold the same thing: React functional components. The difference is that the pages are components that are directly called by `<Route>` component from react-router-dom and are exactly that: pages. Components are React components that are meant to be reused and split between different pages and other components. ALL components are designed to be reusable (simply because that's the way I like to write code) and the components that are used only by a certain page or component can go into the corresponding parent folder. 

For example, the Draft component will have 10 champion pick components but because I don't plan to have these champion pick components anywhere else I'll put them into the Draft folder rather than the general components folder. Every component folder will also have an index.js files whose sole purpose it to import the component(s) from that folder and export them. In folders with just 1 .jsx file and .scss file, it will seem fairly useless but in a folder with multiple components, it will make sense. Having the index.js file regardless seems extra but it makes import lines simpler (`'/pages/Draft/ChampionPick'` instead of `'/pages/Draft/ChampionPick/ChampionPick.jsx'`)

## 

