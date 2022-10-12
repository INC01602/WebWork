import React, { Component } from 'react'
import ChildContext from './ChildContext'
import UserContext from './userContext'

class ParentLvl2 extends Component {
    // static contextType = UserContext;
    render() {
        return (
        <div>
            <ChildContext />
            <br />
            <br />
            This is rendered by using ContextType, Did you understand, {JSON.parse(this.context).userName} ?
        </div>
        )
    }

}

ParentLvl2.contextType = UserContext;

export default ParentLvl2