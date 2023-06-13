import React from 'react';

function Header(){
    const st={
        color:"white"
    }
return(
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top" style={{marginTop:"0",marginLeft:"0"}} >
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link " style={st} href="/home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" style={st} href="/register">Register</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" style={st} href="/home">Login</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" style={st} href="/health">Health Shorts</a>
      </li>
      
    </ul>
    
  </div>
</nav>
    </>
)

}

export default Header;