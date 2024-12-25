import React, { useState } from "react";
import NursesTable from "../components/NursesTable";
import AddNursePopup from "../components/AddNursePopup";

const NursesPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <h1>Медсестры</h1>
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-primary"
      >
        Добавить сотрудника
      </button>
      <AddNursePopup
        showModal={showModal}
        handleClose={() => setShowModal(false)} 
      />
      <NursesTable />
    </div>
  );
};

export default NursesPage;
