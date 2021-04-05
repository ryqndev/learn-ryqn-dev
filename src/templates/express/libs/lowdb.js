import chalk from 'chalk';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js';

const dbFileName = 'db.json';
const adapter = new FileSync(dbFileName);
const db = low(adapter);

function init(){
    console.log(chalk.yellowBright("Initializing database..."));

    db.defaults({
        users: {
        },
        recipes: [
            {
                id: 'thai-tea',
                uploaded: 1617287557485,
                prepTime: '15 minutes',
                name: 'Thai Tea',
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
                image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/200824-delish-thai-iced-tea-horizontalpour1-15407-eb-1598987409.jpg',
                steps: [
                    'Gather the ingredients.',
                    'Steep the tea, star anise, cardamom, cinnamon stick, vanilla bean, tamarind powder, and almond extract (if using) in the boiling water for 5 minutes.',
                    'Strain the tea.',
                    'Stir in the sugar and sweetened condensed milk until both are completely dissolved.',
                    'Fill 2 tall glasses with ice.',
                    'Pour the tea over the ice, leaving an inch or so of space at the top for the evaporated milk.', 
                    'Top up with more ice if needed, and then drizzle with 1 teaspoon of evaporated milk on each glass of tea.',
                ],
                description: 'When I was a child, my great-grandparent\'s dog took care of me when my parents were out working. I can recall a conversation I had with her when I was only 2 years old. She told me about her days when she was just a little pup on her sick days when her adoptive mother - an amber-coated Pitbull Thai Ridgeback mixed breed - would often make her Thai Tea to soothe her. 4 minutes ago, she tragically passed away. This recipe is all that reminds me of her, with the exception of her taxidermied body that rests on my living room couch.'
            },
            {
                id: 'jasmine-tea',
                uploaded: 1617287557484,
                prepTime: '20-25 minutes',
                name: 'Jasmine Milk Tea',
                ingredients: [
                    'Authentic loose leaf jasmine tea blend',
                    '1/4 cup choice of creamer or milk',
                    '1 Tablespoon of sweetener (honey, brown sugar, etc) ',
                ],
                image: 'https://cookingwithawallflower.com/wp-content/uploads/2020/05/Brown-Sugar-Jasmine-Oolong-Milk-Tea-2.jpg',
                steps: [
                    'Gather the ingredients.',
                    'Fill it up with 3-4 cups of water and bring it to a boil.',
                    'Once your water has reached a rumbling boil, bring the heat back down to medium-high and add your loose leaf jasmine tea leaves. Let your tea steep to your preferred amount, usually, we steep any of our teas between 3-7 minutes for the best jasmine milk tea recipe. ',
                    'Strain the tea.',
                    'With your 3/4 cup of tea in your favorite cup, add your sweetener first (we’re adding 1 tablespoon of honey) into your cup. Next, simply grab your preferred creamer, in this case, we’re using whole milk (for more creaminess than 2% milk), and pour it slowly into your jasmine tea base.',
                ],
                description: 'When I was a child, my great-grandparent\'s dog took care of me when my parents were out working. I can recall a conversation I had with her when I was only 2 years old. She told me about her days when she was just a little pup on her sick days when her adoptive mother - an amber-coated Pitbull Thai Ridgeback mixed breed - would often make her Thai Tea to soothe her. 4 minutes ago, she tragically passed away. This recipe is all that reminds me of her, with the exception of her taxidermied body that rests on my living room couch.'
            },
        ]
    }).write();

    console.log(chalk.green("Database successfully initialized in [", dbFileName, "]"));
}


export default db;
export {
    init,
}
