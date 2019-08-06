export default

function getCurrentPosition() {
    const option = {
        maximumAge: 108000000,

    };
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, option);
    })
}