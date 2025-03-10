function resizeItems() {
    var owlItems = document.querySelectorAll('.owl-item');
    var windowWidth = window.innerWidth;

    owlItems.forEach(function (item) {
        item.style.width = windowWidth + "px";
        console.log(windowWidth);
    });
}

window.addEventListener('resize', resizeItems);

resizeItems();