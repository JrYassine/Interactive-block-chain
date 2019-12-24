import React, { Component } from 'react'
import './BlockChain.css'
import {Button} from 'react-bootstrap'


class BlockChain extends Component{
    render(){
        return (
             <div className="block">
                 <div className="header-block">
                    <Button className="btn btn-danger btn-sm" style=
                    {{marginLeft:"270px",padding:"0 0 0 4"}}
                     >X</Button>
             </div>
          
            <Button className="col-10 mb-4 ml-4" style={{backgroundColor:"red"}}>SHA256</Button>
            <br/>
            <Button className="col-10 mb-4 ml-4" style={{backgroundColor:"purple"}}>DATA</Button>
            <br/>
            <Button className="col-10 mb-4 ml-4" style={{backgroundColor:"green"}}> POW</Button>
            <br/>
            <Button className="col-10 mb-4 ml-4">previous SHA256 block</Button>
                
            </div>
            
        );
    }
}

export default BlockChain;