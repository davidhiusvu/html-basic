const categoryLinks = document.querySelectorAll('.sidebar_menu a');
        
const productBlocks = document.querySelectorAll('.block_menu_item');

categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        categoryLinks.forEach(link => link.classList.remove('active'));
        
        link.classList.add('active');
        
        const category = link.getAttribute('data-category');
        
        productBlocks.forEach(block => {
            if (category === 'all' || block.classList.contains(category)) {
                block.style.display = 'block';
            } else {
                block.style.display = 'none';
            }
        });
    });
});