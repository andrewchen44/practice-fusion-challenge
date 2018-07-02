import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import DoctorList from './components/DoctorList.jsx';
import SelectedDoctor from './components/SelectedDoctor.jsx';

const store = createStore(app);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      allDoctors: [],
      selected: null,
      relatedDoctors: []
    }
  }

  render () {
    const content = selected === null ? <DoctorList doctors={this.state.doctors}/> : <SelectedDoctor doctor={this.state.doctor} relatedDoctors={this.state.relatedDoctors} />
    return (<div>
        {content}
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));