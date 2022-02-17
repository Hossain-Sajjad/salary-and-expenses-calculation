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

    // input validation
    if( isNaN(incomeValue) || isNaN(foodValue) || isNaN(rentValue) || isNaN(clothesValue) || incomeValue == '' || foodValue == '' || rentValue == '' || clothesValue == '' ){
        document.getElementById('wrong-input-error').style.display = 'block';
        document.getElementById('calculation-result').style.display = 'none';
    }
    if( incomeValue < 0 || foodValue < 0 || rentValue < 0 || clothesValue < 0){
        document.getElementById('negative-input-error').style.display = 'block';
        document.getElementById('calculation-result').style.display = 'none';
    }
    
    // unsuficiant balance error 
    if(incomeValue < totalExpenses){
        document.getElementById('unsuficient-balance-error').style.display = 'block';
        document.getElementById('balance-part').style.display = 'none';
    }
})

// save button handler
document.getElementById('save-button').addEventListener('click', function(){
    const incomeValue = getInputValue('income');
    const savingValue = getInputValue('saving');
    document.getElementById('saving-amount').innerText = (parseInt(incomeValue) * parseInt(savingValue)) / 100;

    const balance = document.getElementById('balance').innerText;
    const savingAmount = document.getElementById('saving-amount').innerText;
    document.getElementById('remaining-balance').innerText = parseInt(balance) - parseInt(savingAmount);

    // balance error 
    if(balance < savingAmount){
        document.getElementById('balance-error').style.display = 'block';
        document.getElementById('saving-result').style.display = 'none';
    }

    // input validation
    if(isNaN(savingValue) || savingValue < 0){
        document.getElementById('saving-result').style.display = 'none';
        document.getElementById('balance-error').style.display = 'none';
        document.getElementById('saving-input-error').style.display = 'block';
    }
});



