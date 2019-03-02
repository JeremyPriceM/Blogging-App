"use strict";
// Blogging App
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const blogPostSchema = mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {
        firstName: String,
        lastName: String
    },
    created: {type: Date, default: Date.now}
});

blogPostSchema.virtual("authorString").get(function() {
    return `${this.author.firstName} ${this.author.lastName}`.trim();
});

blogPostSchema.methods.serialize = function() {
    return{
        id: this._id,
        author: this.authorString,
        title: this.title,
        content: this.content,
        created: this.created
    };    
};

const BlogPost = mongoose.model("Blogs", blogPostSchema);

module.exports = {BlogPost};
