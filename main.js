// show and hide show more/less in About
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})




// add/remove active class on Nav items
const navItems = menu.querySelectorAll('li');
const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
}
navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active');
    })
})





// read more about
const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');
readMoreBtn.addEventListener('click', () => {
    readMoreContent.classList.toggle('show-content');
    if(readMoreContent.classList.contains('show-content')){
        readMoreBtn.textContent = "Show less";
    } else {
        readMoreBtn.textContent = "Show more";
    }
})





// Show and hide skill items
// const skillItems = document.querySelectorAll('section.skills .skill');
// skillItems.forEach(skill => {
//     skill.querySelector('.head').addEventListener('click', () => {
//         skill.querySelector('.items').classList.toggle('show-items');
//     })
// })

const skillItems = document.querySelectorAll('section.skills .skill');
skillItems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click', () => {
        skill.querySelector('.items').classList.toggle('show-items');
    })
})

const skillIcons = document.querySelectorAll('section.landing .outer-circle a');
skillIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        if (icon.classList.contains('technologies')) {
            document.querySelector('section.skills .technologies .items').classList.toggle('show-items');
        } else if (icon.classList.contains('business-and-finance')) {
            document.querySelector('section.skills .business-and-finance .items').classList.toggle('show-items');
        } else if (icon.classList.contains('interests')) {
            document.querySelector('section.skills .interests .items').classList.toggle('show-items');
        } else if (icon.classList.contains('career')) {
            document.querySelector('section.skills .career .items').classList.toggle('show-items');
        }
    })
})














// add box shadow on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY > 0);
})