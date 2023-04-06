function WelcomeFunc({name, children}) {
    return <div>
        <h1>Bonjour {name}</h1>
        <p>
            {children}
        </p>
    </div>
}

class Welcome extends React.Component {

    // constructor  (props) {
    //     super(props)
    //     console.log(props)
    // }

    render() {
        // console.log(this.props)
        return <div>
            <h1>Bonjour {this.props.name}</h1>
            <p>
                {this.props.children}
            </p>
        </div>
    }
}

class Clock extends React.Component {

    constructor (props) {
        super(props)
        this.state = {date: new Date()}
        this.timer = null
    }

    componentDidMount () {
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }

    componentWillUnmount () {
        window.clearInterval(this.timer)
    }

    tick () {
        this.setState({date: new Date()})
    }

    render () {
        return <div>
            Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
        </div>
    }
}

class Incrementer extends React.Component {

    static defaultProps = {
        start: 0,
        step: 1
    }
    
    constructor (props) {
        super(props)
        this.state = {n: props.start}
        this.timer = null
    }

    componentDidMount () {
        window.setInterval(this.increment.bind(this), 1000)
    }

    componentWillUnmount () {
        window.clearInterval(this.timer)
    }

    increment () {
        this.setState(function (state, props) {
            return {n: state.n + props.step}
        })
    }

    render () {
        return <div>Valeur : {this.state.n}</div>
    }
}

class MunualIncrementer extends React.Component {
    
    constructor (props) {
        super(props)
        this.state = {n: 0}
    }

    increment (e) {
        console.log(e)
        // e n'est pas un "mouse click" comme avec JS, mais un SyntheticEvent (voir doc React)
        e.preventDefault()
        this.setState(function (state, props) {
            return {n: this.state.n + 1}
        })
    }

    render () {
        return <div>
            Valeur : {this.state.n} 
            <button onClick={this.increment.bind(this)}>Incrémenter</button>
        </div>
    }
}

class IncrementerPauseButton extends React.Component {

    static defaultProps = {
        start: 0,
        step: 1
    }
    
    constructor (props) {
        super(props)
        this.state = {n: props.start, timer: null}
    }

    componentDidMount () {
        this.play()
    }

    componentWillUnmount () {
        window.clearInterval(this.state.timer)
    }

    increment () {
        this.setState(function (state, props) {
            return {n: state.n + props.step}
        })
    }

    pause () {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: null
        })
    }

    play () {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: window.setInterval(this.increment.bind(this), 1000)
        })
    }

    toggle () {
        return this.state.timer ? 
            this.pause() :
            this.play()
    }

    label () {
        return this.state.timer ? 
            "Pause" :
            "Lecture"
    }

    reset () {
        this.pause()
        this.play()
        this.setState(function (state, props) {
            return {n: props.start}
        })
    }

    render () {
        return <div>
            Valeur : {this.state.n} 
            <button onClick={this.toggle.bind(this)}>{this.label()}</button>
            <button onClick={this.reset.bind(this)}>Réinitialiser</button>
        </div>
    }
}

function Home() {
    return <div>
        <Welcome name="Dorothée" />
        <Welcome name="Jean" />
        <Clock />
        <Incrementer />
        <Incrementer start={10}/>
        <Incrementer start={100} step={10}/>
        <MunualIncrementer />
        <IncrementerPauseButton />
    </div>
}

ReactDOM.render(<Home/>, document.querySelector('#app'))