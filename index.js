const express = require('express')
const app = express()
const port = 8000

app.get("/",(req,res) => {

})

app.listen(port, () => {
    console.log('started')
    getPost(1);
})

const getPost = (num) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${num}`)
      .then(response => response.json())
      .then(data => console.log(data));
  };
  
  