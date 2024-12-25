import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { Nurse } from "../assets/types";
import { EditNursePopup } from "./EditNursePopup";
import { DeleteEmployeePopup } from "./DeleteEmployeePopup";
import { deleteNurse } from "../store/slices/nurseSlice";


const NurseTable: React.FC = () => {
  const { nurses } = useSelector((state: RootState) => state.nurses);
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentNurse, setCurrentNurse] = useState({} as Nurse);

  const handleDeleteNurse = useCallback((id: number) => {
    dispatch(deleteNurse(id));
  }, [dispatch]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ФИО</th>
          <th scope="col">Отделение</th>
          <th scope="col">Изменить</th>
        </tr>
      </thead>
      <tbody style={{borderTopWidth: 2}}>
        {nurses.map((nurse: Nurse) => (
          <tr key={nurse.id}>
            <td>{nurse.fullname}</td>
            <td>{nurse.department}</td>
            <td>
              <button
                onClick={() => {
                  setShowDeleteModal(true);
                  setCurrentNurse(nurse);
                }}
                className="btn btn-danger"
                style={{ marginRight: 10 }}
              >
                Удалить
              </button>
              <DeleteEmployeePopup
                showModal={showDeleteModal}
                deleteEmployee={handleDeleteNurse}
                employee={currentNurse}
                handleClose={() => setShowDeleteModal(false)}
              />
              <button
                onClick={() => {
                  setShowEditModal(true);
                  setCurrentNurse(nurse);
                }}
                className="btn btn-warning"
              >
                Редактировать
              </button>
              <EditNursePopup
                showModal={showEditModal}
                nurse={currentNurse}
                handleClose={() => setShowEditModal(false)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NurseTable;
