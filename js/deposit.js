//Add event listener(click handler) to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(event){
   
    //step-2: get the deposit amount from deposit input field
    //for input field use .value to get the value of input field
   const depositField = document.getElementById('deposit-field');
   const newDepositAmountString = depositField.value;
   const newAmount = parseFloat(newDepositAmountString);
  
   //step-3: get the deposit current total amount
   //for non-input(element other than input,textarea) use innerText to get the text
   const totalDepositElement = document.getElementById('total-deposit')
   const previousTotalDepositString = totalDepositElement.innerText;
   const previousAmount = parseFloat(previousTotalDepositString);

    //step-4: add numbers to set the total deposit
   const currentDepositTotal = previousAmount + newAmount; 
   //set the deposit total
   totalDepositElement.innerText = currentDepositTotal;
   //step-5: get balance current total
   const totalBalanceElement = document.getElementById('total-balance')
   const totalBalanceString = totalBalanceElement.innerText;
   const previousBalanceTotal = parseFloat(totalBalanceString);

//    step-6 : calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newAmount;  
    //set the deposit total
    totalBalanceElement.innerText = currentBalanceTotal;


   //step-7 :clear te deposit value
   depositField.value ='';
})