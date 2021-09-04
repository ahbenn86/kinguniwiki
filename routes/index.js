var express = require("express");
var router = express.Router();
const { Article, articles } = require("../models/article");

//Get all articles
router.get("/api/articles", (req, res) => {
	articles.find({}, (err, data) => {
		if (!err) {
			res.send(data);
		} else {
			console.log(err);
		}
	});
});

//Post article
router.post("/api/articles/add", (req, res) => {
	const art = new articles({
		name: req.body.name,
		content: req.body.content,
	});
	art.save((err, data) => {
		res.status(200).json({
			code: 200,
			message: "Article added successfully",
			addarticles: data,
		});
	});
});

//Update article
router.put("/api/articles/edit/:id", (req, res) => {
	const art = {
		name: req.body.name,
		content: req.body.content,
	};
	articles.findByIdAndUpdate(
		req.params.id,
		{ $set: art },
		{ new: true },
		(err, data) => {
			if (!err) {
				res.status(200).json({
					code: 200,
					message: "Article Updated Successfully",
					updatearticles: data,
				});
			} else {
				console.log(err);
			}
		}
	);
});

//Delete article
router.delete("/api/articles/:id", (req, res) => {
	articles.findByIdAndRemove(req.params.id, (err, data) => {
		if (!err) {
			res.status(200).json({
				code: 200,
				message: "Article Deleted Successfully",
				deleteArticles: data,
			});
		}
	});
});

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index");
});

/*Article */
router.get("/article", function (req, res, next) {
	res.render("article");
});

/*All-articles */
router.get("/all-articles", function (req, res, next) {
	res.render("all-articles");
});

/*Create */
router.get("/create", function (req, res, next) {
	res.render("create");
});

/*Edit */
router.get("/edit", function (req, res, next) {
	res.render("edit");
});

/*Login */
router.get("/login", function (req, res, next) {
	res.render("login");
});

/*Register */
router.get("/register", function (req, res, next) {
	res.render("register");
});

/*Search-results */
router.get("/search-results", function (req, res, next) {
	res.render("search-results");
});

module.exports = router;
