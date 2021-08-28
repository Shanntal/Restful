const faker = require('faker')
const User = require('./models/User');
const Entry = require('./models/Entry');
const Resource = require('./models/Resource');

const userData = [
  {
    username: 'Shanntal Morel',
    password: '123'
  }
]

//23 * 3 = 69: "love", "stress & aniexty", "family", "mourning", "friendship", "art", "life", "pets", "history", "traveling", "independence", "mental health", "relationships", "affirmation", "body positivity", "self-love", "personal growth", "Gratitude", "happiness", "career", "success", "wealth", "health"
const resourceData = [
  {
    //title: 
    type: 'quote',
    category: "love",
    //imageUrl:
    content: 'Tis better to have loved and lost than never to have loved at all.',
    author: 'Alfred Lord Tennyson'
  },
  {
    //title: 
    type: 'quote',
    category: 'stress & anxiety',
    //imageUrl:
    content: 'The greatest weapon against stress is our ability to choose one thought over another.',
    author: 'William James'
  },
  {
    //title: 
    type: 'quote',
    category: "family",
    //imageUrl:
    content: 'My family is my strength and my weakness.',
    author: 'Aishwarya Rai Bachchan'
  },{
    //title: 
    type: 'quote',
    category: "mourning",
    //imageUrl:
    content: 'Irrespective of age, we mourn for those loved and lost. Mourning is one of the deepest expressions of pure love.',
    author: 'Russell M. Nelson'
  },
  {
    //title: 
    type: 'quote',
    category: "friendship",
    //imageUrl:
    content: 'A real friend is one who walks in when the rest of the world walks out.',
    author: 'Walter Winchell'
  },
  {
    //title: 
    type: 'quote',
    category: "art", 
    //imageUrl:
    content: "I found I could say things with color and shapes that I couldn't say any other way - things I had no words for.",
    author: "Georgia O'Keeffe"
  },
  {
    //title: 
    type: 'quote',
    category: "life",
    //imageUrl:
    content: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    author: 'Marie Curie'
  },
  {
    //title: 
    type: 'quote',
    category: "pets",
    //imageUrl:
    content: "Pets are humanizing. They remind us we have an obligation and responsibility to preserve and nurture and care for all life.",
    author: 'James Cromwell'
  },
  {
    //title: 
    type: 'quote',
    category: "history", 
    //imageUrl:
    content: "Those who do not remember the past are condemned to repeat it.",
    author: 'George Santayana'
  },
  {
    //title: 
    type: 'quote',
    category: "traveling",
    //imageUrl:
    content: "Traveling, you realize that differences are lost: each city takes to resembling all cities, places exchange their form, order, distances, a shapeless dust cloud invades the continents.",
    author: 'Italo Calvino'
  },
  {
    //title: 
    type: 'quote',
    category: "independence", 
    //imageUrl:
    content: 'Independence is happiness.',
    author: 'Susan B. Anthony'
  },{
    //title: 
    type: 'quote',
    category: "mental health",
    //imageUrl:
    content: 'Self-esteem is as important to our well-being as legs are to a table.',
    author: 'Louise Hart'
  },
  {
    //title: 
    type: 'quote',
    category: "relationships",
    //imageUrl:
    content: 'Assumptions are the termites of relationships.',
    author: 'Henry Winkler'
  },
  {
    //title: 
    type: 'quote',
    category: "affirmation",
    //imageUrl:
    content: "I'm better than I used to be. Better than I was yesterday. But hopefully not as good as I'll be tomorrow.",
    author: "Marianne Williamson"
  },
  {
    //title: 
    type: 'quote',
    category: "body positivity", 
    //imageUrl:
    content: "You have been criticizing yourself for years and it hasn't worked. Try approving of yourseld and see what happens,",
    author: 'Louise Hay'
  },
  {
    //title: 
    type: 'quote',
    category: "self-love",
    //imageUrl:
    content: "Choose to focus your time, energy and conversation around people who inspire you, support you and help you to grow you into your happiest, strongest, wisest self.",
    author: 'Karen Salmansohn'
  },
  {
    //title: 
    type: 'quote',
    category: "personal growth",
    //imageUrl:
    content: "There is only one corner of the universe you can be certain of improving, and that's your own self.",
    author: 'Aldous Huxley'
  },
  {
    //title: 
    type: 'quote',
    category: "gratitude",
    //imageUrl:
    content: "Gratitude unlocks the fullness of life. It turns what we have into enough, and more. It turns denial into acceptance, chaos to order, confusion to clarity. It can turn a meal into a feast, a house into a home, a stranger into a friend.",
    author: 'Melody Beattie'
  },
  {
    //title: 
    type: 'quote',
    category: "happiness",
    //imageUrl:
    content: "The happiness of your life depends upon the quality of your thoughts: therefore, guard accordingly, and take care that you entertain no notions unsuitable to virtue and reasonable nature.",
    author: 'Marcus Aurelius'
  },
  {
    //title: 
    type: 'quote',
    category:  "career",
    //imageUrl:
    content: "It's not what you achieve, it's what you overcome. That's what defines your career.",
    author: 'Carlton Fisk'
  },
  {
    //title: 
    type: 'quote',
    category:  "success",
    //imageUrl:
    content: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
    author: 'Michael Jordan'
  },
  {
    //title: 
    type: 'quote',
    category: "wealth",
    //imageUrl:
    content: "Wealth flows from energy and ideas.",
    author: 'William Feather'
  },
  {
    //title: 
    type: 'quote',
    category: "health",
    //imageUrl:
    content: "Good health is not something we can buy. However, it can be an extremely valuable savings account.",
    author: 'Anne Wilson Schaef'
  },



 //POEMS:
  {
    title: 'To My Dear and Loving Husband',
    type: 'poem',
    category: "love",
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet'
  },
  {
    //title: 
    title: 'To My Dear and Loving Husband',
    category: 'stress & anxiety',
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet' 
  },
  {
    //title: 
    title: 'To My Dear and Loving Husband',
    category: "family",
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet' 
  },{
    title: 'To My Dear and Loving Husband',
    type: 'poem',
    category: "mourning",
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet' 
  },
  {
    title: 'To My Dear and Loving Husband',
    type: 'poem',
    category: "friendship",
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet' 
  },
  {
    title: 'To My Dear and Loving Husband', 
    type: 'poem',
    category: "art", 
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet' 
  },
  {
    title: 'To My Dear and Loving Husband',
    type: 'poem',
    category: "life",
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet' 
  },
  {
    title: 'To My Dear and Loving Husband',
    type: 'poem',
    category: "pets",
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet' 
  },
  {
    title: 'To My Dear and Loving Husband',
    type: 'poem',
    category: "history", 
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet' 
  },
  {
    title: 'To My Dear and Loving Husband',
    type: 'poem',
    category: "traveling",
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet' 
  },
  {
    title: 'To My Dear and Loving Husband',
    type: 'poem',
    category: "independence", 
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet' 
  },{
    title: 'To My Dear and Loving Husband',
    type: 'poem',
    category: "mental health",
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet' 
  },
  {
    title: 'To My Dear and Loving Husband',
    type: 'poem',
    category: "relationships",
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet' 
  },
  {
    title: 'To My Dear and Loving Husband', 
    type: 'poem',
    category: "affirmation",
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet' 
  },
  {
    title: 'To My Dear and Loving Husband',
    type: 'poem',
    category: "body positivity", 
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet'
  },
  {
    title: 'To My Dear and Loving Husband', 
    type: 'poem',
    category: "self-love",
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet'
  },
  {
    title: 'To My Dear and Loving Husband',
    type: 'poem',
    category: "personal growth",
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet' 
  },
  {
    title: 'To My Dear and Loving Husband',
    type: 'poem',
    category: "gratitude",
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet'
  },
  {
    title: 'To My Dear and Loving Husband', 
    type: 'poem',
    category: "happiness",
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet'
  },
  {
    title: 'To My Dear and Loving Husband',
    type: 'poem',
    category:  "career",
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet'
  },
  {
    title: 'To My Dear and Loving Husband', 
    type: 'poem',
    category:  "success",
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet'
  },
  {
    title: 'To My Dear and Loving Husband',
    type: 'poem',
    category: "wealth",
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet'
  },
  {
    title: 'To My Dear and Loving Husband',
    type: 'poem',
    category: "health",
    //imageUrl:
    content: "If ever two were one, then surely we. If ever man were loved by wife, then thee. If ever wife was happy in a man, Compare with me, ye women, if you can. I prize thy love more than whole mines of gold, Or all the riches that the East doth hold. My love is such that rivers cannot quench, Nor ought but love from thee give recompense. Thy love is such I can no way repay; The heavens reward thee manifold, I pray. Then while we live, in love let’s so persever, That when we live no more, we may live ever.",
    author: 'Anne Bradstreet'
  },



  //BOOKS:
  {
    title: 'Local Girls',
    type: 'book',
    category: "love",
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman'
  },
  {
    title: 'Local Girls', 
    type: 'book',
    category: 'stress & anxiety',
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman' 
  },
  {
    title: 'Local Girls',
    type: 'book',
    category: "family",
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman' 
  },{
    title: 'Local Girls', 
    type: 'book',
    category: "mourning",
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman' 
  },
  {
    title: 'Local Girls',
    type: 'book',
    category: "friendship",
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman' 
  },
  {
    title: 'Local Girls',
    type: 'book',
    category: "art", 
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman' 
  },
  {
    title: 'Local Girls', 
    type: 'book',
    category: "life",
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman'
  },
  {
    title: 'Local Girls',
    type: 'book',
    category: "pets",
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman'
  },
  {
    title: 'Local Girls',
    type: 'book',
    category: "history", 
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman'
  },
  {
    title: 'Local Girls',
    type: 'book',
    category: "traveling",
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman'
  },
  {
    title: 'Local Girls',
    type: 'book',
    category: "independence", 
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman'
  },{
    title: 'Local Girls',
    type: 'book',
    category: "mental health",
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman'
  },
  {
    title: 'Local Girls', 
    type: 'book',
    category: "relationships",
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman'
  },
  {
    title: 'Local Girls',
    type: 'book',
    category: "affirmation",
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman'
  },
  {
    title: 'Local Girls',
    type: 'book',
    category: "body positivity", 
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman'
  },
  {
    title: 'Local Girls',
    type: 'book',
    category: "self-love",
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman'
  },
  {
    title: 'Local Girls', 
    type: 'book',
    category: "personal growth",
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman' 
  },
  {
    title: 'Local Girls',
    type: 'book',
    category: "gratitude",
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman'
  },
  {
    title: 'Local Girls',
    type: 'book',
    category: "happiness",
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman'
  },
  {
    title: 'Local Girls',
    type: 'book',
    category:  "career",
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman'
  },
  {
    title: 'Local Girls',
    type: 'book',
    category:  "success",
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman'
  },
  {
    title: 'Local Girls',
    type: 'book',
    category: "wealth",
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman'
  },
  {
    title: 'Local Girls',
    type: 'book',
    category: "health",
    //imageUrl:
    content: "Gretal Samuelson is a young woman growing up to witness the breakup of her parents' marriage, her cousin Margot's search for love, the deterioration of a brother who passes up Harvard for a job at the local grocery store, and emotional explosions that shatter the suburban quiet.",
    author: 'Alice Hoffman'
  }
]

/* ORIGINAL:
const seedData = async () => {
    Promise.all(
        resourceData.map(resource => Resource.create(resource)),
        userData.map(user => User.create(user))
    );
}

*/


const seedData = async () => {
  resourceData.map(resource => Resource.create(resource))

    const users = []
    for (let i = 0; i < 10; i++) {
      const username = faker.name.firstName() + ' ' + faker.name.lastName();
      users.push(username);
      await User.create({
        username: username,
        password: '123'
      })
    } 

    //const journals = []
    for (let i = 0; i < 50; i++) {
      //const username = faker.name.firstName() + ' ' + faker.name.lastName();
      //users.push(username);
      await Entry.create({
        content: faker.lorem.paragraph(),
        userId: Math.ceil(Math.random()*(10))
      })
    } 
}

module.exports = seedData;