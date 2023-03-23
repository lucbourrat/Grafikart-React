let n = 0;

function numberFormat(n) {
    return n.toString().padStart(2, '0');
}

function render() {
    // const title = <h1>
    //     Bonjour les gens <span>{n % 2 ? numberFormat(n) : null}</span>
    // </h1>

    // const title = <h1>
    //     Bonjour les gens <span>{['azeaze', '=azeaze']}</span>
    // </h1>

    // const title = <h1 className="title" id={"title" + n}>
    //     Bonjour les gens <span>{['azeaze', '=azeaze']}</span>
    // </h1>


    const items = [
        'Tache 1',
        'Tache 2',
        'Tache 3'
    ]
    
    // const lis = items.map(item => <li>{item}</li>);
    const lis = items.map((item, k) => <li key={k}>{item}</li>);

    const title = <React.Fragment>
        <h1 className="title" id="title">
            Bonjour les gens <span>{n}</span>
        </h1>
        <ul>{lis}</ul>
    </React.Fragment>

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