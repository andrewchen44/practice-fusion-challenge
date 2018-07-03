import React from 'react';
import ReactDOM from 'react-dom';
import DoctorList from './components/DoctorList.jsx';
import SelectedDoctor from './components/SelectedDoctor.jsx';

const doctors = [
  {name: 'Andrew C.', specialty: 'Vascular Surgery', area: 'San Francisco', rating: 5, },
  {name: 'Claire G.', specialty: 'Vascular Surgery', area: 'San Jose', rating: 5, },
  {name: 'Lisa T.', specialty: 'Radiology', area: 'San Jose', rating: 4, },
  {name: 'Janet P.', specialty: 'Vascular Surgery', area: 'San Francisco', rating: 3, },
  {name: 'Berry C.', specialty: 'Radiology', area: 'San Francisco', rating: 3, },
  {name: 'George T.', specialty: 'Vascular Surgery', area: 'San Jose', rating: 3, },
  {name: 'Matt D.', specialty: 'Pediatrics', area: 'San Jose', rating: 2, },
  {name: 'John S.', specialty: 'Pediatrics', area: 'San Francisco', rating: 2, },
  {name: 'Mary F.', specialty: 'Radiology', area: 'San Francisco', rating: 2, },
  {name: 'Terry C.', specialty: 'Radiology', area: 'San Jose', rating: 2, },
  {name: 'Bob L.', specialty: 'Pediatrics', area: 'San Francisco', rating: 1, },
  {name: 'Tina E.', specialty: 'Pediatrics', area: 'San Jose', rating: 1, },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      allDoctors: doctors,
      selected: null,
      relatedDoctors: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(e) {
    const filter = e.target.value;
    this.setState({
      allDoctors: this.state.allDoctors.sort((a, b) => {
        if(a[filter] > b[filter]) {
          return -1;
        } else {
          return 1
        }
      })
    })
  }
  
  handleSelect(index) {
    if(index === null) {
      this.setState({
        selected: null
      })
    } else {
      const selected = this.state.allDoctors[index];
      const relatedDoctors = this.state.allDoctors.filter((doctor) => doctor.specialty === selected.specialty && doctor.name !== selected.name).sort((a, b) => {
        return b.rating - a.rating;
      });

      this.setState({
        selected: selected,
        relatedDoctors: relatedDoctors,
      })
    }

  }

  render () {
    const content = this.state.selected === null ? <DoctorList handleSelect={this.handleSelect} handleChange={this.handleChange} doctors={this.state.allDoctors}/> : <SelectedDoctor doctor={this.state.selected} relatedDoctors={this.state.relatedDoctors} handleSelect={this.handleSelect}/>
    return (<div className='app'>
        {content}
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));