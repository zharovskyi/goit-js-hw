import './styles.css';
import postTemplate from './template/post.hbs'

// const baseUrl = 'https://swapi.co/api';

// let appData = {
//     planets: [],
//     getPlanets() {
//         return this.planets
//     },
//     renderPlanets(){
//         const template =this.planets.map(el => planetsTemplate(el).join());
//         // this.refs.ul.insertA
//         }
// };

// fetch(`${baseUrl}/planets/?page=1`)
//     .then((response) => response.json())
//     .then(data => {  
//         appData.planets = data.results;
//         console.log(appData.getPlanets());
//         planetsTemplate(appData.planets[0]);
//     });



    // Postd

    const baseUrl2 = 'http://localhost:3000';
    const postData = {
     post: [],
     refs: {
       form: document.querySelector('.form'),
       postsList: document.querySelector('.posts')
     },
     getPosts() {
       fetch(`${baseUrl2}/posts`)
         .then(res => res.json())
         .then(data => {
           console.log('data :', data)
           this.posts = data;
           this.render();
         });
     },
     createPost(data) {
       fetch(`${baseUrl2}/posts`, {
         headers: {
           "content-type": "application/json"
         },
         method: "POST",
         body: JSON.stringify(data),
       })
         .then(res => res.json())
         .then(data => {
           this.posts.push(data);
           console.log('data :', data);
           this.refs.postsList.insertAdjacentHTML('beforeend', postTemplate(data));
         })
     },
     render() {
       const markup =
         this.posts.map(el => postTemplate(el)).join('');
       this.refs.postsList.insertAdjacentHTML('beforeend', markup);
     }
    }
    postData.refs.form.addEventListener('submit', function (e) {
     e.preventDefault();
     console.log('e.currentTarget.elements.title :', e.currentTarget.elements.title);
     const submData = {
       title: e.currentTarget.elements.title.value,
       text: e.currentTarget.elements.text.value,
     };
     postData.createPost(submData);
    })
    postData.getPosts();

    // delete

    postData.refs.postsList.addEventListener('click',function(e){
        if(e.target.nodeName === 'BUTTON') {
            const id = e.target.dataset.id;

            fetch(`${baseUrl2}/posts/${id}`,{
                method: 'DELETE',
            }).then(res => res.json())
            .then(data => console.log(data))
            .then(() => {
                e.target.closest('.posts__item').remove();
            })
        }
    })