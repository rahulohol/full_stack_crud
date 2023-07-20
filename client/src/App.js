import React from "react";
import AddUser from "./components/AddUser";
import Navbar from "./components/Navbar";
import Allusers from "./components/Allusers";
import { Route, Routes } from "react-router-dom";
import EditUser from "./components/EditUser";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<CodeForInterview />} /> */}
        <Route path="/" element={<Allusers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};

export default App;
