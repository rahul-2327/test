// const button = document.querySelector('button')
// let img = document.querySelector('img')

// button.addEventListener('click', () => {
//   const xhr = new XMLHttpRequest();
//   xhr.responseType = 'json'
//   xhr.addEventListener('load', () => {
//     console.log(xhr.response);
//     img.src = xhr.response.message

//   })
//   xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
//   xhr.send()
// })

/*
const btn = document.querySelector('button');
let img = document.querySelector('img');
const url = 'https://dog.ceo/api/breeds/image/random';

let test;
const getImg = async () => {
  try {
    const response = await fetch(url);
    const set = await response.json();
    img.src = set.message;
    test = set;
  } catch (error) {
    console.error('Error fetching image:', error);
  }
}

btn.addEventListener('click', () => {
  getImg();
});

*/