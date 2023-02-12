const { User, Thought } = require('../models');

module.exports = {

//////////////  -------  /api/users
    // GET all users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    // GET a single user by its _id and populated thought and friend data
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then((user) => 
            !user
                ? res.status(404).json({ message: 'No user with that ID' })
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    }

    // POST/CREATE a new user


    // PUT/UPDATE a user by its _id


    // DELETE to remove user by its _id. BONUS: remove user and associated thoughts when deleted

//////////////  -------  /api/users/:userId/friends/:friendId

    // POST to add a new friend to a user's friend list. ADD a friend


    // DELETE to remove a friend from a user's friend list. REMOVE a friend
}





getPosts(req, res) {
    Post.find()
      .then((posts) => res.json(posts))
      .catch((err) => res.status(500).json(err));
  },
  getSinglePost(req, res) {
    Post.findOne({ _id: req.params.postId })
      .then((post) =>
        !post
          ? res.status(404).json({ message: 'No post with that ID' })
          : res.json(post)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new post
  createPost(req, res) {
    Post.create(req.body)
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => res.status(500).json(err));
  },
};