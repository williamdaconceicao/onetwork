import React, { Component } from 'react';
import './AddEmployee.css';
import Select from 'react-select';
import data from '../assets/data.json';

const fs = require('fs');

const options = [
  { value: 'cariste', label: 'Cariste' },
  { value: 'manutentionnaire', label: 'Manutentionnare' },
  { value: 'administratif', label: 'Administratif' }
];

class AddEmployee extends Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }
  submitFormHandler = event => {
    event.preventDefault();
    const valueSubmited = {
      name: this.refs.name.value,
      firstname: this.refs.firstname.value,
      number: this.refs.phone.value,
      poste: this.state.selectedOption.value,
    }
    console.log(valueSubmited);
    //fs.writeFileSync('../assets/data.json', JSON.stringify(valueSubmited,null,2));
  }
  render() {
    return (
      <div className="AddEmployee">
        <form onSubmit={this.submitFormHandler}>
          <label>
            Nom:
            <input type="text" ref="name"/>
          </label><br/>
          <label>
            Prénom:
            <input type="text" ref="firstname"/>
          </label><br/>
          <label>
            Téléphone:
            <input type="number" ref="phone" />
          </label><br/>
          <label>
            Poste:
            <Select
              value={this.state.selectedOption}
              onChange={this.handleChange}
              options={options}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddEmployee;
