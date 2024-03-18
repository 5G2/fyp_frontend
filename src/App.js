import "./App.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./hocs/Layout";
import { useState, createContext, useEffect } from 'react';

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProjectPage from "./pages/ProjectPage";
import SignUpSuccessPage from "./pages/SignUpSuccess";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import PeoplePage from "./pages/PeoplePage";
import NotificationPage from "./pages/NotificationPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import ProjectDetails from "./pages/ProjectDetails";
import OtherProfile from "./pages/OtherProfile";
import CreateProjectPage from "./pages/CreateProjectPage";
import CreateTaskPage from "./pages/CreateTaskPage";
export const UserContext = createContext(null);

function App() {

  // const [user, setUser] = useState(null);
  const [user, setUser] = useState(localStorage.getItem("username"));
  const [userId, setUserId] = useState(localStorage.getItem("user_id"));
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [jwt, setJwt] = useState(localStorage.getItem("access"));

  const [page, setPage] = useState(1)

  const logout = () => {
    setUser(null);
  };

  const provider = {
    user,
    setUser,
    setRole,
    setJwt,
    logout,
    role,
    page,
    setPage
  }

  return (
    // <UserContext.Provider value="123">
    <UserContext.Provider value={provider}>
      <div className="App">
        {user ? (
          (
            <Router>
              <Layout>
                <Routes>
                  <Route path="/dashboard/:dashboardPage" element={<Dashboard />} />
                  <Route path="/project" element={<ProjectPage />} />
                  <Route path="/people" element={<PeoplePage />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/profile/:id" element={<OtherProfile />} />
                  <Route path="/notification" element={<NotificationPage />} />
                  <Route path="/task/:code" element={<TaskDetailsPage />} />
                  <Route path="/project/:id/:projectDetailsPage" element={<ProjectDetails />} />
                  <Route path="/create-project" element={<CreateProjectPage />} />
                  <Route path="/create-task" element={<CreateTaskPage />} />
                </Routes>
              </Layout>
            </Router>
          )
        ) :
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signupsuccess" element={<SignUpSuccessPage />} />

            </Routes>
          </Router>

        }
      </div>
    </UserContext.Provider >
  );
}

export default App;
