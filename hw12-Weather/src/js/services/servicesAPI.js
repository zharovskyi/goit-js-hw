

const baseUrl = 'http://api.apixu.com/v1/current.json?key=f795b80deb1b45309ba93327190208';
 export default {
    fetchCity(query) { 
        const requestParams = `&q=${query}`;
        return fetch(baseUrl + requestParams).then(response => response.json())
    }
 }






// http://api.apixu.com/v1/current.json?key=f795b80deb1b45309ba93327190208&q=Paris