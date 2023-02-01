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
addMovie(
    "Чудачество любви не помеха! ТВ-1", 
    "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/829a2313-d0b9-4f4a-b4fe-d52803ce005e/1920x", 
    7.2, 5.5, "anime", "06.12.2022");
addMovie(
    "Спасатели Малибу", 
    "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/d641b6b1-37b1-44f5-8ed8-a8a7691a4384/1920x", 
    6.5, 8, "movie", "08.12.2022");
addMovie(
    "Хочу. не могу", 
    "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/61718eee-8302-4f22-b55e-9f1b4755c6a5/1920x", 
    6, 8.8, "movie", "11.12.2022");
addMovie(
    "Муви 43", 
    "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/3c770614-d030-4f97-bc77-844f87feab92/1920x", 
    2.5, 3, "movie", "12.12.2022");
addMovie(
    "Хочу съесть твою поджелудочную железу", 
    "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/045c20d3-9d4d-45c1-b6dd-918b97f7b825/1920x", 
    6, 6, "anime", "15.12.2022");
addMovie(
    "На пятьдесят оттенков темнее", 
    "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/9e2b9af9-d161-4050-a390-84d9ff512bac/1920x", 
    6.8, 7.5, "movie", "03.01.2023");
addMovie(
    "Сад изящных слов", 
    "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/af28ea5e-5a3f-488a-a58f-253d053108fe/1920x", 
    9, 9, "anime", "08.01.2023");
addMovie(
    "Леди и бродяга", 
    "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/a79f816c-6d70-48b0-aa74-63bf25f942d2/1920x", 
    8.5, 9, "cartoon", "23.01.2023");
addMovie(
    "Образцовый самец", 
    "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/6d0f23b9-4649-45e2-b435-980e1ae787c3/1920x", 
    5, 7.6, "movie", "27.01.2023");
addMovie(
    "Карлик нос", 
    "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/f64f1b02-6297-4642-ba4f-9585d914b465/1920x", 
    7.5, 8.8, "cartoon", "30.01.2023");
addMovie(
    "Волк с Уолл-стрит", 
    "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/c5876e81-9dec-43e2-923f-fee2fca85e21/1920x", 
    8.5, 9.5, "movie", "31.01.2023");
addMovie(
    "Человек-паук: Возвращение домой", 
    "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/c7b5178e-0a26-4bfe-8853-7e826de86ae8/1920x", 
    9, 8.9, "movie", "01.02.2023");
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
        <a href=""><img src="${movies[i][1]}" class="movie_image"></a>
        </div>
        <p class="movie_date">
            ${movies[i][5]}
        </p>
        <div class="movie_info">
            <p class="movie_title">${movies[i][0]}</p>
            <div class="movie_rating">
                <div class="movie_rating_container unselectable" style="color:${color1};">
                    <img src="img/man_emoji.png" width="50px">${movies[i][2]}
                </div>
                <div class="movie_rating_container unselectable" style="color:${color2};">${movies[i][3]}
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
