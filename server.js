const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const firebase = require("./firebase");
require("firebase/auth");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

mongoose
  .connect("mongodb://localhost:27017/omnidb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(() => {
    console.log("cant connect to mongodb");
  });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      res.redirect("/index");
    })
    .catch((error) => {
      res.send(
        "<script>alert('Invalid email or password.'); window.location.href='/login';</script>"
      );
    });
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "signup.html"));
});

app.post("/signup", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      res.redirect("/index");
    })
    .catch((error) => {
      res.redirect("/signup");
    });
});

app.post("/logout", (req, res) => {
  res.redirect("/login");
});

const testimonials = [
  {
    image: "img/customers/dave.jpg",
    text: "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
    name: "Dave Bryson",
  },
  {
    image: "img/customers/ben.jpg",
    text: "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
    name: "Ben Hadley",
  },
  {
    image: "img/customers/steve.jpg",
    text: "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
    name: "Steve Miller",
  },
  {
    image: "img/customers/hannah.jpg",
    text: "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
    name: "Hannah smith",
  },
];

const FormSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  source: String,
});

const Form = mongoose.model("Form", FormSchema);

//Handle form submission (get your 1st meal for free form)
app.post("/submit-form", (req, res) => {
  const form = new Form({
    fullName: req.body["full-name"],
    email: req.body.email,
    source: req.body["select-where"],
  });
  form
    .save()
    .then(() => {
      res.send(
        "<script>alert('Data saved'); window.location.href='index';</script>"
      );
    })
    .catch((error) => {
      console.log(error);
      res.send(
        "<script>alert('Data saved'); window.location.href='index';</script>"
      );
    });
});

app.get("/index", (req, res) => {
  res.render("index", { testimonials: testimonials });
});

app.listen(3002, () => {
  console.log("Server running on port 3002");
});
