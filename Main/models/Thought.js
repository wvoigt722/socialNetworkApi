const { Schema, Types } = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    assignmentName: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Use a getter method to format the timestamp on query
    },
    userName: {
      type: String,
      required: true,
      // The user that created this thought. Do we reference here?
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

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
