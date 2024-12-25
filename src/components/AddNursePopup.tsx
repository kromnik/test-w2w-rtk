import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Nurse, Department } from "../assets/types";
import { addNurse } from "../store/slices/nurseSlice";

interface AddNursePopupProps {
  showModal: boolean;
  handleClose: () => void;
}

const AddNursePopup: React.FC<AddNursePopupProps> = ({
  showModal,
  handleClose,
}) => {
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState("");
  const [department, setDepartment] = useState<Department>(
    Department.Cardiology
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNurse: Nurse = {
      id: Date.now(),
      fullname,
      department,
    };
    dispatch(addNurse(newNurse));
    setFullname("");
    setDepartment(Department.Cardiology);
    handleClose();
  };

  return (
    <div className={`modal ${showModal ? "d-block" : "d-none"}`} tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Добавить сотрудника</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="dataInput">ФИО</label>
                <input
                  type="text"
                  className="form-control"
                  id="dataInput"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="dataInput">Отделение</label>
                <select
                  className="form-select"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value as Department)}
                  required
                >
                  <option value={Department.Cardiology}>
                    {Department.Cardiology}
                  </option>
                  <option value={Department.Surgery}>
                    {Department.Surgery}
                  </option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Отмена
              </button>
              <button type="submit" className="btn btn-primary">
                Добавить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNursePopup;
