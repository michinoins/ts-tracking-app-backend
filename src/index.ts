import express from "express";
import apiRouter from "./routes/api";

const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

// Routes
app.use("/", apiRouter);

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});

export default app;
