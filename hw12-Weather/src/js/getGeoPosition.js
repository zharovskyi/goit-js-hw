const onGetPossitionSuccsess = location => {

}
const onGetPossitionError = error => {
    
}
navigator.geolocation.getCurrentPosition(onGetPossitionSuccsess,onGetPossitionError);