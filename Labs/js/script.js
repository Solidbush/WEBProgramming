window.onload = function () {
    const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
            const domContentLoadedTime =
                entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart;
            console.log(
                `${entry.name}: DOMContentLoaded processing time: ${domContentLoadedTime}ms`,
            );
            const statel = document.getElementById("load__stat")
            if (statel){
                statel.innerText = `DOMContentLoaded processing time: ${domContentLoadedTime}ms`
            }
        });
    });
    observer.observe({ type: "navigation", buffered: true });
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('login__button').onclick = function() {
        window.location.href = 'http://localhost:63342/WebProject/LoginPage/index.html?_ijt=79nr3orggjanq9fd6og2h8jd7j';
    };
})




