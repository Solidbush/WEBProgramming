const courses_page = "https://solidbush.github.io/WebProgramming/CoursesPage/index.html";
const main_page = "https://solidbush.github.io/WebProgramming/Labs/index.html";
const reviews_page = "https://solidbush.github.io/WebProgramming/Reviews/index.html"

window.onload = function () {
    if (courses_page === document.location.href) {
        let el = document.getElementById('all_courses');
        el.setAttribute('style', 'background: darkmagenta;')
    }
    if (main_page === document.location.href) {
        let el = document.getElementById('main_page');
        el.setAttribute('style', 'background: darkmagenta;')
    }
    if (reviews_page === document.location.href) {
        let el = document.getElementById('reviews');
        el.setAttribute('style', 'background: darkmagenta;')
    }
}
