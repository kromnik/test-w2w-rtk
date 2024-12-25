import React, { useEffect, useState } from "react";
import { Department, Doctor, Nurse } from "../assets/types";

interface DeleteEmployeeFormProps {
  deleteEmployee: (id: number) => void;
  employee: Partial<Doctor> & Nurse;
  showModal: boolean;
  handleClose: () => void;
}

export const DeleteEmployeePopup: React.FC<DeleteEmployeeFormProps> = ({
  deleteEmployee,
  employee,
  showModal,
  handleClose,
}) => {
  const [fullname, setFullname] = useState("");
  const [department, setDepartment] = useState<Department>(
    Department.Cardiology
  );

  useEffect(() => {
    setFullname(employee.fullname);
    setDepartment(employee.department);
  }, [employee]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const employeeDelete: Partial<Doctor> & Nurse = {
      id: employee.id,
      fullname,
      department,
    };
    console.log(employeeDelete);
    deleteEmployee(employeeDelete.id);
    setFullname("");
    setDepartment(Department.Cardiology);
    handleClose();
  };

  return (
    <div className={`modal ${showModal ? "d-block" : "d-none"}`} tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Удалить сотрудника?</h5>
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
                  placeholder={fullname}
                />
              </div>
              <div className="form-group">
                <label htmlFor="dataInput">Отделение</label>
                <input
                  type="text"
                  className="form-control"
                  id="dataInput"
                  placeholder={department}
                />
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
              <button type="submit" className="btn btn-danger">
                Удалить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
