import ContactDetailsPage from "pages/ContactDetailsPage";
import ContactsPage from "pages/ContactsPage";
// import Home from "pages/HomePage";
import InfoPage from "pages/InfoPage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import {  NavLink, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import HomePage from "pages/HomePage";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        margin: '30px',
      }}
    >
<nav>
        <NavLink to="/" end style={{ marginRight: '10px' }}>
          
        </NavLink>
        <NavLink to="/register" style={{ marginRight: '10px' }}>
         
        </NavLink>
        <NavLink to="/login" style={{ marginRight: '10px' }}>
    
        </NavLink>
        <NavLink to="/contacts" style={{ marginRight: '10px' }}>
        
        </NavLink>
        <NavLink to="/info" style={{ marginRight: '10px' }}>
       
        </NavLink>
      </nav>

     <Routes>
 
     <Route path="/" element={<Layout />}>
        <Route index element={<HomePage/>} />
       
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="contacts/:id" element={<ContactDetailsPage />} />
        <Route path="info" element={<InfoPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
       

          </Route>
          <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};
