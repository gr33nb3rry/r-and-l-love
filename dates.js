const dates = [
    ["23.01.2019","Узнали друг о друге. Это произошло в интернете, в одном из приложений знакомств, но хоть и считается, что такие отношения не живут долго, мы другой случай."],
    ["02.02.2019","Первая свидание, но не date, а meeting. Они встретились возле Origo (По секрету, она немного задержалась, как настоящая девушка) и отправились неважно куда, лишь бы вместе. Хоть свидание продлилось недолго, потому что ей надо было посидеть с ребенком (не своим!!!), оно было классным. С этого дня у него даже стоит фотография в рамке."],
    ["11.02.2019","Первый поцелуй. Один из самых важных дней наших отношений мы провели, гуляя в Болдерае, в районе, в котором она выросла, а он почти никогда не гулял. Мы поцеловались у нее в подъезде, пока за маленьким окном шел дождь, постукивая по нему."],
    ["14.02.2019","Он впервые был у нее в гостях. Ее квартира показалась ему очень уютной, настолько, что потом они частенько (очень) проводили время у нее. "],
    ["26.02.2019","Он признался в любви. Это было рядом с офисом Swedbank и практически в реке Даугава, это место называется AB dambis. Мы оказались там по ее желанию, а она умеет выбирать хорошие места. Хоть этому месту и не хватает реконструкции, оно романтичное, особенно в темное время суток."],
    ["09.03.2019","Самая важная дата наших отношений, потому что в этот день мы начали встречаться. Это произошло у нее дома в важный субботний день. Почему важный? Потому что он уже в автобусе знал, что будет, думая, как предложить перейти на новый уровень отношений. В этот день произошло много интересного, но даже они не стоят рядом с началом отношений. "],
    ["20.03.2019","Первый поход в McDonald's. И даже не в центре города, он находился и находится в Пурвциемсе. В тот день мы ели McSunday и любовались друг другом."],
    ["25.03.2019",'Первый поход в кинотеатр. А смотрели мы "Королевский Корги", хороший мультфильм, который нам обоим понравился.'],
    ["28.12.2020","Мы слепили огромный член из снега. Мы занимались общим делом на протяжении нескольких часов, но результат того стоил. Огромный член в высоту ~180см. Является ли это мелким хулиганством мы не знаем, но мы знаем то, что это удобное кресло."],
    ["08.06.2021","Начали смотреть Наруто, было это, кстати, у нее дома в объятиях. А досмотрели его мы 17 ноября 2022 года."],
    ["31.12.2021","Первая ночевка, а еще и первый Новый Год, который мы встретили вместе вживую. Потом мы стали ночевать пару раз в неделю, а то и чаще, а этот день стал первым шагом."],
    ["14.02.2023","Мы посмотрели Титаник. Это ее любимый фильм, а он никогда его не смотрел. Это было в кинотеатре Apollo в день Св. Валентина с 18:20 до 21:40."],
    ["13.03.2023","Мы сделали парные тату. Хоть эскизы и места разные, смысл и текст один. Lapka в стиле дэтметала, у него - более грубые линии, у нее - более мягкие. Кстати, это были их первые тату, ему было больно примерно на 0%, а вот ей..."],
];

pasteDates();

function pasteDates(){
    document.getElementById("date_container").innerHTML = "";

    let date;
    for (let i = 0; i < dates.length; i++){
        date = `<div class="date">
        <p style="color:#ff0065;">${dates[i][0]}</p>
        <p style="text-align: justify;">${dates[i][1]}</p>
        </div>`;
        document.getElementById("date_container").innerHTML += date;
        
    }
}
