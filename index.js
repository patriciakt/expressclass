const express = require("express");
const app = express();
const hbs = require("hbs");

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

//set routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

//all products
app.get("/products", (req, res) => {
  const { price, limit } = req.query;

  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: 499.99,
      size: "Medium",
      image_url: "https://example.com/smartphone.jpg",
    },
    {
      id: 2,
      name: "Laptop",
      price: 899.99,
      size: "Large",
      image_url: "https://example.com/laptop.jpg",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: 79.99,
      size: "One Size",
      image_url: "https://example.com/headphones.jpg",
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 149.99,
      size: "Small",
      image_url: "https://example.com/smartwatch.jpg",
    },
    {
      id: 5,
      name: "Digital Camera",
      price: 399.99,
      size: "Medium",
      image_url: "https://example.com/camera.jpg",
    },
    {
      id: 6,
      name: "Fitness Tracker",
      price: 59.99,
      size: "Small",
      image_url: "https://example.com/fitnesstracker.jpg",
    },
    {
      id: 7,
      name: "Coffee Maker",
      price: 69.99,
      size: "Large",
      image_url: "https://example.com/coffeemaker.jpg",
    },
    {
      id: 8,
      name: "Gaming Console",
      price: 299.99,
      size: "Medium",
      image_url: "https://example.com/gamingconsole.jpg",
    },
    {
      id: 9,
      name: "Bluetooth Speaker",
      price: 49.99,
      size: "Small",
      image_url: "https://example.com/bluetoothspeaker.jpg",
    },
    {
      id: 10,
      name: "Tablet",
      price: 349.99,
      size: "Large",
      image_url: "https://example.com/tablet.jpg",
    },
  ];

  const filteredProducts = products.filter((e) => e.price <= +price);

  res.json(filteredProducts.slice(0, limit));
});

//using req.query
app.get("/products/:price", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: 499.99,
      size: "Medium",
      image_url: "https://example.com/smartphone.jpg",
    },
    {
      id: 2,
      name: "Laptop",
      price: 899.99,
      size: "Large",
      image_url: "https://example.com/laptop.jpg",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: 79.99,
      size: "One Size",
      image_url: "https://example.com/headphones.jpg",
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 149.99,
      size: "Small",
      image_url: "https://example.com/smartwatch.jpg",
    },
    {
      id: 5,
      name: "Digital Camera",
      price: 399.99,
      size: "Medium",
      image_url: "https://example.com/camera.jpg",
    },
    {
      id: 6,
      name: "Fitness Tracker",
      price: 59.99,
      size: "Small",
      image_url: "https://example.com/fitnesstracker.jpg",
    },
    {
      id: 7,
      name: "Coffee Maker",
      price: 69.99,
      size: "Large",
      image_url: "https://example.com/coffeemaker.jpg",
    },
    {
      id: 8,
      name: "Gaming Console",
      price: 299.99,
      size: "Medium",
      image_url: "https://example.com/gamingconsole.jpg",
    },
    {
      id: 9,
      name: "Bluetooth Speaker",
      price: 49.99,
      size: "Small",
      image_url: "https://example.com/bluetoothspeaker.jpg",
    },
    {
      id: 10,
      name: "Tablet",
      price: 349.99,
      size: "Large",
      image_url: "https://example.com/tablet.jpg",
    },
  ];
  const foundProduct = products.find((e) => e.price === +req.params.price);
  res.json(foundProduct);
});

//response with what client requests (req.params)
app.get("/products/:id", (req, res) => {
  console.log(req.params);
  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: 499.99,
      size: "Medium",
      image_url: "https://example.com/smartphone.jpg",
    },
    {
      id: 2,
      name: "Laptop",
      price: 899.99,
      size: "Large",
      image_url: "https://example.com/laptop.jpg",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: 79.99,
      size: "One Size",
      image_url: "https://example.com/headphones.jpg",
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 149.99,
      size: "Small",
      image_url: "https://example.com/smartwatch.jpg",
    },
    {
      id: 5,
      name: "Digital Camera",
      price: 399.99,
      size: "Medium",
      image_url: "https://example.com/camera.jpg",
    },
    {
      id: 6,
      name: "Fitness Tracker",
      price: 59.99,
      size: "Small",
      image_url: "https://example.com/fitnesstracker.jpg",
    },
    {
      id: 7,
      name: "Coffee Maker",
      price: 69.99,
      size: "Large",
      image_url: "https://example.com/coffeemaker.jpg",
    },
    {
      id: 8,
      name: "Gaming Console",
      price: 299.99,
      size: "Medium",
      image_url: "https://example.com/gamingconsole.jpg",
    },
    {
      id: 9,
      name: "Bluetooth Speaker",
      price: 49.99,
      size: "Small",
      image_url: "https://example.com/bluetoothspeaker.jpg",
    },
    {
      id: 10,
      name: "Tablet",
      price: 349.99,
      size: "Large",
      image_url: "https://example.com/tablet.jpg",
    },
  ];
  const foundProduct = products.find((e) => e.id === +req.params.id);
  res.json(foundProduct);
});

//start server
app.listen(3000, () => {
  console.log(`App is running on port 3000 yay`);
});
