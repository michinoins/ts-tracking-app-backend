import express from "express";
import apiRouter from "./routes/api";

const app = express();

// Routes
app.use("/", apiRouter);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

export default app;
