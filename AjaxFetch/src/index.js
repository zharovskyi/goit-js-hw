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
    postsList: document.querySelector('.posts'),
    formButton: document.querySelector('button[type="submit"]'), //find button in form
    titleInput: document.querySelector('input[name="text"]'),
    textArea: document.querySelector('textarea[name="text"]'),
  },

  editMode: null, //key that chack if form 

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

  updatePost(data,id){
    fetch(`${baseUrl2}/posts/${id}`, {
      method: 'PUT',
      headers:{
        "content-type": "application/json",
      },
      body: JSON.stringify(data),

    }).then(res => res.json())
      .then(data =>console.log(data));
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
  if (!postData.editMode) {
    postData.createPost(submData);
  }

})
postData.getPosts();

// delete

postData.refs.postsList.addEventListener('click', function (e) {
  // if(e.target.nodeName === 'BUTTON') {
  if (e.target.dataset.type === 'DELETE') {
    const id = +e.target.dataset.id;

    fetch(`${baseUrl2}/posts/${id}`, {
        method: 'DELETE',
      }).then(res => res.json())
      .then(data => console.log(data))
      .then(() => {
        e.target.closest('.posts__item').remove();
      })
  } else if (e.target.dataset.type === 'UPDATE') {
    const id = +e.target.dataset.id;
    postData.refs.formButton.textContent = 'update';
    postData.editMode = id;
    const elData = postData.posts
      .find(el => el.id === +e.target.dataset.id)
    postData.refs.titleInput.value = elData.title;
    postData.refs.textArea.value = elData.text;


  }
})