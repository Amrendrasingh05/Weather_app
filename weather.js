function getData() {
    console.log(document.getElementById('city').value);
    var city = document.getElementById('city').value;

    fetch('https://api.weatherapi.com/v1/current.json?key=51f0bb66a0d84f329a6185921223103&q=' + city)
        .then(response => response.json())
        .then(data => {

            // document.getElementsById('title').innerText=;

            document.getElementById('head').innerText = `${data.location.name}  ${data.current.temp_c} °C`;

            document.getElementById('info').innerText = `
                                               COUNTRY      ${data.location.country}  
                                               REGION       ${data.location.region}
                                               CLOUD        ${data.current.condition.text}
                                               WIND (KPH)   ${data.current.wind_kph}
                                               HUMIDITY     ${data.current.humidity}
                                               `;
            

        });

}