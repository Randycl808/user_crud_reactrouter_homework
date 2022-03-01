import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Users from "./pages/Users";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import DataProvider from './providers/DataProvider';
import NewUser from "./pages/NewUser";

ReactDOM.render(
  <DataProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/Users" element={<Users />} />
        <Route path="/About" element={<About />} />
        <Route path="/NewUser" element={<NewUser />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </DataProvider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
