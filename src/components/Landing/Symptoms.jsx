import React from 'react';
import thirdImage from '../../Images/purple-virus-img.png';
import './Symptoms.css';

const Symptoms = () => {
    return(
        <div>
            <section className="symptoms" id="Symptoms">
            <div className="container symptoms-container">
                <div className="row">
    
                    
    
                    <div className="col-8 d-flex align-items-center">
                        <div className="about-text">
                        <h1 className=" pr-auto">Symptoms</h1><br />
    
                        <ul className="mt-3 mx-3"> 
                            <li> Common symptoms: </li>
                              <ul className="ml-4">
                                <li>fever</li>
                                <li>tiredness</li>
                                <li>dry cough</li>
                              </ul>
                            <li>Some people may experience:</li>
                             <ul className="ml-4">
                               <li>aches and pains</li>
                               <li>nasal congestion</li>
                               <li>runny nose</li>
                               <li>sore throat</li>
                               <li>diarrhoea</li>
            
                             </ul>
                            <li>On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.</li>
                            <li>People with mild symptoms who are otherwise healthy should self-isolate. Seek medical attention if you have a fever, a cough, and difficulty breathing. Call ahead.</li>
                           </ul>
                        <br />
                    </div>
                </div>
                <div className="col-4 d-flex align-items-center">
                        <img src={thirdImage} alt="Virus Image" className="about-image img-fluid" />
                    </div>
                </div>
            </div><br />
        </section>
    
        <br /><hr className="mt-5" /><br />
        </div>
    )
}

export default Symptoms;