import './styles.css';
import {
    resolve
} from 'url';
import PNotify from 'pnotify/dist/es/PNotify';
import "pnotify/dist/PNotifyBrightTheme.css";
import fetchCity from "./fetchWeather.js"
import getCurrentPosition from "./getGeoPosition.js"

const baseUrl = 'https://api.apixu.com/v1/current.json?key=f795b80deb1b45309ba93327190208';
const refs = {
    searchForm: document.querySelector('#search-form'),
    section: document.querySelector('#weather'),
    icon: document.querySelector('.icon'),
    location: document.querySelector('span[data-field="location"]'),
    temp: document.querySelector('span[data-field="temp"]'),
    humidity: document.querySelector('span[data-field="humidity"]'),
    wind: document.querySelector('span[data-field="wind"]'),
    conditions: document.querySelector('span[data-field="conditions"]'),

}

refs.searchForm.addEventListener('submit', searchFormSubmitHeandler);

function searchFormSubmitHeandler(e) {
    e.preventDefault();
    const searchCity = e.currentTarget.elements.city.value;
    fetchCity(searchCity).then(data => {
        refs.icon.src = data.current.condition.icon;
        refs.icon.alt = data.current.condition.text;
        refs.location.textContent = data.location.name;
        refs.temp.textContent = data.current.temp_c;
        refs.humidity.textContent = data.current.humidity;
        refs.wind.textContent = data.current.wind_kph;
        refs.conditions.textContent = data.current.condition.text;
        refs.section.classList.remove("is-hidden");
    })
}

getCurrentPosition()
    .then(location => {
        return fetch(`${baseUrl}&lang=uk&q=${location.coords.latitude},${location.coords.longitude}`)
            .then(response => response.json()).then(data => {
                refs.icon.src = data.current.condition.icon;
                refs.icon.alt = data.current.condition.text;
                refs.location.textContent = data.location.name;
                refs.temp.textContent = data.current.temp_c;
                refs.humidity.textContent = data.current.humidity;
                refs.wind.textContent = data.current.wind_kph;
                refs.conditions.textContent = data.current.condition.text;
                refs.section.classList.remove("is-hidden");
            })
    })
    .catch(error => {
        PNotify.alert('Does not has date locattion,please enter the city');
    })