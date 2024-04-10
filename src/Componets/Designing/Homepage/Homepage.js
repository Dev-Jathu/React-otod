import "./Homepage.css";
import Navbar from "../Navbar/Navbar";
import Form from "../../../Componets/Form/Form";
import Button from "../../../Componets/Button/Button";
import Logo from "../../Assets/Logo.png";

export default function HomePage() {
  return (
    <div className="Homepage">
      <Navbar />
      <div className="homecontainer">
        <div className="grid">
          <div className="formlogin">
              <div className="formalign">
                <p className="paragraph">Login to your Account</p>
                <div className="formadd">
                  <Form type="text" input="Email" place="Email" />
                  <Form type="password" input="Email" place="Password" />
                  <Button class="Signin" name="SIGN IN" />
                </div>
                <div className="logo">
              <div className="adjust">
                <img src={Logo} alt="Logo" />
                <div className="logoname">
                  <h2>Thozan</h2>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="signuppage">
                <div className="signadjust">
            <p className="parasignup">
              <h1 className="newhere"> New Here?</h1>  <br/><br/><br/><h3 className="signaboutpara">SIGN UP and discover a great amount of new opportunities </h3></p>
            <a href="/Signup">       
            <Button class="Signup" name="SIGN UP" />

            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
