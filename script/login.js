let inputNumber = document.querySelector('.login-form__input')
let spanNumberError = document.querySelector('.login-form__error')
let submitBtn = document.getElementById('send-code')
let submitCodeBtn = document.getElementById('submit-code')
let timer = document.getElementById('timer')
let visitor = document.getElementById('visitor')
let websiteInput = document.getElementById('website')
let instagramInput = document.getElementById('instagram')
let visitorWrapper = document.querySelector('.visitor')
let visitorInput = document.querySelector('.visitor__input')
let visitorHead = document.querySelector('.visitor-head-wrapper')
let svgWhite1 = document.querySelector('.svg-white1')
let svgWhite2 = document.querySelector('.svg-white2')
let submitCode = document.querySelector('.submit-code')
let label = document.querySelector('.login-form__label')
let loginText = document.querySelector('.login-content__text')
let loginSpan = document.querySelector('.login-form__span')
visitor.addEventListener('click' , ()=>{
    visitor.style.backgroundColor = 'var(--purple)';
    visitor.style.color = '#fff'
    svgWhite1.style.fill = "#fff";
    svgWhite2.style.fill = "#fff";
    websiteInput.style.backgroundColor = "#a9a9a9"
    websiteInput.style.pointerEvents = "none"
    websiteInput.style.cursor = 'default'
    instagramInput.style.backgroundColor = "#a9a9a9"
    instagramInput.style.pointerEvents = "none"
    instagramInput.style.cursor = 'default'
    visitorWrapper.style.top = "2rem"
    visitorWrapper.style.zIndex = "1"
    visitorWrapper.style.visibility = "visible"
})
visitorInput.addEventListener('keydown', function(event) {
    // Check if the key pressed is 'e' or 'E'
    if (event.key === 'e' || event.key === 'E') {
        event.preventDefault(); // Prevent the 'e' from being entered
    }
});

visitorInput.addEventListener('input', function () {
    if (this.value.length > 5) {
        this.value = this.value.slice(0, 5); // Trim extra characters
    }
});

inputNumber.addEventListener('input', function () {
    if (this.value.length > 11) {
        this.value = this.value.slice(0, 11); // Trim extra characters
    }
});

submitCode.addEventListener('input', function () {
    if (this.value.length > 5) {
        this.value = this.value.slice(0, 5); // Trim extra characters
    }
});
submitCode.addEventListener('keydown', function(event) {
    // Check if the key pressed is 'e' or 'E'
    if (event.key === 'e' || event.key === 'E') {
        event.preventDefault(); // Prevent the 'e' from being entered
    }
});

inputNumber.addEventListener('keydown', function(event) {
    // Check if the key pressed is 'e' or 'E'
    if (event.key === 'e' || event.key === 'E') {
        event.preventDefault(); // Prevent the 'e' from being entered
    }
});

inputNumber.addEventListener('input', ()=>{
    if (inputNumber.value.length < 11){
        spanNumberError.style.display = 'inline-block';
        submitBtn.style.backgroundColor = "rgb(113 113 113)";
        submitBtn.style.cursor = 'default';
        submitBtn.setAttribute('disabled', ' true');
    }   else {
        spanNumberError.style.display = 'none';
        submitBtn.style.backgroundColor = 'var(--purple)';
        submitBtn.style.cursor = "pointer";
        submitBtn.removeAttribute('disabled')
    }
})

submitBtn.addEventListener('click' , ()=>{
    inputNumber.style.display = 'none';
    submitBtn.style.display = "none"
    submitCodeBtn.style.display = "block";
    submitCode.style.display = 'block';
    label.innerHTML = "کد تایید";
    timer.style.display = "block";
    // Set the starting time (59 seconds)
    let timeLeft = 59;

// Update the countdown every 1 second
    const countdownTimer = setInterval(function() {
        // Calculate minutes and seconds
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        // Add a leading zero to seconds if less than 10
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // Display the result in the format MM:SS
        timer.innerHTML = `00:${seconds}`;

        // Decrement the time left
        timeLeft--;

        // If the countdown reaches zero, stop the interval
        if (timeLeft < 0) {
            clearInterval(countdownTimer);
            timer.innerHTML = "00:00";
        }
    }, 1000);
})

submitCodeBtn.addEventListener('click',()=>{
    loginText.innerHTML = "از کجا با ما آشنا شدید؟!"
    submitCodeBtn.style.display = 'none'
    submitCode.style.display = "none"
    timer.style.display = 'none'
    label.style.display = 'none'
    loginSpan.style.display = 'none'
    visitorHead.style.display = "block"
})


