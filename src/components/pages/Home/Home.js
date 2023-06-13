
import React, { useState } from 'react';
import axios from 'axios';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ADULT from '../../images/ADULT.jpg'
import { useNavigate } from "react-router-dom";
import LoginHome from './LoginHome';

function Home(props){

  let [userName,setUserName]=useState(''); 
  let [password,setPass]=useState(''); 
  const nav = useNavigate();
  
  
  function Login(e)
  {
      e.preventDefault();
     if(userName && password){
      axios.post("https://localhost:7281/api/user/"+userName+"/"+password).then(response=>
      {
        console.log(response
          .data)
        nav("/LoginHome")
      })
      
      }
      else
      {
        alert("please Enter Valid Credentials")
      }
     
  }


    const format={
        width:"25%",
        position:"absolute",
        top:"200px",
        borderRadius:"10px",
        right:"800px",
        color:"black"
    }
    
    return (
        <div>
            <div>
            <img src={ADULT} style={{width:"100%"}}/>
            <div class="mx-auto py-5 shadow p-4">
            <form style={format}>
         
          <div class="form-outline mb-4">
            <label class="exampleInputEmail1" for="form3Example3">User Name</label>
            <input type="email" class="form-control" onBlur={(e)=>setUserName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailhelp" title='Enter UserName'></input>
          </div>
          
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" onBlur={((e)=>setPass(e.target.value))}/>
            <label class="form-label" for="form3Example4">Password</label>
          </div>
          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg"
              style={{paddingleft: "2.5rem; padding-right: 2.5rem"}} onClick={Login}>Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                class="link-danger">Register</a></p>
          </div>

        </form>
        </div>
            </div>
            
        </div>
    );
}

export default Home;