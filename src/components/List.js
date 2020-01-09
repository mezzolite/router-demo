import React, { Component } from 'react';

import { Redirect, withRouter } from 'react-router-dom'

class List extends Component {

    state = {
        toAbout: false
    }

    redirectToAbout = () =>{
      this.setState({toAbout: true})
    }

    handleHistory = () => {
        this.props.history.push('/')
    }

    render() {
        
        if(this.state.toAbout) {
          return  <Redirect to="/about" />
        }

        const animalList = this.props.animalList.map((animal, idx) => {
            return <h1 key={idx}>{animal}</h1>
        })

        return (
            <div className="list">
                {animalList}

                <button onClick={this.redirectToAbout}>Redirect Component Button</button>

                <button onClick={this.handleHistory}>History Push Button</button>
            </div >

        );
    }
}

export default withRouter(List);