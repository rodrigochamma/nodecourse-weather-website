const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')




weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() //stop the refresh

    const location = search.value
    
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
    //console.log(response)
    response.json().then((data) => {
        if(data.error)
        messageOne.textContent = data.error
        else{
            messageOne.textContent = 'Location: ' + data.location
            messageTwo.textContent = 'Forecast: ' + data.forecast
        }
    })
})
})