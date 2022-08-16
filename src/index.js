import express from "express";
import morgan from "morgan";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";

const app = express();
const PORT = process.env.PORT || 8000;
const schema = {}
app.use(morgan("dev"));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("- API is correctly working -");
});

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
}));

app.listen(PORT, () => {
  console.log(`🚀 App working on port ${process.env.PORT || 8000}`);
});
