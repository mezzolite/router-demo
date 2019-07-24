import React, { Component } from 'react';

import { Redirect, withRouter } from 'react-router-dom'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toHome: false
        }
    }

    handleRedirect = () => {
        this.setState({
            toHome: true
        })
    }

    handleHistoryPush = () => {
        this.props.history.push("/")
    }



    render() {
        console.log("history props", this.props.history)
        if (this.state.toHome === true) {
            return <Redirect to="/" />
        }

        const animalList = this.props.list.list.map((animal, idx) => {
            return <h1 key={ idx }>{ animal }</h1>
        })
        return (
            <div className="list">
                { animalList }

                <button onClick={ this.handleRedirect }>Redirect Component Button</button>

                <button onClick={ this.handleHistoryPush }>History Push Button</button>
            </div >

        );
    }
}

export default List;