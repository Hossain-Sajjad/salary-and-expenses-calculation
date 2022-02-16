// input value getting function 
function getInputValue(id){
    const inputValue = document.getElementById(id + '-field').value;
    return inputValue;
}

// clculate button handler
document.getElementById('calculate-button').addEventListener('click', function(){
    const incomeValue = getInputValue('income');
    const foodValue = getInputValue('food');
    const rentValue = getInputValue('rent');
    const clothesValue = getInputValue('clothes');
    const totalExpenses = parseInt(foodValue) + parseInt(rentValue) + parseInt(clothesValue);
    document.getElementById('total-expenses').innerText = totalExpenses;
    document.getElementById('balance').innerText = parseInt(incomeValue) - totalExpenses;

    
})

// save button handler
document.getElementById('save-button').addEventListener('click', function(){
    console.log('clicked');
    const incomeValue = getInputValue('income');
    const savingValue = getInputValue('saving');
    document.getElementById('saving-amount').innerText = (parseInt(incomeValue) * parseInt(savingValue)) / 100;

    const balance = document.getElementById('balance').innerText;
    const savingAmount = document.getElementById('saving-amount').innerText;
    document.getElementById('remaining-balance').innerText = parseInt(balance) - parseInt(savingAmount);
});


