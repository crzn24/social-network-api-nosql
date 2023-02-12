const { User, Thought } = require('../models');

const userController = {

//////////////  -------  /api/users
    // GET all users


    // GET a single user by its _id and populated thought and friend data


    // POST/CREATE a new user


    // PUT/UPDATE a user by its _id


    // DELETE to remove user by its _id. BONUS: remove user and associated thoughts when deleted

//////////////  -------  /api/users/:userId/friends/:friendId

    // POST to add a new friend to a user's friend list. ADD a friend


    // DELETE to remove a friend from a user's friend list. REMOVE a friend
}

module.exports = userController;