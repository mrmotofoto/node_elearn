var mongoose = require('mongoose');

var ClassSchema = mongoose.Schema({
	title: {
		type: String
	},
	description: {
		type: String
	},
	instructor: {
		type: String
	},
	lessons: [{
		lesson_number: {type: Number},
		lesson_title: {type: String},
		lesson_body: {tpye: String}
	}]
});

var Class = module.exports = mongoose.model('Class', ClassSchema);


//FETCH ALL CLASSES
module.exports.getClasses = function(callback, limit) {
	Class.find(callback).limit(limit);
}

module.exports.getClassById = function(id, callback) {
	Class.findById(id, callback);
}