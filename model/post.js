var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// post Schema
var postSchema = mongoose.Schema({
	Title   : String, 
    Content   : String, 
	OwnerId   : String,
    Owner   : Object,
	FieldId   : String, 
    FieldName   : String, 
    PostDate   : Date, 
    LastModified   : Date, 
    Love   : { type : Array , "default" : [] },
    Comment    : { type : Array , "default" : [] }
});

var Post = module.exports = mongoose.model('Post', postSchema);

// Get post
module.exports.getPosts = function(callback, limit){
	Post.find(callback).limit(limit);
};
// Get post by id
module.exports.getPostById = function(id, callback){
	
	Post.findById(id, callback);
}
// Get post by  user id
module.exports.getPostByUserId = function(userId, callback){
	Post.find({OwnerId: userId}, callback);
}
// Get post by  fields id
module.exports.getPostByFieldId = function(fieldId, callback){
	Post.find({FieldId: fieldId}, callback);
}
//Add post
module.exports.addPost = function(post, callback){
	Post.create(post, callback);
}
// Update Post
module.exports.updatePost = function(id, post, options, callback){
	var query = {_id: id};
	var update = {
		Title: post.Title,
		Content: post.Content,
		Field: post.Field,
        Love: post.Love,
        Comment: post.Comment,
		LastModified: post.LastModified
	}
	Post.findOneAndUpdate(query, update, options, callback);
}
// Delete Post
module.exports.removePost = function(id, callback){
	var query = {_id: id};
	Post.remove(query, callback);
}