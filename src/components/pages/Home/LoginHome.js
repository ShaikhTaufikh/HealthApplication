import React from "react";
import img from '../../images/img1.jpg';
import yoga from '../../images/img2.jpg';
import disease from '../../images/img3.jpg';
import exercise from '../../images/img4.jpg';
import diet from '../../images/img5.jpg';
import { useLocation } from 'react-router-dom';
function LogInHome(props) {
  const loc = useLocation();
  const st = {
    backgroundImage: `url(${img})`,
    minHeight: "750px",
    backgroundSize: "cover",
  }
  const formst = {
    width: "20%",
    position: "absolute",
    top: "200px",
    borderRadius: "10px",
    color: "black",
    fontWeight: "bold"
  }
  let data = loc.state
  return (
    <div>
      <header>
        <div
          class="p-5 text-center bg-image"
          style={st}>
          <div class="mx-auto  " style={formst}>
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-black">
                <div style={{ fontFamily: "serif", fontSize: "30px" }}>Maintain your health to enjoy your earned wealth.</div>
                {/* <h1 class="mb-3">Heading</h1>
          <h4 class="mb-3">Subheading</h4>
          <a class="btn btn-outline-dark btn-lg" href="#!" role="button">Call to action</a> */}

              </div>

            </div>
          
          </div>
        </div>

      </header>
      <center>
      <div class="card-group" style={{marginLeft:"100px",marginTop:"100px"}}>
<div class="col-sm-5">
  <div class="card" style={{borderTopRightRadius:"5rem",borderTopLeftRadius:"2rem"}}>
    
    <img class="card-img-top" src={disease} alt="Card image cap" height="300px" style={{borderTopRightRadius:"2rem",borderTopLeftRadius:"2rem"}} />
    <div class="card-body">
      <h5 class="card-title">Dieases & Preventation</h5>
      <p class="text-left">n health care and public health practice settings, infection control includes various measures that prevent and contain the spread of infectious disease. These measures include:Hand Washing
Infection control standard, contact, droplet and airborne precautions
Procedures for decontamination of persons and disinfection of equipment and the environment,Quarantine of contacts (if necessary)
Prophylaxis of exposed individuals</p>
      <a class="btn btn-primary" href="/disease" role="button">Learn More ></a>
    </div>
    </div>
  </div>
  <div class="col-sm-6">
  <div class="card" style={{marginLeft:"100px",borderTopRightRadius:"5rem",borderTopLeftRadius:"2rem"}}>
    <img class="card-img-top" src={yoga} alt="Card image cap" height="300px" style={{borderTopRightRadius:"2rem",borderTopLeftRadius:"2rem"}}/>
    <div class="card-body">
      <h5 class="card-title">Yoga</h5>
      <p class="text-left">Yoga is a mind and body practice that can build strength and flexibility. It may also help manage pain and reduce stress. Various styles of yoga combine physical postures, breathing techniques, and meditation.Research has shown that yoga can help lower physical markers of stress, including your blood pressure. More active yoga can strengthen your heart and help with functional strength, the kind of strength you use for everyday activities.</p>
      <a class="btn btn-primary" href="/yoga" role="button">Learn More ></a>
    </div>
    </div>
  </div>
</div>
<div class="card-group" style={{marginLeft:"100px",marginTop:"100px"}}>
<div class="col-sm-5">
  <div class="card" style={{borderTopRightRadius:"5rem",borderTopLeftRadius:"2rem"}}>
    
    <img class="card-img-top" src={diet} alt="Card image cap" height="300px" style={{borderTopRightRadius:"2rem",borderTopLeftRadius:"2rem"}} />
    <div class="card-body">
      <h5 class="card-title">Healthy Diet</h5>
      <p class="text-left">A diet plan should include all macro and major micronutrients in order to fulfil the body’s requirements.you don't have to change your diet all at once.Try making 1 small change at a time if you drink orange juice everyday,eat an orange 3days a week instead eat full fruit rather than drinking fruit juice if you like salty snacks try low fat popcorn instead of potato chips</p>
      <a class="btn btn-primary" href="/diet" role="button">Learn More ></a>
    </div>
    </div>
  </div>
  <div class="col-sm-6">
  <div class="card" style={{marginLeft:"100px",borderTopRightRadius:"5rem",borderTopLeftRadius:"2rem"}}>
    <img class="card-img-top" src={exercise} alt="Card image cap" height="300px" style={{borderTopRightRadius:"2rem",borderTopLeftRadius:"2rem"}}/>
    <div class="card-body">
      <h5 class="card-title">Exercise</h5>
      <p class="text-left">Physical therapy and exercise are essential for everyone’s overall health and both physical and mental fitness. The measuring stick of one’s health, the benefits of physical therapy for seniors are far and few between. With the right workout plan and implementation, you can live a much better quality of life. </p>
      <a class="btn btn-primary" href="/exercise" role="button">Learn More ></a>
    </div>
    </div>
  </div>
</div>
</center>
    </div>
    


  );
}

export default LogInHome;