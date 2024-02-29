import "./App.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";
import Layout from "./hocs/Layout";
import { useState } from 'react';
import UserContext from "./reducers/UserContext"

import Login from "./pages/Login";
import StudentHomePage from "./pages/StudentHomePage";
import ProjectPage from "./pages/ProjectPage";
import SignUpSuccessPage from "./pages/SignUpSuccess";
function App() {

  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };


  return (
    <UserContext.Provider value={{ user, login, logout, role }}>
      <div className="App">
        {user ? (
          (
            <Router>
              <Layout>
                <Routes>
                  <Route path="/home" element={<StudentHomePage />} />
                  <Route path="/project" element={<ProjectPage />} />
                </Routes>
              </Layout>
            </Router>
          )
        ) :
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signupsuccess" element={<SignUpSuccessPage />} />
            </Routes>
          </Router>

        }
      </div>
    </UserContext.Provider>
  );
}

export default App;
