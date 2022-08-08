function chuckNorris() {
    let chuckNorris = document.querySelector('#root')
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => chuckNorris.innerHTML = data.value)
    .catch(error => console.error(error))
}