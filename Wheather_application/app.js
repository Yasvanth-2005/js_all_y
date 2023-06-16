const key = `b0dfbcb680414072a5d50424233105`;
const BASE_URL = `https://api.weatherapi.com/v1`;
let requestUrl = `/current.json`;
let query = "Nuzvid";

getData(query);

function getData(q){
    fetch(BASE_URL + requestUrl + "?key=" + key + "&q=" + q + "&days=1")
         .then((response) => {
            if(!response.ok){
                throw new Error("Network response was not OK");
            }
            return response.json()})
         .then( (data) => {
                console.log(data);
                const box = document.querySelector('.box-container');
                box.innerHTML = `
                        <div class="wheather-box">
                        <div class="title">
                            <div class="location">${data.location.name}, ${data.location.country}</div>
                            <div class="date">${data.location.localtime}</div>
                        </div>
                        <div class="sub">
                            <div class="main_wheather_display">
                                <div class="img"><img src="${data.current.condition.icon}"></div>
                                <section>
                                    <div class="temp">${data.current.temp_c}&deg;C</div>
                                    <div class="text">${data.current.condition.text}</div>
                                </section>
                            </div>
                            <div class="sideThings">
                                <div class="sidebox">
                                    <div class="icon">
                                        <i class="bi bi-wind"></i>
                                    </div>
                                    <section>
                                        <div class="heading">Wind speed</div>
                                        <div class="value">${data.current.wind_mph} mph</div>
                                    </section>
                                </div><div class="sidebox">
                                    <div class="icon">
                                        <i class="bi bi-droplet-half"></i>
                                    </div>
                                    <section>
                                        <div class="heading">Humidity</div>
                                        <div class="value">${data.current.humidity}%</div>
                                    </section>
                                </div><div class="sidebox">
                                    <div class="icon">
                                        <i class="bi bi-tropical-storm"></i>
                                    </div>
                                    <section>
                                        <div class="heading">Pressure</div>
                                        <div class="value">${data.current.pressure_in} in</div>
                                    </section>
                                </div><div class="sidebox">
                                    <div class="icon">
                                        <i class="bi bi-cloud-snow"></i>
                                    </div>
                                    <section>
                                        <div class="heading">Precipitation</div>
                                        <div class="value">${data.current.precip_mm} mm</div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
         })
         .catch(error => {
            console.log(error);
            document.querySelector('.box-container').innerHTML = `
             <h1 align="center">Wrong Query / Lost connection with API // Try Again</h1>
            `
         })
}

// Form
const form = document.querySelector(".changeLocFrom");

form.addEventListener('submit',e => {
    e.preventDefault();
    if(!document.getElementById('name').value == ''){
        let que = document.getElementById('name').value;
        getData(que);
    }else{
        alert("Empty Query");
    }
})

// Change Location btn
const toggleBtn = document.querySelectorAll('.tbtn');
toggleBtn.forEach((btn) => { 
    btn.addEventListener('click',() => {
    form.classList.toggle("show");
 })
})