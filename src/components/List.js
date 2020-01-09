import React, { Component } from 'react';

import { Redirect, withRouter } from 'react-router-dom'

class List extends Component {

    render() {
        // console.log("history props", this.props.history)

        const animalList = this.props.list.list.map((animal, idx) => {
            return <h1 key={idx}>{animal}</h1>
        })
        return (
            <div className="list">
                {animalList}

                <button>Redirect Component Button</button>

                <button>History Push Button</button>
            </div >

        );
    }
}

export default List;