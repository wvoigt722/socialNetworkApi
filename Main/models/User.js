const { Schema, Types } = require("mongoose");

const userSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      maxlength: 50,
      minlength: 4,
      default: "Insert Username",
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email address is required",
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },

    // var validateEmail = function(email) {
    //var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //return re.test(email)

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const User = model("user", userSchema);

module.exports = User;
