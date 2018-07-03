import React from 'react';
import DoctorListItem from './DoctorListItem.jsx';

const SelectedDoctor = ({doctor, relatedDoctors, handleSelect}) => {
  console.log('related doctors ->', relatedDoctors)
  return ( 
  <div>
    <div onClick={() => {handleSelect(null)}}> X </div>
    <div>
     <DoctorListItem doctor={doctor}/>
    </div>
    <div>
      <div>Related Doctors</div>
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