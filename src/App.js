import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar'
import {Spinner} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import './App.css'
import BlockChain from './blockchain/BlockChain'
import './blockchain/BlockChain.css'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      spinFinish:false,
      newBlock : false,
      blockChains : []
    }

  }

  

  spinLoading = () => {
    setTimeout(() => { 
      this.setState({
        newBlock: false,
        spinFinish:true
      })
    }, 500);
    
    return <Spinner 
            className="spinner" animation="border" variant="danger" style={{width:"100px",height:"100px"}}> 
              <span className="sr-only">Loading...</span>
          </Spinner>
    

  }

  handleCreateBlockChain = () =>{
    if(this.state.blockChains.length==0){
      this.setState({
        newBlock:true,
        blockChains : [{id:0}],
        spinFinish:false
      })
    }else{
      const newId = this.state.blockChains[this.state.blockChains.length-1].id+1
      const newBlockChains = [...this.state.blockChains,{id:newId}]
      this.setState({
        newBlock:true,
        blockChains : newBlockChains,
        spinFinish : false
      })

    }

  }
  render(){
      return (
        <div className="App">
          <h1 style={{textAlign:"center",backgroundColor:"azure",color:"blue"}}>How blockchain works ?</h1> 
          <Sidebar blockChainFunction = {this.handleCreateBlockChain}/>

          {this.state.newBlock && this.spinLoading()}
          {this.state.spinFinish && <div className="blockChain">
            {
                    this.state.blockChains.map((blockchain) => (
                      
                      <BlockChain key={blockchain.id} id= {blockchain.id}/>
                    ))
            }
          </div> }
        </div>
      );
  }
}

export default App;
