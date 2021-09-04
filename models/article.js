const mongoose = require("mongoose");

//articles schema

const articles = mongoose.model("articles", {
	name: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
});

module.exports = { articles };
