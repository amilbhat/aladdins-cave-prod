const express = require("express")
const app = express()
const path = require("path")
const ejsMate = require("ejs-mate")
const productsData = require("./productsData/productsData.json")
const featuredProduct = require("./productsData/featuredProducts.json")

app.use(express.static(path.join(__dirname, "assets")))

const port = 3000

app.engine("ejs", ejsMate)
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))


app.get('/', (req, res) => {
  res.render("home", {featuredProduct, productsData})
})

app.get('/about', (req, res) => {
  res.render("pages/about-us")
})

app.get('/contact', (req, res) => {
  res.render("pages/contact")
})

app.get('/why-choose-us', (req, res) => {
  res.render("pages/why-choose-us")
})

app.get('/terms-and-conditions', (req, res) => {
  res.render("pages/terms-and-conditions")
})

app.get('/privacy-policy', (req, res) => {
  res.render("pages/privacy-policy")
})

app.get('/cancellation-policy', (req, res) => {
  res.render("pages/cancellation-policy")
})

app.get('/replacement-and-refund-policy', (req, res) => {
  res.render("pages/replacement-and-refund-policy")
})

app.get('/bank-details', (req, res) => {
  res.render("pages/bank-details")
})

app.get('/videos', (req, res) => {
  res.render("pages/videos")
})

app.get("/products/:type", (req, res) => {
  const { type } = req.params
  res.render("pages/productsList", { type, productsData })
})

app.get("/products/:type/:productId", (req, res) => {
  const { type, productId } = req.params
  const product = productsData[type][productId]
  res.render("pages/singleProduct", { type, productId, product, productsData })
})

app.listen(process.env.PORT || port, () => {
    console.log("Serving on port 3000!!")
})