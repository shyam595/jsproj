let longitude;
let latitude;
const place = document.querySelector(".city")
const temperature = document.querySelector("div .temp")
const summary = document.querySelector(".description")
const air = document.querySelector(".wind")
const huma = document.querySelector(".humidity")
const image = document.querySelector(".icon")

const submit = document.querySelector(".submit")
const search = document.querySelector(".search-bar")



window.addEventListener("load", ()=>{

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
            longitude = position.coords.longitude
            latitude = position.coords.latitude
            
            report(latitude, longitude)
            
        })

    }
})


function report(latitude, longitude){
    const api = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`

    fetch(api).then(response => {
        return response.json()
    }).then(data => {
        // console.log(data)
        const {temp, humidity} = data.main
        
        
        
        const name = data.name
        const {description, icon} = data.weather[0]
        const wind = data.wind.speed
        

        place.textContent = `Weather in ${name},` + "  " + data.sys.country
        temperature.textContent = temp
        summary.textContent = description
        air.textContent = `Wind speed: ${wind} km/hr`
        huma.textContent = `Humidity: ${humidity}%`
        image.src = icon
    })
}


submit.addEventListener("click", ()=>{
    // let apikey = "22cfe9cd002da5a28867d9b6a3df0cf0"
    let city = search.value
    let first = city.split('')[0].toUpperCase()
    city=city.replace(city.charAt(0), first)
    
    
    console.log(city)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=22cfe9cd002da5a28867d9b6a3df0cf0`).then((res) => {
        return res.json()
    }).then((x)=>{
        if(x.cod='404'){
            alert(x.message)
        }else{
        const {lon, lat} = x.coord
        report(lat, lon)
        
        }
        search.value = ''
    })
})