import './Recipe.css';

const fakeRecipe = {
    ingredients: [
        '2 tablespoons loose-leaf black tea',
        '1 pod star anise',
        '2 pods cardamom',
        '1/2 cinnamon stick, optional',
        '1/8 vanilla bean, optional',
        'Tamarind powder, to taste, optional',
        '1/4 teaspoon almond extract, optional',
        '1 cup boiling water',
        '1 tablespoon sugar',
        '1 tablespoon sweetened condensed milk',
        '2 teaspoons evaporated milk, or coconut milk, or whole milk',
    ],
    steps: [
        'Gather the ingredients.',
        'Steep the tea, star anise, cardamom, cinnamon stick, vanilla bean, tamarind powder, and almond extract (if using) in the boiling water for 5 minutes.',
        'Strain the tea.',
        'Stir in the sugar and sweetened condensed milk until both are completely dissolved.',
        'Fill 2 tall glasses with ice.',
        'Pour the tea over the ice, leaving an inch or so of space at the top for the evaporated milk.', 
        'Top up with more ice if needed, and then drizzle with 1 teaspoon of evaporated milk on each glass of tea.',
    ],
    inevitableLifeStoryIntroduction: 'When I was a child, my great-grandparent\'s dog took care of me when my parents were out working. I can recall a conversation I had with her when I was only 2 years old. She told me about her days when she was just a little pup on her sick days when her adoptive mother - an amber-coated Pitbull Thai Ridgeback mixed breed - would often make her Thai Tea to soothe her. 4 minutes ago, she tragically passed away. This recipe is all that reminds me of her, with the exception of her taxidermied body that rests on my living room couch.'
}

const Recipe = ({ingredients, steps, inevitableLifeStoryIntroduction}=fakeRecipe) => {
    return (
        <div>
            <article>
                <p>{inevitableLifeStoryIntroduction}</p>
            </article>
        </div>
    )
}

export default Recipe;
