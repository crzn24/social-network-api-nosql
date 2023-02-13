const connection = require("../config/connection");
const { Thought, User, Reaction } = require("../models");
const {
    getRandomUsername,
    getRandomEmail,
    getRandomThought,
} = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the users & thoughts
  const users = [];
  const thoughts = getRandomThought(2);

  // Loop 4 times -- add users to the users array
  for (let i = 0; i < 4; i++) {
    const thoughts = getRandomThought(2);
    const username = getRandomUsername();
    const email = getRandomEmail();

    users.push({
      username,
      email,
      thoughts,
    });
    console.log(users);
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thought.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});


















// const connection = require('../config/connection');
// const { Post, User } = require('../models');
// const getRandomName = require('./data');

// console.log(getRandomName());
// connection.on('error', (err) => err);

// connection.once('open', async () => {
//   console.log('connected');
//   await Post.deleteMany({});
//   await User.deleteMany({});

//   const users = [];

//   for (let i = 0; i < 20; i++) {
//     const fullName = getRandomName();
//     const first = fullName.split(' ')[0];
//     const last = fullName.split(' ')[1];

//     users.push({
//       first,
//       last,
//       age: Math.floor(Math.random() * (99 - 18 + 1) + 18),
//     });
//   }

//   await User.collection.insertMany(users);
//   console.log(users);
//   process.exit(0);
// });