const request = require('request');
 

const get = (movie, callback)=> {
     request.get(`https://api.themoviedb.org/3/search/movie?api_key=d3d0044fac0806aa388e4ee13d415f04&language=en-US&query=${movie}&page=1&include_adult=false`, function (err, response, body){
        if (err){
            callback(err)
        } else {
            callback(null, JSON.parse(body).results[0]);
        }
     })
 }; 



 module.exports.get = get; 


