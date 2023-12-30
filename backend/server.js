import express from "express";

const app = express();
const port = 8080;

app.get("/services/m/post/1", (req, res) => {
  console.log(`Request received: ${req.path}`);
  res.json({ message: "Hello, this is post 1!" });
});

// any other routes:
app.get("*", (req, res) => {
  console.log(`Request received: ${req.path}`);
  res.redirect("https://http.cat/status/404");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
