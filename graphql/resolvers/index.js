const postResolvers = require("./posts");
const userResolvers = require("./users");

module.export = {
  Query: {
    ...postResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
  }
};
