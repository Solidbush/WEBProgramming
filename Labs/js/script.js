window.onload = function () {
    const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
            const domContentLoadedTime =
                entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart;
            console.log(
                `${entry.name}: DOMContentLoaded processing time: ${domContentLoadedTime}ms`,
            );
            const statel = document.getElementById("load__stat")
            if (statel) {
                statel.innerText = `DOMContentLoaded processing time: ${domContentLoadedTime}s`
            }
        });
    });
    observer.observe({type: "navigation", buffered: true});
}




