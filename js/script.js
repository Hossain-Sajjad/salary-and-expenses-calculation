function getInputValue(id){
    const inputValue = document.getElementById('income-field').value;
    return inputValue;
}

document.getElementById('calculate-button').addEventListener('click', function(){
    const incomeValue = getInputValue('income-field');
    const foodValue = getInputValue('income-field');
    const rentValue = getInputValue('income-field');
    const clothesValue = getInputValue('income-field');
})


