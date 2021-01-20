const main = document.getElementById('main')
const search = document.getElementById('search')
const form = document.getElementById('form')


const api = {
    key : '3265874a2c77ae4a04bb96236a642d2f',
    base: 'http://api.openweathermap.org/data/2.5/'
}

async function weatherPage(query){
    const res = await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    const respData = await res.json()

    console.log(respData)
    
   addWeather(respData)
  

}

function addWeather(data){
 
    const weather = document.createElement('div')
    weather.classList.add('weather')

    weather.innerHTML = 
    `
     <h1>${data.name}</h1>
     <h6>${data.sys.country}</h6>
    <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${data.main.temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
    <small>${data.weather[0].main}</small>

     <h6> max : ${data.main.temp_max}   min : ${data.main.temp_min}</h6>


    `
    main.innerHTML = "";
    main.appendChild(weather)
}





function KtoC(K) {
    return Math.floor(K - 273.15);
}

form.addEventListener('submit', (e)=>{
    const query = search.value 

    if(search.value ){
        weatherPage(search.value )
    }
    
    e.preventDefault()
})