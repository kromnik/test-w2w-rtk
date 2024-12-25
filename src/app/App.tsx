import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import Header from "../components/Header";
import Main from "../pages/Main";
import DoctorsPage from "../pages/DoctorsPage";
import NursesPage from "../pages/NursesPage";

const App: React.FC = () => {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container mt-4">
          <Routes>
            <Route path="/" Component={Main} />
            <Route path="/doctors" Component={DoctorsPage} />
            <Route path="/nurses" Component={NursesPage} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
};

export default App;
