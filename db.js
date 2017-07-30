var mongoose = require('mongoose');

var User = new mongoose.Schema({
	Name: {type: String},
	DOB: {type:String},
 	Total_Amount_Invested: Number,
 	Cash_In_Hand: Number,
 	Monthly_Profit: Number,
	Expenses: {type:String},
 	Sources_Of_Income: {type:String},
	Debt: {type:String}
});

mongoose.model('User',User);
mongoose.connect('mongodb://localhost/dm',{useMongoClient: true});

console.log('Connected to mongodb');
