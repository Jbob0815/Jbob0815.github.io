const primaryNav = document.querySelector('#primary-nav');
const navToggle = document.querySelector('.nav-toggle');

navToggle.onclick = () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if(visibility === 'false'){
        console.log('false')
        primaryNav.setAttribute('data-visible','true')
    } else if (visibility === 'true'){
        primaryNav.setAttribute('data-visible', 'false')
    }
};