// get value from input function

function getInputFieldValue(money) {
    const inputField = document.getElementById(money + '-input');
    const inputFieldText = inputField.value;
    const inputAmount = parseFloat(inputFieldText);
    inputField.value = '';

    if (inputAmount >= 0) {

        return inputAmount;
    }
    else {
        alert('invalid input!! please provide only positive number');
    }
}

// get value from input
document.getElementById('calculate-button').addEventListener('click', function () {
    // console.log('clicked');
    const incomeInputField = document.getElementById('income-input');
    // const inputFieldText = inputField.value;
    // const inputFieldAmount = parseFloat(inputFieldText);
    // console.log(inputFieldAmount);
    const incomeValue = getInputFieldValue('income');
    const foodInputField = document.getElementById('food-input');
    const foodValue = getInputFieldValue('food');
    const rentInputField = document.getElementById('rent-input');
    const rentValue = getInputFieldValue('rent');
    const clothInputField = document.getElementById('cloth-input');
    const clothValue = getInputFieldValue('cloth');


    //total expense calculation
    const totalExpense = document.getElementById('total-expense');
    const totalExpenseText = totalExpense.innerText;
    const totalExpenseAmount = parseFloat(totalExpenseText);
    const totalExpenses = foodValue + rentValue + clothValue;
    if (incomeValue == null || foodValue == null || rentValue == null || clothValue == null) {
        alert('input field can no be empty!!');
    }
    else if (totalExpenses < incomeValue) {
        totalExpense.innerText = totalExpenses;
        //update remaining balance
        const updateBalance = document.getElementById('remain-balance');
        const updateBalanceText = updateBalance.innerText;
        const updateBalanceAmount = parseFloat(updateBalanceText);
        const balance = incomeValue - totalExpenses;
        updateBalance.innerText = balance;
    }
    else {
        alert('you can not spend more then your income');
    }

});
function getIncome() {
    //expense
    const expense = getExpense();
    //balance
    const balance = getBalance();
    const totalIncome = expense + balance;
    return totalIncome;

}

//get expense from function
function getExpense() {
    const totalExpense = document.getElementById('total-expense');
    const totalExpenseText = totalExpense.innerText;
    const totalExpenseAmount = parseFloat(totalExpenseText);
    return totalExpenseAmount;

}
// get balance from function
function getBalance() {
    const updateBalance = document.getElementById('remain-balance');
    const updateBalanceText = updateBalance.innerText;
    const updateBalanceAmount = parseFloat(updateBalanceText);
    return updateBalanceAmount;

}
// saving calculation function
function savingCalculation() {
    const savingField = document.getElementById('save-input');
    const savingFieldText = savingField.value;
    const savingFieldValue = parseFloat(savingFieldText);
    savingField.value = '';
    let income = getIncome();
    if (savingFieldValue <= 100 && savingFieldValue > 0) {
        const totalSavingBalance = (income * savingFieldValue) / 100;
        return totalSavingBalance;
    }
    else {
        alert('please provide valid percentage!!');
    }
}
//update saving balance
document.getElementById('save-button').addEventListener('click', function () {
    const totalSavingBalance = savingCalculation();
    const savingBalance = document.getElementById('saving-amount');
    const savingBalanceText = savingBalance.innerText;
    const savingBalanceAmount = parseFloat(savingBalanceText);

    //remaining amount after savings when save button clicked
    const lastRemaining = document.getElementById('after-saving-remain-balance');
    const updateBalanceAmount = getBalance();
    if (totalSavingBalance <= updateBalanceAmount) {
        savingBalance.innerText = totalSavingBalance;
        const lastRemainingAmountText = lastRemaining.innerText;
        const lastRemainingAmount = updateBalanceAmount - totalSavingBalance;
        lastRemaining.innerText = lastRemainingAmount;

    }
    else {
        alert('you can not save more than your balance!!');
    }

});

