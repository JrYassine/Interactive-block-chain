import React, { Component } from 'react'
import {Button,ButtonGroup} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import './Sidebar.css'



class Sidebar extends Component{

    render(){
        return(
            <React.Fragment>
                <div className="d-flex flex-column">
                    <ButtonGroup className="button-group">
                        <Button className="create-button" onClick={this.props.blockChainFunction}>Mine a block</Button>
                    </ButtonGroup>
                </div>
            </React.Fragment>
        );
    }
}

export default Sidebar;