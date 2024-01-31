fetch('https://forecast9.p.rapidapi.com/')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) =>  console.log(error))
  

