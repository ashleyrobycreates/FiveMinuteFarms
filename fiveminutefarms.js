var requestOptions = {
    method: '',
    redirect: 'follow'
  };
  
 fetch(`https://perenual.com/api/species-list?key=[sk-rfXa66763ec8237056010]`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  