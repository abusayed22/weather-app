let btn = document.querySelector('.input__button');
let input = document.querySelector('.input__bar')

let city = document.querySelector('.city')

btn.addEventListener('click',function(){
        fetch('https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=142ff5caf9ef912f04f162cade73a41b')
                .then(res => res.json())
                .then(data => console.log(data)
                )
                .catch(err => console.log(err)
                )
})
// 142ff5caf9ef912f04f162cade73a41b