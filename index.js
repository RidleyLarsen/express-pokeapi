var express = require('express');
var jade = require('jade');
var app = express();

app.set('port', (process.env.PORT || 8000));
app.set('view engine', 'jade')
app.use(express.static(__dirname + '/public'));

var Sequelize = require('sequelize')
var sequelize = new Sequelize(
  'rqypmrin_pokeapi',
  'rqypmrin_ridley',
  'stjggiLbada95IQCju8wU6hnB90fhekQ', {
    dialect: "mysql", // or 'sqlite', 'postgres', 'mariadb'
    port:    3306, // or 5432 (for postgres)
  }
)

sequelize
  .authenticate()
  .complete(function(err) {
    if (!!err) {
      console.log('Unable to connect to the database:', err)
    } else {
      console.log('Connection has been established successfully.')
    }
  })

app.get('/', function (req, res) {
  res.render('index', {
    title: 'PokeAPI Explorer',
    message: 'Hello there!'
  });
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
