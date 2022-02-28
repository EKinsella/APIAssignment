import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
//import {render} from 'react-dom';
//<script type="module" src="milsymbol-2.0.0/src/milsymbol.js"></script>

//import App from './app';

//const rootElement = document.getElementById("root");
class App extends Component{
  constructor(){
    super();
    this.state = {
      name:'React';
    };
  }

  ReactDOM.render(
    <div>  
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </div>
  //,
  //rootElement
  );
}
render(<App />, document.getElementById("root"));