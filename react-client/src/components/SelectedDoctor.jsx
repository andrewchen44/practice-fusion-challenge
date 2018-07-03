import React from 'react';
import DoctorListItem from './DoctorListItem.jsx';

const SelectedDoctor = ({doctor, relatedDoctors, handleSelect}) => {
  return ( 
  <div className='container'>
    <div onClick={() => {handleSelect(null)}}> X </div>
    <div>
     <DoctorListItem doctor={doctor}/>
    </div>
    <div>
      <h4>Related Doctors</h4>
      {relatedDoctors.map((relatedDoctor) => {
        return <div key={relatedDoctor.name}>
          <DoctorListItem doctor={relatedDoctor}/>
        </div>
      })}
    </div>
  </div>
  )
}

export default SelectedDoctor;