// acordeon.js
export function initializeAcordeon() {
    //////////////ACORDEON/////////////
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const downIcon = item.querySelector('.icon[name="down"]');
        const upIcon = item.querySelector('.icon[name="up"]');
        const hiddenBox = item.querySelector('.hidden-box');
        const numero = item.querySelector('.numero');
        const texto = item.querySelector('.texto');

        downIcon.addEventListener('click', function() {
            closeAllItems();
            openItem(item);
        });

        upIcon.addEventListener('click', function() {
            closeItem(item);
        });

        numero.addEventListener('click', function() {
            if (!item.classList.contains('open')) {
                closeAllItems();
                openItem(item);
            }else{
                closeItem(item);
            }
        });

        texto.addEventListener('click', function() {
            if (!item.classList.contains('open')) {
                closeAllItems();
                openItem(item);
            }else{
                closeItem(item);
            }
            
        });
    });

    function closeAllItems() {
        items.forEach(item => {
            closeItem(item);
        });
    }

    function openItem(item) {
        item.classList.add('open');
        const downIcon = item.querySelector('.icon[name="down"]');
        const upIcon = item.querySelector('.icon[name="up"]');
        const hiddenBox = item.querySelector('.hidden-box');

        downIcon.style.display = 'none';
        upIcon.style.display = 'block';
        hiddenBox.style.display = 'block';
    }

    function closeItem(item) {
        item.classList.remove('open');
        const downIcon = item.querySelector('.icon[name="down"]');
        const upIcon = item.querySelector('.icon[name="up"]');
        const hiddenBox = item.querySelector('.hidden-box');

        downIcon.style.display = 'block';
        upIcon.style.display = 'none';
        hiddenBox.style.display = 'none';
    }
}
