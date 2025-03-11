const categoryLinks = document.querySelectorAll('.sidebar_menu a');
const productBlocks = document.querySelectorAll('.block_menu_item');
const selectElement = document.getElementById('select');

// Function to filter products based on the selected category
function filterProducts(category) {
    productBlocks.forEach(block => {
        if (category === 'all' || block.classList.contains(category)) {
            block.style.display = 'block';
        } else {
            block.style.display = 'none';
        }
    });
}

// Handle category link click
categoryLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        categoryLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');

        const category = link.getAttribute('data-category');
        filterProducts(category);
    });
});

// Handle select option change
if (selectElement) {
    selectElement.addEventListener('change', function () {
        const category = selectElement.value;
        filterProducts(category);
    });
}

// Hamburger menu toggle functionality
const hamburger = document.getElementById("hamburger-icon");
const mobileMenu = document.getElementById("mobile-toggle");
const closeButton = document.querySelector(".navbar-toggle");
const body = document.body;

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

closeButton.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

body.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        mobileMenu.classList.remove("active");
    }
});
