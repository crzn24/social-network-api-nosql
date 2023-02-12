const { Schema, model } = require('mongoose');
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now, // TODO check Set default value to the current timestamp
        get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),  // Use a getter method to format the timestamp on query
    },
    username: { // user that created this thought
        type: String,
        required: true,
    },
    reactions: [reactionSchema] // these are like replies
},
{
    toJSON: {
        virtuals: true, // when doing export of json make sure to inclue virtuals
    },
    id: false,
}
);


// Virtual called reactionCount that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;  // returns length of array to represent total number of user's friends
});

// Initialize our Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;