window.onload = function () {
    const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
            const domContentLoadedTime =
                entry.loadEventEnd - entry.fetchStart;
            console.log(
                `${entry.name}: DOMContentLoaded processing time: ${domContentLoadedTime}ms`,
            );
            const statel = document.getElementById("load__stat")
            if (statel) {
                statel.innerText = `Load time: ${domContentLoadedTime}ms`
            }
        });
    });
    observer.observe({type: "navigation", buffered: true});
}




