const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

const searchTask = (e) => {
    const serachText = e.target.value.toLowerCase()
    let tasks = [...liElements];
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(serachText))
    ul.textContent = '';
    tasks.forEach(li => ul.appendChild(li))
}


input.addEventListener('input', searchTask);