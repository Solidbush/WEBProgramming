window.onload = function () {
    let hrefList = document.querySelectorAll('nav > a')
    hrefList.forEach((element) => {
        if (document.location.href === element.href) {
            let el = document.getElementById(element.id);
            el.setAttribute('style', 'background: darkmagenta;')
        }
        console.log(element.href)
    })
}
