const button = document.querySelector('.submitBtn')
const link = document.querySelector('.searchBox')
const quality = document.querySelector('.quality')
const response = function(){
    fetch(`/download?url=${encodeURIComponent(link.value)}&quality=${encodeURIComponent(quality.value)}`)
    .then((response)=>response.json()
    .then(data => {
        console.log(data)
    })
)
    
}
button.addEventListener('click', response)