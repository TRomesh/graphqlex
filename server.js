const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema");
const app = express();

// add middleware to check if a request is for graphql or not
app.use("/graphql", expressGraphQL({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log("Listening to port : 4000");
});
