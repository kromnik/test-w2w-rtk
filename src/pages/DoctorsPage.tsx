import React, { useState } from "react";
import DoctorsTable from "../components/DoctorsTable";
import AddDoctorPopup from "../components/AddDoctorPopup";

const DoctorsPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <h1>Врачи</h1>
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-primary"
      >
        Добавить сотрудника
      </button>
      <AddDoctorPopup
        showModal={showModal}
        handleClose={() => setShowModal(false)} 
      />
      <DoctorsTable />
    </div>
  );
};

export default DoctorsPage;
