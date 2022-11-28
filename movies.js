const movies = [];
let showMovie = "all";

addMovie(
    "Чёрный Адам", 
    "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/dd33714f-9099-4b20-8d9c-b996e4042d81/1920x", 
    5.5, 2, "movie",  "20.10.2022");
addMovie(
    "Тайна Коко", 
    "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/c1001292-78a7-4d8e-ba60-79475d10165c/1920x", 
    8, 8, "cartoon",  "26.10.2022");
addMovie(
    "Бабка Ёжка и другие", 
    "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/909726c4-5f1d-48d2-963b-99a895455cbe/1920x", 
    4, 9, "cartoon", "16.11.2022");
addMovie(
    "Наруто", 
    "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/7efcdee8-6b4c-4114-a3b5-3ae338030710/1920x", 
    10, 7, "anime", "18.11.2022");
addMovie(
    "Наруто: Последний фильм", 
    "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/869252f0-6919-4f20-9115-94c503484d02/1920x", 
    7, 9, "anime", "18.11.2022");
addMovie(
    "Кот в сапогах", 
    "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/6b4df5c2-ad1e-4e2d-8651-7eee69dc24a1/1920x", 
    8, 10, "cartoon", "22.11.2022");

pasteMovies();

function addMovie(name, link, rate1, rate2, category, date){
    const tmp = [name, link, rate1, rate2, category, date];
    movies.push(tmp);
}
function pasteMovies(){
    document.getElementById("content_movies_container").innerHTML = "";

    let color1;
    let color2;

    let movie;
    for (let i = 0; i < movies.length; i++){
        if (movies[i][2] > 8.5) color1 = "#ffe400";
        else if (movies[i][2] > 6.5) color1 = "#7aff00";
        else if (movies[i][2] > 4) color1 = "#ff9300";
        else color1 = "#fe0000";

        if (movies[i][3] > 8.5) color2 = "#ffe400";
        else if (movies[i][3] > 6.5) color2 = "#7aff00";
        else if (movies[i][3] > 4) color2 = "#ff9300";
        else color2 = "#fe0000";
        
        movie = `<div class="content_movie">
        <div style="overflow:hidden;">
        <a href=""><img src="${movies[i][1]}" width="300px" height="424px" class="movie_image"></a>
        </div>
        <p class="movie_date">
            ${movies[i][5]}
        </p>
        <div class="movie_info">
            <p class="movie_title">${movies[i][0]}</p>
            <div class="movie_rating">
                <div class="movie_rating_container" style="color:${color1};">
                    <img src="img/man_emoji.png" width="50px">${movies[i][2]}
                </div>
                <div class="movie_rating_container" style="color:${color2};">${movies[i][3]}
                    <img src="img/girl_emoji.png" width="50px">
                </div>
            </div>
        </div>
        </div>`;
        if (showMovie == "all") {
            document.getElementById("content_movies_container").innerHTML += movie;
        }
        else {
            if (movies[i][4] == showMovie) {
                document.getElementById("content_movies_container").innerHTML += movie;
            }
        }
    }
}
function setShowMovie(genre) {
    showMovie = genre;
    pasteMovies();
}