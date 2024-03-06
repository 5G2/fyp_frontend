import "./App.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./hocs/Layout";
import { useState, createContext } from 'react';

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProjectPage from "./pages/ProjectPage";
import SignUpSuccessPage from "./pages/SignUpSuccess";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import PeoplePage from "./pages/PeoplePage";
import NotificationPage from "./pages/NotificationPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
export const UserContext = createContext(null);

function App() {

  // const [user, setUser] = useState(null);
  const [user, setUser] = useState("Ivan");
  const [role, setRole] = useState(1);
  const [jwt, setJwt] = useState(null);

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
                  <Route path="/notification" element={<NotificationPage />} />
                  <Route path="/task/:id" element={<TaskDetailsPage />} />
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
