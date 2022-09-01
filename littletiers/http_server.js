// add http server
const express = require('express');
const app = express();

var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// configure express to serve static files from public directory
app.use(express.static('public'));

// init the data store
db.defaults({ posts: []}).write();

// list posts
app.get('/data', function(req, res){     
    res.send(db.get('posts').value());
});

// ----------------------------------------------------
// add post - test using:
//      curl http://localhost:3002/posts/ping/10/false
// ----------------------------------------------------
// adds whatever info you put into URL into the database as post
app.get('/posts/:title/:id/:published', function(req, res){
    var isPublished = req.params.published === 'true' ? true : false;

    var post = {
        'id': req.params.id,
        'title': req.params.title,
        'published': isPublished,
    }

    console.log(req.params.published);
    console.log(isPublished);

    db.get('posts').push(post).write();
    console.log(db.get('posts').value());
    res.send(db.get('posts').value());
});

// ----------------------------------------------------
// filter by published state - test using:
//      curl http://localhost:3002/published/true
// ----------------------------------------------------
app.get('/published/:boolean', function(req, res){
    var isPublished = req.params.boolean === 'true' ? true : false;

    var publish = db.get('posts').filter((post) => {
        if (post.published === isPublished)
        return post;
    }, null);

    res.send(publish);
});

// ----------------------------------------------------
// update published value - test using:
//      curl http://localhost:3002/published/1/true
// ----------------------------------------------------
app.get('/published/:id/:boolean', function(req, res){
    var postID = req.params.id;
    var isPublished = req.params.boolean === 'true' ? true : false;
    console.log(isPublished);

    var publish = db.get('posts').filter((post) => {
        if (postID = req.params.id) {
            if (post.published === isPublished)
            return post;
            else post.published = !isPublished;
            console.log(isPublished);
        }
    }, null);

    res.send(publish);
});

// ----------------------------------------------------
// delete entry by id - test using:
//      curl http://localhost:3002/delete/5
// ----------------------------------------------------
app.get('/delete/:id/', function(req, res){

    // YOUR CODE

});

// start server
app.listen(3002, function(){
console.log('running on port 3002')
});
