import logo from './logo.svg';
import './App.css';
import './component/navbar'
import './component/home'
import Navbar from './component/navbar';
import Home from './component/home';
import Footer from './component/footer'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Page2 from './component/page2';
import Page3 from './component/page3';
import Page4 from './component/page4';
import Contact from './component/contact us';
import Conemail from './component/conemail';
import Testt from './component/test';
import Model from './component/model';
import Model1 from './component/model1';
import Model3 from './component/model3';
import Modelf from './component/modelf';
import Modelff from './component/modelff';
import Allmodel from './component/allmodel';
import New from './component/new';
import New22 from './component/new22';
import New33 from './component/new33';
import New44 from './component/new44';
import React , {useContext} from 'react';
import {AuthProvider , AuthContext } from "./component/AuthContext";
import * as ReactDOM from "react-dom/client";
import { Route, Routes , useNavigate, Link} from "react-router-dom"


<style>
  @import url('https://fonts.googleapis.com/css2?family=Protest+Strike&display=swap');
</style>


  function App() {
    const authContext = useContext(AuthContext);
    
     return (
       
       <div className="App">
         
         <Navbar></Navbar>
         
           <Routes>
            
            <Route path="/" element={<WithPage />}  />            
            <Route path="/model" element={<WithModel />} />
            <Route path="/model1" element={<Model />} />
            <Route path="/new" element={<PageNew />} /> 
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/conemail" element={<Conemail />} />
            <Route path="/conemail" element={<WithPageemail />} />
            <Route path="/allmodel" element={<Allmodel />} />
           </Routes>
           
          
    <Footer></Footer> 
   
   
        
       </div>
       
     );
   }
   function WithPage() {
     return (
       <>
         <Home />
         <Page2 />
         <Page3 />
         <Modelff />
         <Page4 />
        
       </>
     );
   }
   function WithModel() {
    return (
      <>
        <Model1 />
        
        <Model3 />
      
        <Modelf /> 
        <Model />
        {/* <Modelff /> */}
       
      </>
    );
  }
  function PageNew() {
    return (
      <>
        <New />
        <New22 />
        <New33 />
        <New44 />
      </>
    );
  }
   function WithPageemail() {
     return (
       <>
         <Conemail />
         <Testt />
       </>
     );
   }
   
   function AppWithStore(){
     return (
       <AuthProvider>
         <App />
       </AuthProvider>
     )
   }
   
   export default AppWithStore;