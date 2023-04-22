let api_key = `1efa1daf24be3af4a73b1eabef330d62`;

let form = document.querySelector("form");
let search = document.querySelector("#search");


// let month = ["sun","mon","tue","wed","thu","fri","sat"];
// let d = new Date();
// // let dayname = d.toLocaleString("en-US",{weekday:'long'});
// let day = d.getDay(d);
// console.log(day);
// let num = day;
// while(num<7)
// {
//     num++;
//     console.log(month[num]);
// }

// let today = new Date();
// let hrs = today.getHours();
// console.log(hrs);



const getWeather = (city) => {
    let p = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=metric`);
    p.then((response) => {   // promise 1
        console.log(response.status) // checking is https status is safe or not
        console.log(response.ok)  // checking is status is safe then true or false
        // if safe and true then api fetch succesfull
        return response.json()
    }).then((data) => {   // promise 2
        console.log(data) // checking json in console
        return showWeather(data,city);
    })
}

function showWeather(data,city) {
    let temp = document.getElementById('temp');
    temp.innerText = `${data.list[1].main.temp}`;
    let temp_min = document.getElementById('temp-min');
    temp_min.innerText = `${data.list[1].main.temp_min}`;
    let temp_max = document.getElementById('temp-max');
    temp_max.innerText = `${data.list[1].main.temp_max}`;
    let feels_like = document.getElementById('feels-like');
    feels_like.innerText = `${data.list[1].main.feels_like}`;
    let humidity = document.getElementById('humidity');
    humidity.innerHTML = `${data.list[1].main.humidity}%`;
    let wind = document.getElementById('wind');
    wind.innerHTML = `${data.list[1].wind.speed}Km/h`;
    let description = document.getElementById('desc');
    description.innerText = `${data.list[0].weather[0].main}`;
    main_img.innerHTML = `<img class="weather-icon lg" src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="sun">`;
    let day1 = document.getElementById('day1');
    day1.innerText = `${data.list[7].main.temp}`;
    img1.innerHTML = `<img class="weather-icon" src="https://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png">`;
    let day2 = document.getElementById('day2');
    day2.innerText = `${data.list[15].main.temp}`;
    img2.innerHTML = `<img class="weather-icon" src="https://openweathermap.org/img/wn/${data.list[14].weather[0].icon}@2x.png">`;
    let day3 = document.getElementById('day3');
    day3.innerText = `${data.list[23].main.temp}`;
    img3.innerHTML = `<img class="weather-icon" src="https://openweathermap.org/img/wn/${data.list[22].weather[0].icon}@2x.png">`;
    let day4 = document.getElementById('day4');
    day4.innerText = `${data.list[31].main.temp}`;
    img4.innerHTML = `<img class="weather-icon" src="https://openweathermap.org/img/wn/${data.list[30].weather[0].icon}@2x.png">`;
    let day5 = document.getElementById('day5');
    day5.innerText = `${data.list[39].main.temp}`;
    img5.innerHTML = `<img class="weather-icon" src="https://openweathermap.org/img/wn/${data.list[38].weather[0].icon}@2x.png">`;

    let month = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = new Date();
    // let dayname = d.toLocaleString("en-US",{weekday:'long'});
    let day = d.getDay();
    //console.log(day);
    let num = day;
    let name1 = document.getElementById('name1');
    num++;
    if (num === 7) {
        num = 0;
        name1.innerText = `${month[num]}`;
        console.log(num);
    }
    else {
        name1.innerText = `${month[num]}`;
        console.log(num);
    }

    let name2 = document.getElementById('name2');
    num++;
    if (num === 7) {
        num = 0;
        name2.innerText = `${month[num]}`;
        console.log(num);
    }
    else {
        name2.innerText = `${month[num]}`;
        console.log(num);
    }

    let name3 = document.getElementById('name3');
    num++;
    if (num === 7) {
        num = 0;
        name3.innerText = `${month[num]}`;
        console.log(num);
    }
    else {
        name3.innerText = `${month[num]}`;
        console.log(num);
    }

    let name4 = document.getElementById('name4');
    num++;
    if (num === 7) {
        num = 0;
        name4.innerText = `${month[num]}`;
        console.log(num);
    }
    else {
        name4.innerText = `${month[num]}`;
        console.log(num);
    }

    let name5 = document.getElementById('name5');
    num++;
    if (num === 7) {
        num = 0;
        name5.innerText = `${month[num]}`;
        console.log(num);
    }
    else {
        name5.innerText = `${month[num]}`;
        console.log(num);
    }

    console.log("done");

    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d1 = new Date();
    // let dayname = d.toLocaleString("en-US",{weekday:'long'});
    let day_1 = d1.getDay();
    let n = day_1;
    console.log(n);
    console.log("hey");
    if (n === 6) {
        n = 0;
        let foot1 = document.getElementById('foot1');
        foot1.innerHTML = `${week[n]}`;
        foot_img1.innerHTML = `<img class="weather-icon" src="https://openweathermap.org/img/wn/${data.list[9].weather[0].icon}@2x.png">`;
        let g1 = document.getElementById('g1');
        g1.innerHTML = `${data.list[9].main.temp}`;
        let s1 = document.getElementById('s1');
        s1.innerHTML = `${data.list[9].main.humidity}`;

        let w1 = document.getElementById('w1');
        w1.innerText = `${data.list[9].wind.speed}`;

        let de1 = document.getElementById('de1');
        de1.innerHTML = `${data.list[9].weather[0].main}`;

        console.log(n);
    }
    else {
        n = n + 1;
        let foot1 = document.getElementById('foot1');
        foot1.innerHTML = `${week[n]}`;
        foot_img1.innerHTML = `<img class="weather-icon" src="https://openweathermap.org/img/wn/${data.list[9].weather[0].icon}@2x.png">`;
        let g1 = document.getElementById('g1');
        g1.innerHTML = `${data.list[9].main.temp}`;
        let s1 = document.getElementById('s1');
        s1.innerHTML = `${data.list[9].main.humidity}`;

        let w1 = document.getElementById('w1');
        w1.innerText = `${data.list[9].wind.speed}`;

        let de1 = document.getElementById('de1');
        de1.innerHTML = `${data.list[9].weather[0].main}`;

        console.log(n);
    }

    if (n === 6) {
        n = 0;
        let foot2 = document.getElementById('foot2');
        foot2.innerHTML = `${week[n]}`;
        foot_img2.innerHTML = `<img class="weather-icon" src="https://openweathermap.org/img/wn/${data.list[18].weather[0].icon}@2x.png">`;
        let g2 = document.getElementById('g2');
        g2.innerHTML = `${data.list[18].main.temp}`;

        let s2 = document.getElementById('s2');
        s2.innerHTML = `${data.list[18].main.humidity}`;

        let w2 = document.getElementById('w2');
        w2.innerText = `${data.list[18].wind.speed}`;

        let de2 = document.getElementById('de2');
        de2.innerHTML = `${data.list[18].weather[0].main}`;

        console.log(n);
    }
    else {
        n = n + 1;
        let foot2 = document.getElementById('foot2');
        foot2.innerHTML = `${week[n]}`;
        foot_img2.innerHTML = `<img class="weather-icon" src="https://openweathermap.org/img/wn/${data.list[18].weather[0].icon}@2x.png">`;
        let g2 = document.getElementById('g2');
        g2.innerHTML = `${data.list[18].main.temp}`;

        let s2 = document.getElementById('s2');
        s2.innerHTML = `${data.list[18].main.humidity}`;

        let w2 = document.getElementById('w2');
        w2.innerText = `${data.list[18].wind.speed}`;

        let de2 = document.getElementById('de2');
        de2.innerHTML = `${data.list[18].weather[0].main}`;

        console.log(n);
    }

    if (n === 6) {
        n = 0;
        let foot3 = document.getElementById('foot3');
        foot3.innerHTML = `${week[n]}`;
        foot_img3.innerHTML = `<img class="weather-icon" src="https://openweathermap.org/img/wn/${data.list[27].weather[0].icon}@2x.png">`;
        let g3 = document.getElementById('g3');
        g3.innerHTML = `${data.list[27].main.temp}`;

        let s3 = document.getElementById('s3');
        s3.innerHTML = `${data.list[27].main.humidity}`;

        let w3 = document.getElementById('w3');
        w3.innerText = `${data.list[27].wind.speed}`;

        let de3 = document.getElementById('de3');
        de3.innerHTML = `${data.list[27].weather[0].main}`;

        console.log(n);
    }
    else {
        n = n + 1;
        let foot3 = document.getElementById('foot3');
        foot3.innerHTML = `${week[n]}`;
        foot_img3.innerHTML = `<img class="weather-icon" src="https://openweathermap.org/img/wn/${data.list[27].weather[0].icon}@2x.png">`;
        let g3 = document.getElementById('g3');
        g3.innerHTML = `${data.list[27].main.temp}`;

        let s3 = document.getElementById('s3');
        s3.innerHTML = `${data.list[27].main.humidity}`;

        let w3 = document.getElementById('w3');
        w3.innerText = `${data.list[27].wind.speed}`;

        let de3 = document.getElementById('de3');
        de3.innerHTML = `${data.list[27].weather[0].main}`;

        console.log(n);
    }

    if (n === 6) {
        n = 0;
        let foot4 = document.getElementById('foot4');
        foot4.innerHTML = `${week[n]}`;
        foot_img4.innerHTML = `<img class="weather-icon" src="https://openweathermap.org/img/wn/${data.list[36].weather[0].icon}@2x.png">`;
        let g4 = document.getElementById('g4');
        g4.innerHTML = `${data.list[36].main.temp}`;

        let s4 = document.getElementById('s4');
        s4.innerHTML = `${data.list[36].main.humidity}`;

        let w4 = document.getElementById('w4');
        w4.innerText = `${data.list[36].wind.speed}`;

        let de4 = document.getElementById('de4');
        de4.innerHTML = `${data.list[36].weather[0].main}`;
        console.log(n);
    }
    else {
        n = n + 1;
        let foot4 = document.getElementById('foot4');
        foot4.innerHTML = `${week[n]}`;
        foot_img4.innerHTML = `<img class="weather-icon" src="https://openweathermap.org/img/wn/${data.list[36].weather[0].icon}@2x.png">`;
        let g4 = document.getElementById('g4');
        g4.innerHTML = `${data.list[36].main.temp}`;

        let s4 = document.getElementById('s4');
        s4.innerHTML = `${data.list[36].main.humidity}`;

        let w4 = document.getElementById('w4');
        w4.innerText = `${data.list[36].wind.speed}`;

        let de4 = document.getElementById('de4');
        de4.innerHTML = `${data.list[36].weather[0].main}`;
        console.log(n);
    }

    if (n === 6) {
        n = 0;
        let foot5 = document.getElementById('foot5');
        foot5.innerHTML = `${week[n]}`;
        foot_img5.innerHTML = `<img class="weather-icon" src="https://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png">`;
        let g5 = document.getElementById('g5');
        g5.innerHTML = `${data.list[39].main.temp}`;

        let s5 = document.getElementById('s5');
        s5.innerHTML = `${data.list[39].main.humidity}`;

        let w5 = document.getElementById('w5');
        w5.innerText = `${data.list[39].wind.speed}`;

        let de5 = document.getElementById('de5');
        de5.innerHTML = `${data.list[39].weather[0].main}`;


        console.log(n);
    }
    else {
        n = n + 1;
        let foot5 = document.getElementById('foot5');
        foot5.innerHTML = `${week[n]}`;
        foot_img5.innerHTML = `<img class="weather-icon" src="https://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png">`;
        let g5 = document.getElementById('g5');
        g5.innerHTML = `${data.list[39].main.temp}`;

        let s5 = document.getElementById('s5');
        s5.innerHTML = `${data.list[39].main.humidity}`;

        let w5 = document.getElementById('w5');
        w5.innerText = `${data.list[39].wind.speed}`;

        let de5 = document.getElementById('de5');
        de5.innerHTML = `${data.list[39].weather[0].main}`;


        console.log(n);
    }


    // let today = new Date();
// let hrs = today.getHours();
// console.log(hrs);

    let aaj = new Date();
    let hours = aaj.toLocaleString("en-US",{timeStyle:'short'});
    let timer = document.getElementById('timer');
    timer.innerHTML = `${hours}`;



    //9
    // let g1 = document.getElementById('g1');
    // g1.innerHTML = `${data.list[9].main.temp}`;

    // let s1 = document.getElementById('s1');
    // s1.innerHTML = `${data.list[9].main.humidity}`;

    // let w1 = document.getElementById('w1');
    // w1.innerText = `${data.list[9].wind.speed}`;

    // let de1 = document.getElementById('de1');
    // de1.innerHTML = `${data.list[9].weather[0].main}`;

    //12
    // let g2 = document.getElementById('g2');
    // g2.innerHTML = `${data.list[18].main.temp}`;

    // let s2 = document.getElementById('s2');
    // s2.innerHTML = `${data.list[18].main.humidity}`;

    // let w2 = document.getElementById('w2');
    // w2.innerText = `${data.list[18].wind.speed}`;

    // let de2 = document.getElementById('de2');
    // de2.innerHTML = `${data.list[18].weather[0].main}`;

    //3
    // let g3 = document.getElementById('g3');
    // g3.innerHTML = `${data.list[27].main.temp}`;

    // let s3 = document.getElementById('s3');
    // s3.innerHTML = `${data.list[27].main.humidity}`;

    // let w3 = document.getElementById('w3');
    // w3.innerText = `${data.list[27].wind.speed}`;

    // let de3 = document.getElementById('de3');
    // de3.innerHTML = `${data.list[27].weather[0].main}`;

    //6
    // let g4 = document.getElementById('g4');
    // g4.innerHTML = `${data.list[36].main.temp}`;

    // let s4 = document.getElementById('s4');
    // s4.innerHTML = `${data.list[36].main.humidity}`;

    // let w4 = document.getElementById('w4');
    // w4.innerText = `${data.list[36].wind.speed}`;

    // let de4 = document.getElementById('de4');
    // de4.innerHTML = `${data.list[36].weather[0].main}`;

    //9
    // let g5 = document.getElementById('g5');
    // g5.innerHTML = `${data.list[45].main.temp}`;

    // let s5 = document.getElementById('s5');
    // s5.innerHTML = `${data.list[45].main.humidity}`;

    // let w5 = document.getElementById('w5');
    // w5.innerText = `${data.list[45].wind.speed}`;

    // let de5 = document.getElementById('de5');
    // de5.innerHTML = `${data.list[45].weather[0].main}`;









}



form.addEventListener("submit", function (event) {
    getWeather(search.value);
    event.preventDefault();
})


// https://api.openweathermap.org/data/2.5/forecast?q=London&appid=1efa1daf24be3af4a73b1eabef330d62
// https://openweathermap.org/img/wn/10d@2x.png