document.getElementById('phone-plus').addEventListener('click', function(){
    const phoneNumber = getNumString('phone-field', true);
    setValue('phone-field', phoneNumber);

    const phoneTotalPrice = phoneNumber * 1219;
    setInnterText('phonePrice', phoneTotalPrice);

    calculateTotal()
    
})

document.getElementById('phone-minus').addEventListener('click', function(){
    const phoneNumber = getNumString('phone-field');
    setValue('phone-field', phoneNumber);

    const phoneTotalPrice = phoneNumber * 1219;
    setInnterText('phonePrice', phoneTotalPrice);

    calculateTotal()


})