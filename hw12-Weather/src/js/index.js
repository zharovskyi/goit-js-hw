

import newsService from './services/servicesAPI';
// import PNotify from 'pnotify/dist/es/PNotify';
import getCurrentPossition from './getGeoPosition.js';
// import describeWeatherItem from './fetchWeather.js';
import weather from '../template/weateher.hbs';
import "pnotify/dist/PNotifyBrightTheme.css";
// import 
const refs = {
    searchForm: document.querySelector('#search-form'),
    sectionWeather: document.querySelector('#weather'),

}


refs.searchForm.addEventListener('submit',searchFormSubmitHeandler);
function searchFormSubmitHeandler(e) {
    e.preventDefault();

    const searchCity = e.currentTarget.elements.city.value;
   
    newsService.fetchCity(searchCity).then(data => {
       const murkup = createListWeather(data);
       console.log(murkup);
       refs.sectionWeather.innerHTML = murkup;
    //    refs.sectionWeather.insertAdjacentHTML('beforeend', murkup);
    });;
  
}

function createListWeather(items){
    return weather(items);
}
