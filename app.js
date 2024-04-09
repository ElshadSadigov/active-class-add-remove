const list = document.querySelectorAll('.list')

list.forEach(e => {
    e.addEventListener('click', () => {
        if (!e.classList.contains('active')) {
            removeActiveClasses();
            e.classList.add('active');
        } else {
            e.classList.remove('active');
        }
    })
})

function removeActiveClasses() {
    list.forEach((item) => {
        item.classList.remove('active');
    });
}

document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('list')) {
        removeActiveClasses();
    }
});