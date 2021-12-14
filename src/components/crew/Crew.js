import { Carousel } from "react-responsive-carousel";
import "./carousel.css";
import ansari from "../../assets/crew/image-anousheh-ansari.png"
import hurley from "../../assets/crew/image-douglas-hurley.png"
import shuttleworth from "../../assets/crew/image-mark-shuttleworth.png"
import glover from "../../assets/crew/image-victor-glover.png"

function Crew() {
    return(
        <div id='crew-wrapper'>
            <h1><span class='header-number'>02</span>Pick your destination</h1>
            <Carousel dynamicHeight infiniteLoop autoPlay>
                <div>
                    <h3>commander</h3>
                    <h2>Douglas Hurley</h2>
                    <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                    <img alt='' src={hurley} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img alt='' src={shuttleworth} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img alt='' src={glover} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img alt='' src={ansari} />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Crew;
