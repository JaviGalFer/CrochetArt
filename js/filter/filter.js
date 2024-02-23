// filter.js
export function initializeFilter() {
    // FILTROOO
    const items2 = document.querySelectorAll('.shop');
    console.log(items2);
    const filterButtons = document.querySelectorAll('.filter-button');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');
            console.log(filter);

            // Agrega y quita la clase active para resaltar el botón seleccionado
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            items2.forEach(item => {
                // if (filter === 'all' || item.classList.contains(filter)) {
                //     item.style.display = 'block';
                // } else {
                //     item.style.display = 'none';
                // }
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}
