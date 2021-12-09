import { NavLink } from 'react-router-dom'

function Nav() {
    return(
        <div className='nav-wrapper'>
            <ul>
                <li>
                    <NavLink to='/home'><h2>Home</h2></NavLink>
                </li>
                <li>
                    <NavLink to='/destination'><h2>Destination</h2></NavLink>
                </li>
                <li>
                    <NavLink to='/crew'><h2>Crew</h2></NavLink>
                </li>
                <li>
                    <NavLink to='/technology'><h2>Technology</h2></NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav;
