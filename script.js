const checkbox = document.querySelector('.checkbox');
const toggle = document.querySelector('.toggle');
const switcher = document.querySelector('.switch');
const price = document.querySelector('.price');
const duration = document.querySelector('.duration');
const slider = document.querySelector('.slider');
const progressBar = document.querySelector('.progress-bar');
const pageviews = document.querySelector('.pageviews');

const priceParsed = parseInt(price.innerText.replace(/^\D+/g, ''));
let priceValue = priceParsed;

slider.oninput = () => {
    progressBar.style.width = `${slider.value * 25}%`;

    let sliderValue = slider.value;
    let pageviewsValue = '';

    if(sliderValue === '0'){
        pageviewsValue = '10K';
        priceValue = 8;
    } else if(sliderValue === '1'){
        pageviewsValue = '50K';
        priceValue = 12;
    } else if(sliderValue === '2'){
        pageviewsValue = '100K';
        priceValue = 16;
    } else if(sliderValue === '3'){
        pageviewsValue = '500K';
        priceValue = 24;
    } else {
        pageviewsValue = '1M';
        priceValue = 32;
    }

    updateCard(pageviewsValue, priceValue);
}

const updateCard = ((pageview, prices) => {
    pageviews.innerText = `${pageview} PAGEVIEWS`;
    if(checkbox.checked) {
        price.innerText = `$${(priceValue - (priceValue * .25)) * 12}.00`
    } else {
        price.innerText = `$${prices}.00`;
    }
})

const onChange = () => {
    if(checkbox.checked) {
        duration.innerText = `/ year`;
        price.innerText = `$${(priceValue - (priceValue * .25)) * 12}.00`
        switcher.style.backgroundColor = 'hsl(174, 77%, 80%)';
        toggle.style.transform = 'translateX(18px)';
        checkbox.style.transform = 'translateX(18px)';
    } else {
        duration.innerText = `/ month`;
        price.innerText = `$${priceValue}.00`
        switcher.style.backgroundColor = 'hsl(223, 50%, 87%)';
        toggle.style.transform = 'translateX(0px)';
        checkbox.style.transform = 'translateX(0px)';
    }
}

checkbox.addEventListener('click', onChange);