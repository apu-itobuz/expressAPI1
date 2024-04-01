import express from "express";
import prodRouter from "./routes/products.js";




const app = express();
const port = process.env.port || 5000;

app.get("/", (req, res) => {
  res.send("hello");
});

//  app.listen(port , ()=>{
//   console.log(`this port ${port} is running`);
//  })

// const products_routes = require("./routes/products")


//middleware or to set router
app.use("/api/products" , prodRouter)







const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`this port  ${port}is running`);
    });
  } catch (error) {
    console.log(error);
  }
};

start()
