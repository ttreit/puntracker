//access button in JS (Dom element)
const addPunButton = document.getElementById('add-pun-button');
console.log('Test AddPunButton: ', addPunButton);

//add click listener
addPunButton.addEventListener('click', () => {
    alert('Testing Click Listener for Add Pun button');
})
