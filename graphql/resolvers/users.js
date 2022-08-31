const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { SECRETE_KEY } = require("../../config");

const User = require("../../models/User");

module.export = {
  Mutation: {
    async register(
      _,
      { registerInput: { username, email, password, confirmPassword } },
      context,
      info
    ) {
      // ToDo: validate user
      // ToDo: make sure user name isnt taken
      // ToDo: hash password and crrate an auth token
      password = await bcrypt.hash(password, 12);

      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString(),
      });

      const res = await newUser.save();

      const token = jwt.sign(
        {
          id: res.id,
          email: res.email,
          username: res.username,
        },
        SECRETE_KEY,
        { expiresIn: "1H" }
      );

      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};
