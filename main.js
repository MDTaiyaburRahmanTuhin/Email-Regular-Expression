console.log('tuhin');
const pattern = /^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/
const emailCheck = document.getElementById('emailCheck');


console.log(emailCheck);


function myfun() {
    let emailCheckValue = emailCheck.value;
    console.log(emailCheck);
    if (pattern.test(emailCheckValue)) {
        document.getElementById('messages').innerHTML = 'congratulations your email is validation'
    }
    else {
        document.getElementById('messages').innerHTML = 'Bad your email is no same'
    }
}
