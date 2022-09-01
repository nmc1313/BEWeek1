// const express = require('express');
// const app = express();

var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// // init the data store
// // ---------------------------
db.defaults({ posts: []}).write();

console.log(db.get('posts').value());

// // add post
// // ----------------------------
db.get('posts')
db.push({id:1, title: 'hey there', published: true})
db.write()

// count posts
// ----------------------------
// const count = db.get('posts').reduce((result) => result + 1, 0)
// console.log(count);

// find all posts ids
// ----------------------------
// YOUR CODE

// all matches of published false
// ----------------------------
// YOUR CODE

// find post with published false
// ----------------------------
// YOUR CODE


//JUST CODE FROM LOWDB
// import { join, dirname } from 'path'
// import { Low, JSONFile } from 'lowdb'
// import { fileURLToPath } from 'url'

// const __dirname = dirname(fileURLToPath(import.meta.url));

// // Use JSON file for storage
// const file = join(__dirname, 'db.json')
// const adapter = new JSONFile(file)
// const db = new Low(adapter)

// // Read data from JSON file, this will set db.data content
// await db.read()

// // If file.json doesn't exist, db.data will be null
// // Set default data
// db.data ||= { posts: [] }
// // db.data = db.data || { posts: [] } // for node < v15.x

// // Create and query items using plain JS
// // db.data.posts.push('hello world')
// // db.data.posts[0]

// // You can also use this syntax if you prefer
// const { posts } = db.data
// posts.push('hello world')

// // Write db.data content to db.json
// await db.write()