

// var movies = [
//     {title: 'Mean Girls'},
//     {title: 'Hackers'},
//     {title: 'The Grey'},
//     {title: 'Sunshine'},
//     {title: 'Ex Machina'},
//   ];


const prettitfyTitle = (string) => {
  let strings = string.split(' '); 
  let result = ''
  for(string of strings){
    let prettyWord = string[0].toUpperCase() + string.slice(1); 
    result += prettyWord + ' ';
  }
  return result.trim(); 
}


  // console.log(movies.filter(movie => movie.title.includes('S')));

  // export default prettitfyTitle; 