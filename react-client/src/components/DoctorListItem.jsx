import React from 'react';

const DoctorListItem = ({doctor}) => {
  console.log(doctor)
  return <div>
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
      Practice Area: {doctor.area}
    </div>
  </div>

}

export default DoctorListItem;