const toggle = document.getElementById('toggle');
const items = document.getElementById('items');

toggle.onclick = () => {
    items.classList.toggle('open');
    toggle.classList.toggle('close');
}
