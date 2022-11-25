const movies = [];

addMovie(
    "Naruto & Naruto Shippuden", 
    "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/7efcdee8-6b4c-4114-a3b5-3ae338030710/1920x", 
    10, 7);
addMovie(
    "Кот в сапогах", 
    "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/6b4df5c2-ad1e-4e2d-8651-7eee69dc24a1/1920x", 
    8, 10);


pasteMovies();
function addMovie(name, link, rate1, rate2){
    const tmp = [name, link, rate1, rate2];
    movies.push(tmp);
}
function pasteMovies(){
    let movie;
    for (let i = 0; i < movies.length; i++){
        movie = `<div class="content_movie">
        <div style="overflow:hidden;">
        <a href=""><img src="${movies[i][1]}" width="300px" height="424px" class="movie_image"></a>
        </div>
        <div class="movie_info">
            <p class="movie_title">${movies[i][0]}</p>
            <div class="movie_rating">
                <div class="movie_rating_container">
                    <img src="img/man_emoji.png" width="50px">${movies[i][2]}
                </div>
                <div class="movie_rating_container">${movies[i][3]}
                    <img src="img/girl_emoji.png" width="50px">
                </div>
            </div>
        </div>
        </div>`;
        document.getElementById("content_movies_container").innerHTML += movie;
    }
}