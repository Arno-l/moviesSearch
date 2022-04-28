const input = document.getElementById("searchbar");
const btn = document.getElementById("searchbtn");
const result = document.getElementById("result");
let page = 1;
const inputValue = () => {
  console.log(input.value);
};

const adaptText = (text) => {
  let change = text.split(" ");
  change.filter((word) => word.length > 0);
  change.join("+");
  return change;
};

function TakeMovie() {
  fetch(`http://www.omdbapi.com/?s=${adaptText(input.value)}&page=${page}&apikey=${apiKey}`)
    .then((res) => {
      return res.json();
      page++;
    })
    .then((res) => {
      console.log(res.Search);
      res.Search.forEach((movie) => {
        console.log(movie);

        result.innerHTML += `
        
        <div class=" col-lg-4 col-md-4 col-sm-4">
        <div id="movie-card" class="card" style="width: 12rem;">
        <img class="card-img-top" style="width:100%; max-height: 250px" src="${movie.Poster}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${movie.Title}</h5>
        <p class="card-text">${movie.Year}</p>
        <a href="#" class="btn btn-primary seemore-btn">Read more</a>
        </div>
        </div>
        
        `;
      });
      console.log(res);
      
    })
    .catch((error) => {
      console.log(error);
    });
}

btn.addEventListener("click", TakeMovie);
btn.addEventListener("click", function(){
  if(result.textContent !== " ") {
    result.innerHTML = "";
     }
});

input.addEventListener("click", function(){
  input.value = "";
})