document.getElementById('loan-form').addEventListener('submit', function(e){
    document.getElementById('results').style.display='none';
    document.getElementById('loading').style.display='block';
    setTimeout(calculateResult,2000)
    e.preventDefault();
})

function calculateResult(){
    console.log("hey there");
    const principle = parseFloat(document.getElementById('amount').value,10);
    const rate = parseFloat(document.getElementById('interest').value,10);
    const years = parseFloat(document.getElementById('years').value,10);
    const simpleinterst =document.getElementById('monthly-payment');
    const amount =document.getElementById('total-payment');
    console.log(typeof principle)

    const monthly = (principle*rate*years)/100;
    const amount1 = principle+monthly;

    if(isFinite(monthly)){
        simpleinterst.value = monthly;
        amount.value = amount1;
        document.getElementById('results').style.display='block';
        document.getElementById('loading').style.display='none';
    }
    else{
        showError('You Fool! Check your Numbers!!');
        document.getElementById('loading').style.display='none';
    }
}

function showError(message){
    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    errorDiv.className = 'alert alert-danger';

    errorDiv.appendChild(document.createTextNode(message));
    card.insertBefore(errorDiv,heading);

    setInterval(clearError,3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}