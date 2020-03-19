const express = require('express');
const search = express.Router();
const PostModel = require('../modules/post')

search.get('/:keyword', (req, res) => {
    const keyword = req.params.keyword;
    // mongoose
    PostModel
        .find({
            $text: {
                $search: keyword
            }
        })
        .exec((err, posts) => {
            res.json(posts)
        })
})

module.exports = search