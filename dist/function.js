/*!
 * Function JavaScript Library v1.0
 * https://sayandey.dev/
 * Released under the GPLv3 license
 * Date: 2022-06-18
 */

// Dark & Light mode
const changeTheme = document.getElementById('theme-button');

changeTheme.addEventListener('change', () => {
    document.body.classList.toggle('light-theme');
});

// Scroll to active link
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Modal close function
const closeBtn = document.querySelectorAll('.close-modal')

// Success modal close
function closeModalS() {
    const modalContainer = document.getElementById('modal-failed')
    modalContainer.classList.remove('show-modal')
}
closeBtn.forEach(c => c.addEventListener('click', closeModalS))

// Failed modal close
function closeModalF() {
    const modalContainer = document.getElementById('modal-success')
    modalContainer.classList.remove('show-modal')
}
closeBtn.forEach(c => c.addEventListener('click', closeModalF))

// Work section
const tabs = document.querySelectorAll(".work__container .company__btn");
const contents = document.querySelectorAll(".work__container  .tab__data");

const removeActiveClass = () => {
    tabs.forEach((t) => {
        t.classList.remove("active");
    });

    contents.forEach((c) => {
        c.classList.remove("active");
    });
};

tabs.forEach((t, i) => {
    t.addEventListener("click", () => {
        removeActiveClass();
        contents[i].classList.add("active");
        t.classList.add("active");
    });
});