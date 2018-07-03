import React from 'react';
import DoctorListItem from './DoctorListItem.jsx';

const DoctorList = ({ doctors, handleChange, handleSelect }) => (
  <div> Browse By 
    <select name="filters" onChange={handleChange}>
      <option value="rating">Rating</option>
      <option value="specialty">Specialty</option>
      <option value="area">Area</option>
    </select>
    <h4> All Doctors </h4>
      {doctors.map((doctor, index) => {
        return (
          <div key={doctor.name} onClick={() => {handleSelect(index)}}>
            <DoctorListItem doctor={doctor}/>
        </div>
        )
      })}
  </div>
)

export default DoctorList;