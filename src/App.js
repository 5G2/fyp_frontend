import "./App.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";
import Layout from "./hocs/Layout";
import { useState } from 'react';
import UserContext from "./reducers/UserContext"
import { Provider } from "react-redux";
import store from "./store";

import LogIn from "./pages/LogIn";
import StudentHomePage from "./pages/StudentHomePage";
import ProjectPage from "./pages/ProjectPage";
function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "db5yii9ud",
    },
  });
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };


  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, login, logout }}>
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
            <LogIn />
          }
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
