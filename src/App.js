import "./App.css";
import mail from "./assets/mail.png";
import net from "./assets/internet.png";
import phone from "./assets/phone-call.png";
import linkedin from "./assets/linkedin.png";
import instagram from "./assets/instagram.png";
import ozteknik from "./assets/ozteknik-logo.png";
import yavuz from "./assets/yavuz-selim.jpeg";

function App() {
  let iconClass = "w-[30px] lg:w-[45px] my-[4px] mr-2 lg:mr-4";
  let aClass = "flex items-center justify-center my-1 lg:my-3 cursor-pointer";
  let labelClass = "text-[25px] lg:text-[40px] font-bold";

  return (
    <div
      className="w-[100%] h-[100vh]  flex flex-col lg:flex-row items-center justify-center lg:justify-evenly"
      // style={{ fontFamily: "Lucida Handwriting, Cursive" }}
    >
      <div>
        <img
          alt="icon"
          className="h-[40vh] lg:h-[70vh] rounded-[10px] mt-4 border-solid border-4 border-black drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
          src={yavuz}
        />
      </div>
      <div>
        <div>
          <img alt="icon" className="h-[10vh] lg:h-[15vh]" src={ozteknik} />
          <h1 className=" text-center  my-2 text-[30px] lg:text-[45px] font-bold">
            Yavuz Selim TOSUN
          </h1>
        </div>
        <div className="flex flex-col items-start justify-center">
          <a className={aClass} href="tel:+90 545 569 98 97">
            <img alt="icon" className={iconClass} src={phone} />
            <label className={labelClass}>+90 545 569 98 97</label>
          </a>
          <a className={aClass} href="mailto:bilgi@ozteknikrekor.com.tr">
            <img alt="icon" className={iconClass} src={mail} />
            <label className={labelClass}>bilgi@ozteknikrekor.com.tr</label>
          </a>
          <a
            href="https://ozteknikrekor.com.tr/"
            target="_blank"
            className={aClass}
          >
            <img alt="icon" className={iconClass} src={net} />
            <label className={labelClass}>Özteknik Rekor Websitemiz</label>
          </a>
          <a
            className={aClass}
            href="https://www.instagram.com/rekorozteknik/"
            target="_blank"
          >
            <img alt="icon" className={iconClass} src={instagram} />
            <label className={labelClass}>Instagram Adresimiz</label>
          </a>
          {/* <a
            className={aClass}
            // href="https://www.linkedin.com/in/mustafa-%C3%BCnler-5428221b8/"
            // target="_blank"
          >
            <img
              alt="icon"
              className={iconClass + "grayscale"}
              src={linkedin}
            />
            <label className={labelClass}>Linkedin Adresim</label>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default App;
