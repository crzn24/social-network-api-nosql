// Array of random usernames
const usernameArray = [
    'lskywalker',
    'lorgana',
    'hsolo',
    'okenobi',
    'atano',
    'askywalker',
    'dvader',
    'jbinks',
    'swren',
    'ebridger',
    'kjarrus',
    'hsyndulla',
    'zorellios',
    'chewie',
    'fn2187',
    'rskywalker',
    'pdameron',
    'aackbar',
    'bfett',
    'ddjarin'
];

// Array of randomly generated emails
const emailArray = [
    'lushe@live.com',
    'dhwon@gmail.com',
    'zeller@hotmail.com',
    'helger@aol.com',
    'novanet@live.com',
    'attwood@optonline.net',
    'jimxugle@mac.com',
    'duncand@att.net',
    'offthelip@live.com',
    'pthomsen@aol.com',
    'crandall@me.com',
    'bowmanbs@verizon.net',
    'maneesh@att.net',
    'hwestiii@live.com',
    'novanet@optonline.net',
    'pizza@icloud.com',
    'tsuruta@yahoo.com',
    'stern@icloud.com',
    'mallanmba@msn.com',
    'kingjoshi@comcast.net'
]

// Array of random thoughts (words)
const thoughtArray = [
    'innate',
    'sharp',
    'business',
    'assorted',
    'moon',
    'fence',
    'press',
    'wealth',
    'abashed',
    'delightful',
    'crowded',
    'agreement',
    'polite',
    'volatile',
    'thoughtful',
    'fine',
    'clap',
    'spoon',
    'macho',
    'possessive'
]

// Array of random reactions
const reactionArray = [
    'first',
    'cool',
    'nice',
    'awesome',
    'noice',
    'haha',
    'lol',
    'omg',
    'uh',
    'huh',
    'yesss',
    'yaass',
    'sweet',
    'hello',
    'me too',
    'same',
    'so cool',
    'aw yeah',
    'lmao',
    'what'
]

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// get random username
const getRandomUsername = () => getRandomArrItem(usernameArray);

// get random email
const getRandomEmail = () => getRandomArrItem(emailArray);

// Function to generate random thoughts that we can add to user object.
const getRandomThought = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughtArray),
        reactions: getRandomArrItem(reactionArray),
        // username: getRandomArrItem(usernameArray),
      });
    }
    return results;
  };

// Export the functions for use in seed.js
module.exports = { getRandomUsername, getRandomEmail, getRandomThought, };