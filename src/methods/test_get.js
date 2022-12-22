const url = 'https://dad-jokes.p.rapidapi.com/random/joke';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '62f14263d7mshf0d0c5c2d907463p17e319jsn22f5a4e04e49',
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    }
};

export default (callback)=>{
    fetch(url, options)
        .then(res => res.json())
        .then(json => callback(json))
        .catch(error => console.log(error))
}