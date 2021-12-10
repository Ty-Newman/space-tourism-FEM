

function Destination() {
    return(
        <div id='destination-wrapper'>
            <h1><span class='header-number'>01</span>Pick your destination</h1>
            <ul id='destination-select'>
                <li>Moon</li>
                <li>Mars</li>
                <li>Europa</li>
                <li>Titan</li>
            </ul>
            <div id='moon-wrapper'>
                <h2>Moon</h2>
                <p>See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                <div id='moon-travel-info'>
                    <span className="avg-distance">
                        <p>avg distnace</p>
                        <p>384,400 KM</p>
                    </span>
                    <span className="est-travel-time">
                        <p>est. travel time</p>
                        <p>3 Days</p>
                    </span>
                </div>
            </div>
            <div id='mars-wrapper'>
                <h2>Mars</h2>
                <p>Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!</p>
                <div id='mars-travel-info'>
                    <span className="avg-distance">
                        <p>avg distnace</p>
                        <p>225 MIL. KM</p>
                    </span>
                    <span className="est-travel-time">
                        <p>est. travel time</p>
                        <p>9 Months</p>
                    </span>
                </div>
            </div>
            <div id='europa-wrapper'>
                <h2>europa</h2>
                <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                <div id='europa-travel-info'>
                    <span className="avg-distance">
                        <p>avg distnace</p>
                        <p>628 MIL. KM</p>
                    </span>
                    <span className="est-travel-time">
                        <p>est. travel time</p>
                        <p>3 Years</p>
                    </span>
                </div>
            </div>
            <div id='titan-wrapper'>
                <h2>titan</h2>
                <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                <div id='titan-travel-info'>
                    <span className="avg-distance">
                        <p>avg distnace</p>
                        <p>1.6 BIL. KM</p>
                    </span>
                    <span className="est-travel-time">
                        <p>est. travel time</p>
                        <p>7 Years</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Destination;
