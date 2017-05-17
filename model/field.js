var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Field Schema
var fieldSchema = mongoose.Schema({
	img: { data: Buffer, contentType: String }
});

var Field = module.exports = mongoose.model('Field', fieldSchema);

// Get Fields
module.exports.getFields = function(callback, limit){
	Field.find(callback).limit(limit);
};
// Get post by id
module.exports.getFieldById = function(id, callback){
	Field.findById(id, callback);
}
module.exports.addField = function(image, callback){
	//console.log(image);
	Item.create(image, callback);
}
