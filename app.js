let n = 0;

function render() {
    const title = React.createElement('h1', {}, 
        'Bonjour tout le monde ', 
        React.createElement('span', {}, n)
    );

    ReactDOM.render(title, document.querySelector('#app'));
}

function render2() {
    document.querySelector('#app').innerHTML = `<h1>Bonjour tout le monde <span>${n}</span></h1>`;
}

render();

window.setInterval(() => {
    n++;
    render()
}, 1000)