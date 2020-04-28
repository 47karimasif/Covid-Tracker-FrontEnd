import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
  <div className="footer__addr">
    <h1 className="footer__logo">COVID-TRACK
    </h1>
         <ul className="footer-list-icons">
                                <a href="http://www.facebook.com/webarchclub" target="_blank" className="icons icon-1"> <i className="fab fa-facebook fa-2x "></i> </a>
                                <a href="http://www.instagram.com/webarchclub" target="_blank"  className="icons"><i className="fab fa-instagram fa-2x  "></i> </a>
                                <a href="http://www.github.com/webarchclub" target="_blank"  className="icons"><i className="fab fa-github fa-2x "></i> </a>
                            </ul>
  
  </div>
  
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Links</h2>

      <ul className="nav__ul">
        <li>
         <a  href="#navbar" target="_blank">Home</a>
        </li>

        <li>
         <a  href="#navbar" target="_blank">Home</a>
        </li>
            
        <li>
          <a href="#" target="_blank">Global</a>
        </li>
      </ul>
    </li>
    
    <li className="nav__item nav__item--extra">
      <h2 className="nav__title">More</h2>
      
      <ul className="nav__ul nav__ul--extra">
        <li>
<a target="_blank" href="https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.who.int/emergencies/diseases/novel-coronavirus-2019&ved=2ahUKEwjT8Lyz_oPpAhVrIbcAHSFuAFkQFjAPegQICBAB&usg=AOvVaw2bqm1AADArANglLPqDC5aW">WHO</a>       </li>
         <li>
          <a target="_blank" href="https://www.google.com/url?sa=t&source=web&rct=j&url=https://mohfw.gov.in/&ved=2ahUKEwjbkLfu_oPpAhXRX3wKHaI-AhQQFjAAegQIARAB&usg=AOvVaw0P12pu_4vOFkMyTPfOrAEu">MoHFW</a>
        </li>
         <li>
          <a target="_blank" href="https://mygov.in/covid-19/">MyGov.in</a>
           
        </li>
      </ul>
    </li>
  </ul>
  

  <hr />
  <div className="legal">
    <p>Copyright &copy; <script>document.write(new Date().getFullYear());</script> . All rights reserved.</p>
    
    <div className="legal__links">
      <span>
          Made with <span className="heart">♥ </span><span>by</span> <a href="https://webarchsrm.com" target="_blank" className="font-weight-bolder"><i><span className="text-light">Team WebArch</span></i></a></span>
    </div>
  </div>
</footer>
        </div>
    )
}

export default Footer;