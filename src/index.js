import express from "express";
import morgan from "morgan";
import cors from "cors";
import resolvers from "./resolvers.js";
import schema from "./schema.js";
import { graphqlHTTP } from "express-graphql";

const app = express();
const PORT = process.env.PORT || 8000;
const root = resolvers;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("- API is correctly working -");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`🚀 App working on port ${process.env.PORT || 8000}`);
});
