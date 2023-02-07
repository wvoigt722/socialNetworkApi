const { Schema } = require("mongoose");
const reactionSchema = require("./Reaction");

// const dateFormat = function () {

// }

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Use a getter method to format the timestamp on query
      // get: timestamp => dateFormat(timestamp)
    },
    userName: {
      type: Schema.Types.ObjectId,
      ref: "thought",
    },
    reactions: [reactionSchema],
    // these are like replies to comments
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reactions.length;
  });

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
