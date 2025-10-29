
const Api ="21cd0ba0f2ba458989091143252910";

document.getElementById('searchBtn').addEventListener('click', async ()=>{
    let city = document.getElementById('city').value.trim();
    let loc =document.getElementById('location');
    let date = document.getElementById('date');
    let celsius =document.getElementById('celsius');
    let IconImg = document.getElementById('iconImg');
    let weatherCondition =document.getElementById('weatherCondition');


    if (!city || city.length === 0) {
    alert("Please enter a city name");
    return;
    }
    try{
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${Api}&q=${city}`);
        const data = await res.json();
        
        loc.innerText=data.location.region;
        date.innerText=data.location.localtime;
        celsius.innerText=data.current.temp_c;
        IconImg.src="https:" + data.current.condition.icon;
        weatherCondition.innerText=data.current.condition.text;

    }
    catch {
        alert("problem in fetch")
    }

})