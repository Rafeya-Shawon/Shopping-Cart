function getNumString (id, numIncDec){
    const productNumber = document.getElementById(id);
    const productNumberString = productNumber.value ;
    const prevNum = parseInt(productNumberString);

    if(numIncDec === true){
        const newNumber = prevNum + 1;
        return newNumber;
    }
    else{
        const newNumber = prevNum - 1;
        if(prevNum <= 0){
            return 0;
        }
        return newNumber;
    }
}
function setValue (id, place){
    const productNumber = document.getElementById(id);
    productNumber.value = place;
}

function setInnterText(id, totalPrice){
    const productTotal = document.getElementById(id);
    productTotal.innerText = totalPrice;
}
function getTextElement (id){
    const totalElement = document.getElementById(id);
    const currentTotalString = totalElement.innerText;
    const currentTotal = parseInt(currentTotalString);
    return currentTotal;
}
function calculateTotal(){
    const currentPhoneTotal = getTextElement('phonePrice');
    const currentCaseTotal = getTextElement('casePrice');
    const currentTotal = currentPhoneTotal + currentCaseTotal;
    setInnterText('subtotal', currentTotal);

    const tax = (currentTotal * 0.1).toFixed(2);
    const taxAmmount = parseInt(tax);
    setInnterText('tax', taxAmmount);

    const totalAmmount = currentTotal + taxAmmount;
    setInnterText('total', totalAmmount);
   
}