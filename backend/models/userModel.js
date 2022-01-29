//Import Mongoose
const mongoose = require("mongoose");
// Import bcrypt package for decrypt/encrypt
const bcrypt = require("bcryptjs");

// Create MONGO schema
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    picture: {
      type: String,
      required: true,
      default:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRDbteaAViexCf6H6EyRlyNKw60aF-13GoCdjpY2w7b9nrcUCaWcT4FXgUdbOLYyhKfRQdwyhOkP-jBsAlpb73_u2AbGkjVUFyLayd5u3SpjU22u5xIXh5Ouw&usqp=CAc",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// will encrypt password everytime its saved
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
