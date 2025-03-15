const express = require("express");
const app = express();

app.use(express.static("public")); // 让 React 的构建文件可用

app.get("/", (req, res) => {
    res.send("Hello, this is the backend server!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


