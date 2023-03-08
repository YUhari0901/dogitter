import React, { useState } from "react";
import AppRouter from "./Router";
import fbase, { authService } from "../fbase";



function App() {

  const [isLoggedIn, setIsLoggedIn] =useState(authService.currentUser);
  return (
    <>
    <AppRouter isLoggedIn={isLoggedIn}/>
    <footer>&copy; Dogitter {new Date().getFullYear()}</footer>
    
    </>

  );
}

export default App;
