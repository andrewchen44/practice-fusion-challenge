import React from 'react';

const DoctorListItem = ({doctor}) => {
  return <div className='doctor_list_item container'>
    <div>
      {doctor.name}
    </div>
    <div>
      Rating: {doctor.rating}
    </div>
    <div>
      Specialty: {doctor.specialty}
    </div>
    <div>
      Location: {doctor.area}
    </div>
  </div>

}

export default DoctorListItem;