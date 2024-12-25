import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Doctor } from '../assets/types';
import { EditDoctorPopup } from './EditDoctorPopup';
import { DeleteEmployeePopup } from './DeleteEmployeePopup';
import { deleteDoctor } from '../store/slices/doctorSlice';
import { RootState } from '../store';


const DoctorTable: React.FC = () => {
  const { doctors } = useSelector((state: RootState) => state.doctors);
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentDoctor, setCurrentDoctor] = useState({} as Doctor);

  const handleDeleteDoctor = useCallback((id: number) => {
    dispatch(deleteDoctor(id));
  }, [dispatch]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ФИО</th>
          <th scope="col">Отделение</th>
          <th scope="col">Заведующий</th>
          <th scope="col">Изменить</th>
        </tr>
      </thead>
      <tbody style={{borderTopWidth: 2}}>
        {doctors.map((doctor: Doctor) => (
          <tr key={doctor.id}>
            <td>{doctor.fullname}</td>
            <td>{doctor.department}</td>
            <td>{doctor.isHead ? 'Да' : 'Нет'}</td>
            <td>
                <button 
                  onClick={() => { setShowDeleteModal(true); setCurrentDoctor(doctor)}} 
                  className="btn btn-danger" 
                  style={{marginRight: 10}}
                >
                  Удалить
                </button>
                <DeleteEmployeePopup
                  showModal={showDeleteModal}
                  deleteEmployee={handleDeleteDoctor}
                  employee={currentDoctor}
                  handleClose={() => setShowDeleteModal(false)}
                />
                <button
                  onClick={() => { setShowEditModal(true); setCurrentDoctor(doctor)}} 
                  className="btn btn-warning"
                >
                  Редактировать
                </button>
                <EditDoctorPopup
                  showModal={showEditModal}
                  doctor={currentDoctor}
                  handleClose={() => setShowEditModal(false)}
                />
              </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DoctorTable;
