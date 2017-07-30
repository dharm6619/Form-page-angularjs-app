require('./db');

require('mongoose').model('User',User);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dm',{useMongoClient: true});
var User = mongoose.model('User',User);
module.exports = {
  createUsers: function (req, res) {
    var person = req.body;
    new User({ Name: person.Name, DOB: person.DOB, Total_Amount_Invested: person.Total_Amount_Invested, Cash_In_Hand:person.Cash_In_Hand, Monthly_Profit: person.Monthly_Profit, Expenses: person.Expenses, Sources_Of_Income: person.Sources_Of_Income, Debt: person.Debt })
      .save(function (err) {
        if (err) {
          res.status(504);
          res.end(err);
        } else {
          console.log('user saved');
          res.end();
        }
      });
  },
  seeResults: function (req, res, next) {
    User.find({}, function (err, docs) {
      if (err) {
        res.status(504);
        res.end(err);
      } else {
        for (var i = 0; i < docs.length; i++) {
         console.log('user:', docs[i].name);
        }
        res.end(JSON.stringify(docs));
      }
    });
  },
  delete: function( req, res, next) {
    console.log(req.params.id);
    User.find({ _id: req.params.id}, function(err) {
      if(err) {
        req.status(504);
        req.end();
        console.log(err);
      }
    }).remove(function (err) {
      console.log(err);
      if (err) {
        res.end(err);            
      } else {
        res.end();
      }
    });
  }
}


