const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'movies'
});
 
connection.connect();



const insert = function ({title, release_date, vote_average, overview, poster_path}, callback){
  connection.query('INSERT INTO movies (title, description, year, score, image, watched) VALUES (?, ?, ?, ?, ?, ?)',[title, overview, release_date.slice(0, 4), vote_average, poster_path, 'false'], function (error, results, fields) {
  if (error){
    callback(error);
  } else {
    callback(null);
  }
  })
};

const get = function(callback){
  connection.query('SELECT * FROM movies', (err, movies)=> {
    if(err){
      callback(err);
    } else {
      callback(null, movies);
    };
    }
)};

get(console.log);



module.exports = connection;
module.exports.insert = insert;
module.exports.get = get; 