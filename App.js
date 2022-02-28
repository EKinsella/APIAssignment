import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import App from './index.js';

function TableHeader(){
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Height</th>
        <th>Mass</th>
        <th>Created</th>
        <th>Edited</th>
        <th>Homeworld</th>
      </tr>
    </thead>
  );
}

function PersonTable (props){
  const personData = props.personData;
  
  return (
    <tbody>
    {personData.map((row, index) =>
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.height}</td>
        <td>{row.mass}</td>
        <td>{row.created}</td>
        <td>{row.edited}</td>
        <td>{row.homeworld}</td>
      </tr>)}
  </tbody>
  );
}

class Table extends React.Component 
{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      characters: []
    };
  }

  fetchData = async () => {
    const peopleURL = 'https://swapi.dev/api/people/';
    const peopleResponse = await axios.get(peopleURL);

    for (const character of peopleResponse.data.results) {
      const homeworld_url = character.homeworld.replace("http", "https");

      const homeWorldResponse = await axios.get(homeworld_url);

      character.homeworld = homeWorldResponse.data.name;
      console.log(character);
      this.setState({ characters: peopleResponse.data.results });
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  render() 
  {
    const {personData} = this.props;
    return (
      <div className="container">
        <table>
          <TableHeader/>
          <PersonTable personData={personData} />
        </table>
      </div>
    );
  }
}

export default Table;