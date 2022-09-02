document.getElementById('case-plus').addEventListener('click', function(){
    const caseNumber = getNumString('case-field', true);
    setValue('case-field', caseNumber);

    const caseTotalPrice = caseNumber * 59;
    setInnterText('casePrice', caseTotalPrice);

    calculateTotal()
    
})

document.getElementById('case-minus').addEventListener('click', function(){
    const caseNumber = getNumString('case-field', false);
    setValue('case-field', caseNumber);

    const caseTotalPrice = caseNumber * 59;
    setInnterText('casePrice', caseTotalPrice);

    calculateTotal()
})