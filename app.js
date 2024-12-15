async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data 
}

function renderData(obj) {
    const dl = document.getElementById('dl')
    for (let key in obj) {
        const dt = document.createElement('dt');
        dt.textContent = key;
        dl.append(dt);
        if (typeof obj[key] === 'object') {
            renderData(obj[key]);
        } else {
            const dd = document.createElement('dd');
            dd.textContent = obj[key];
            dl.append(dd);
        }
    }
}

function renderArrayData(data) {
    data.forEach(obj => {
        renderData(obj);
    });
}

async function init(){
    const data = await getData()
    renderArrayData(data)
}

const button = document.getElementById('button')
button.addEventListener('click', init)