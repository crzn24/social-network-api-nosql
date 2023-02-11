const mongoose = require('mongoose');

// creates a new instance of the Mongoose schema to define shape of each document
const userSchema = new mongoose.Schema({
    // adds individual properties and their types
    username: { 
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address.'], // TODO Must match a valid email address (look into Mongoose's matching validation). /^.+@(?:[\w-]+\.)+\w+$/
    },
    thoughts: [
        { 
            type: Schema.Types.ObjectId, 
            ref: 'Thought'
        }
        ],
    friends: [
        { 
            type: Schema.Types.ObjectId, 
            ref: 'User'
        }
        ],

},
{
    toJSON: {
        virtuals: true, // when doing export of json make sure to inclue virtuals
    },
    id: false,
}
);


// Virtual called friendCount that retrieves the length of the user's friends array field on query
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;  // returns length of array to represent total number of user's friends
});

// Initialize our User model
const User = model('User', userSchema);

module.exports = User;