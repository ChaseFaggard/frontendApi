// Prevents form from reloading page on submit
document.querySelector('#form').addEventListener('submit', e => e.preventDefault())

const handleSubmit = async () => {
    let query = document.querySelector('#value').value
    let data = await searchApi(query)
    let activity = data.activity
    let resultDiv = document.querySelector('#result')
    if(activity != undefined) resultDiv.innerText = `${data.activity}`
    else resultDiv.innerText = '😔 No results were found. 👍 Try a different category'
    resultDiv.style.display = 'block'
}