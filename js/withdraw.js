//step-1: add event handler with the withdraw button
//step-2: get the withdraw amount from the input field
//step-2.5: also make sure to convert the input into a number using parseFloat
//step-3: get previous withdraw total
//step-4: calculate total withdraw amount
//step-4.5: set total withdraw amount
//step-5: get the previous balance total
//step-6: calculate new balance total
//step-6.5: set the new balance total
//step-7: clear the input field

//step-1:
document.getElementById('btn-withdraw').addEventListener('click',function(){

//step-2:    
const withdrawField = document.getElementById('withdraw-field')
const newWithDrawAmountString = withdrawField.value;
const newWithDrawAmount = parseFloat(newWithDrawAmountString);
//step-7:
withdrawField.value ='';
if(isNaN(newWithDrawAmount)){
    alert('Please provide a number')
    return;
}

//step-3:
const totalWithdrawElement = document.getElementById('withdraw-total')
const previousWithdrawTotalString = totalWithdrawElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);



//step-5:
const balanceTotalElement = document.getElementById('total-balance');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

//step-7:
withdrawField.value ='';

if(newWithDrawAmount>previousBalanceTotal){
    alert('Insufficient Money');
    return;
}
//step-4:
const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
totalWithdrawElement.innerText = currentWithdrawTotal;

//step-6:
const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
balanceTotalElement.innerText = newBalanceTotal;



})