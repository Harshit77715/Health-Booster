const express = require("express");
require('dotenv').config();
const app = express();
app.use(express.json());
const cors = require("cors");
const port = Number(process.env.port) || 4500;
const { Connection } = require("./Back-End/config/db");
app.use(cors());
const { userRouter } = require("./Back-End/routes/users.route");
const { todosRouter } = require("./Back-End/routes/todos.route");
const { productRouter } = require("./Back-End/routes/products.route");
const { cartRouter } = require("./Back-End/routes/cart.route");
const { wishlistRouter } = require("./Back-End/routes/wishlist.route");
const { myorderRouter } = require("./Back-End/routes/myorder.route");


app.get("/", (req, res) => {
  let obj = {
    owner: "Harshit Mittal",
    project: "NEM305-Construct Week Project",
    project_code: "web-master-6117",
    student_code: "fs40_396117",
    course: "Back-End Developer",
    tech_stacks: "Node.js, Express JS, MongoDB, Mongoose, npm packages, JavaScript, HTML, CSS",
    My_Portfolio: `https://harshit77715.github.io/`,
    Github_Profile: `https://github.com/harshit77715`,
    LinkedIn: `https://www.linkedin.com/in/harshit-mittal-398b3424b`,
    SomeUsefullRoutes: {
      users: "app.use('/users', userRouter)",
      products: "app.use('/products', productRouter)",
      cart: "app.use('/cart', cartRouter)",
      wishlist: "app.use('/wishlist',wishlistRouter)",
      myorder: `app.use('/myorder;,myorderRouter)`
    }
  }
  res.send({ Server_Details: obj });
});



app.use('/users', userRouter);
app.use("/todos", todosRouter)
app.use("/products", productRouter)
app.use("/cart", cartRouter)
app.use("/wishlist", wishlistRouter)
app.use("/myorder", myorderRouter)

app.listen(port, async () => {
  try {
    await Connection;
    console.log("Connected To DB");
  } catch (error) {
    console.log(error);
    console.log("Failed To Connect DB");
  };
  console.log(`server is started at port ${port}`);
});
