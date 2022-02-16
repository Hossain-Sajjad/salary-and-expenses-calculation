function getInputValue(id){
    const inputValue = document.getElementById(id + '-field').value;
    return inputValue;
}

document.getElementById('calculate-button').addEventListener('click', function(){
    const incomeValue = getInputValue('income');
    const foodValue = getInputValue('food');
    const rentValue = getInputValue('rent');
    const clothesValue = getInputValue('clothes');
    const totalExpenses = parseInt(foodValue) + parseInt(rentValue) + parseInt(clothesValue);
    document.getElementById('total-expenses').innerText = totalExpenses;
    document.getElementById('balance').innerText = parseInt(incomeValue) - totalExpenses;

    console.log(totalExpenses);
})


