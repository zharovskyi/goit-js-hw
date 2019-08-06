import './styles.css';
import { resolve } from 'url';
import PNotify from 'pnotify/dist/es/PNotify';
import "pnotify/dist/PNotifyBrightTheme.css";



const baseUrl ='http://api.apixu.com/v1/current.json?key=f795b80deb1b45309ba93327190208';
const refs = {
    searchForm: document.querySelector('#search-form'),
    section: document.querySelector('.weather'),
    icon: document.querySelector('.icon'),
    location: document.querySelector('span[data-field="location"]'),
    temp: document.querySelector('span[data-field="temp"]'),
    humidity: document.querySelector('span[data-field="humidity"]'),
    wind: document.querySelector('span[data-field="wind"]'),
    conditions: document.querySelector('span[data-field="conditions"]'),
    baseUrl: 'http://api.apixu.com/v1/current.json?key=f795b80deb1b45309ba93327190208&lang=uk',
}

refs.searchForm.addEventListener('submit', searchFormSubmitHeandler);

function searchFormSubmitHeandler(e){
    e.preventDefault();
    const searchCity = e.currentTarget.elements.city.value;
   fetchCity(searchCity).then(data =>{
       refs.icon.src=data.current.condition.icon;
       refs.icon.alt = data.current.condition.text; 
       refs.location.textContent = data.location.name;
       refs.temp.textContent = data.current.temp_c;
       refs.humidity.textContent = data.current.humidity;
       refs.wind.textContent = data.current.wind_kph;
       refs.conditions.textContent = data.current.condition.text;
       refs.section.classList.remove("is-hidden");
   })
   
}

function fetchCity(query) {
    
    return fetch(refs.baseUrl + `&q=${query}`).then(response => response.json());
    
}




 const getCurrentPosition = () => {
     const option = {
         maximumAge: 108000000,
         
         
     };
     return new Promise((resolve, reject) => {
         navigator.geolocation.getCurrentPosition(resolve,reject,option);
     })
 }
getCurrentPosition()
 .then(location => {    
    // console.log('location :', location);
    return fetch(`${baseUrl}&lang=uk&q=${location.coords.latitude},${location.coords.longitude}`)
   .then(response => response.json()).then(data => {
    //    console.log(data);
        refs.icon.src=data.current.condition.icon;
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