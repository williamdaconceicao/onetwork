import React, { Component } from 'react';
import data from '../assets/data.json';
 
class show extends Component {
	constructor (props) {
  	super(props)
    
    this.json = {}
  }
  
  componentWillMount () {
    this.loadJson()
  }
 
  validateJson (json) {
    let validJson
    
    try{
      validJson = JSON.stringify(JSON.parse(this.state.json), null, 2);
    } catch(e) {
      throw e
    }
    
    return validJson
  }
  
  loadJson = () => {
    const json = JSON.stringify(data, null, 2)
    this.setState({ json })
  }
  
  saveJson = () => {
    const validJson = this.validateJson(this.state.json)
    
    if (!validJson) return;
    
    window.localStorage.setItem(
      validJson
    )
  }
  
  handleChange = e => this.setState({
    json: e.target.value
  })
  
  render () {
    return (
      <div style={{marginTop: '50px'}}>
        <textarea onChange={this.handleChange} value={this.state.json} />
        <button onClick={this.saveJson}>SAVE to LocalStorage</button> 
        <button onClick={this.loadJson}>LOAD from LocalStorage</button>
        <p>save/load JSON data via a React Component</p>
      </div>
    )
  }
}
export default show;