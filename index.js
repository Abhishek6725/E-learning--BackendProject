const express = require("express");
const index = express();
const path = require("path");
const bcrypt = require("bcrypt");
const bcryptjs = require("bcryptjs");
const port = process.env.PORT || 8000;
const PathPublic = path.join(__dirname, "/public");
const exp = require("constants");
require("./db/connection");
const Techformregister = require("./models/model");
const Signupregister = require("./models/signmodel");

index.use(express.json());
index.use(express.urlencoded({ extended: false }));

index.use(express.static(PathPublic));

index.set("view engine", "hbs");

index.get("/", (req, res) => {
  res.render("login");
});

index.get("/index.hbs", (req, res) => {
  res.render("index");
});

index.get("/about.hbs", (req, res) => {
  res.render("about");
});

index.get("/contact.hbs", (req, res) => {
  res.render("contact");
});

index.get("/courses.hbs", (req, res) => {
  res.render("courses");
});

index.get("/instructor.hbs", (req, res) => {
  res.render("instructor");
});

index.get("/single.hbs", (req, res) => {
  res.render("single");
});

index.get("/testmonial.hbs", (req, res) => {
  res.render("testmonial");
});

index.get("/team.hbs", (req, res) => {
  res.render("team");
});

index.get("/register.hbs", (req, res) => {
  res.render('contact')
});

index.post("/register.hbs", async (req, res) => {
  try {
    const Data = new Techformregister({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      text: req.body.text,
    });
    const Sdata = await Data.save();
    res.json("Your respond send succesfully!");
  } catch (error) {
    console.log(error);
  }
});

index.get("/signup.hbs", (req, res) => {
  res.render("signup");
});

index.post("/signup.hbs", async (req, res) => {
  try {    
    const Datastore = new Signupregister({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const data = await Datastore.save();
    res.render('login');
  } catch (error) {
    console.log(error);
  }
});

index.get("/login.hbs", (req, res) => {
  res.render("login");
});

index.post("/login.hbs", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const Storage = await Signupregister.findOne({ email: email });
    const isMatch = await bcrypt.compare(password, Storage.password);
    if (isMatch) {
      res.render("index");
    } else {
      res.send("Invalid Login Details!");
    }
  } catch (error) {
    res.send("Invalid LoginId!");
  }
});

index.listen(port, () => {
  console.log(`You are listining on port ${port}`);
});
