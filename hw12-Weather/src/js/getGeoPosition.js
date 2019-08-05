// const getCurrentPossition = location => {
//     const options = {
//         timeout: 4000
//     };
//     return new Promise ((resolve,reject) => {
//         navigator.geolocation.getCurrentPossitiongetCurrentPossition(resolve,reject,options);
//     });
// };
// getCurrentPossition()
//     .then(location => {
//         PNotify.notice({
//             title: 'Regular Notice',
//             text: `${{location}}`,
//           });
//     })
//     .catch(error =>{
//         PNotify.notice({
//             title: 'Regular Notice',
//             text: 'Нет прав доступа к геопозиции, используйте поиск по имени города.',
//           });
//     });

// // navigator.geolocation.getCurrentPosition(onGetPossitionSuccsess,onGetPossitionError);