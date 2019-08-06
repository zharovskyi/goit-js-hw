export default

function fetchCity(query) {
    const baseUrl = 'https://api.apixu.com/v1/current.json?key=f795b80deb1b45309ba93327190208&lang=uk';
    return fetch(baseUrl + `&q=${query}`).then(response => response.json());

}