var inputval= document.querySelector('#cityinput')
var btn= document.querySelector('#add')
var city =document.querySelector('#cityoutput')
var descrip= document.querySelector('#description')
var temp=document.querySelector('#temp')
var wind= document.querySelector('#wind')
// apik ="1e802ba74e0a5d8e61d8c2348648298d"
apik = "59338e4f7f2b926720f643a93c797167"

function convertion(val){
    return (val-273).toFixed(2)
}
btn.addEventListener('click', () =>{

    
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputval.value+"&appid="+apik)
    .then(res => res.json())

    .then(data=>{
        var nameval = data['name']
        var descrip = data['weather'][0]['description']
        var tempature = data['main']['temp']
        var wndspd = data['wind']['speed']
        city.innerHTML = `Weather of <span>${nameval}</span>`
        temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`
        description.innerHTML = `Sky Conditions: <span>${descrip}</span>`
        wind.innerHTML = `Wind Speed: <span>${wndspd} km/h</span>`
    })
    .catch(err => alert('You entered Wrong city name'))
})

