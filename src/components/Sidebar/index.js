import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import JG from '../../assets/images/JG.png'
import Jackson from '../../assets/images/JacksonG.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faUser, faEnvelope, faToolbox,faListCheck} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='tag' to="/">
        <img className ='logo' src = {JG} alt = 'tag'/>
        <img className ="nameTag" src = {Jackson} alt ='name'/>
        </Link>
        <nav>
        <NavLink exact = "true" activeclassname = "active" to="/">
            <FontAwesomeIcon icon ={faHome} color = '#4d4d4e' />
        </NavLink>
        <NavLink exact = "true" activeclassname = "active" className = "about-link" to="/about">
            <FontAwesomeIcon icon ={faUser} color = '#4d4d4e' />
        </NavLink>
        <NavLink exact = "true" activeclassname = "active" className = "skill-link" to="/skill">
            <FontAwesomeIcon icon ={faToolbox} color = '#4d4d4e' />
        </NavLink>
        <NavLink exact = "true" activeclassname = "active" className = "project-link" to="/project">
            <FontAwesomeIcon icon ={faListCheck} color = '#4d4d4e' />
        </NavLink>
        <NavLink exact = "true" activeclassname = "active" className = "contact-link" to="/contact">
            <FontAwesomeIcon icon ={faEnvelope} color = '#4d4d4e' />
        </NavLink>
        </nav>



    </div>
)

export default Sidebar