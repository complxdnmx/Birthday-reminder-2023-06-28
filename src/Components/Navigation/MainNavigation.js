import { NavLink} from "react-router-dom"
import './MainNavigation.css'

function MainNavigation () {
    return (
        <nav className='main-nav'>
            <div className='nav-item'>
                    <NavLink to='/' className='nav-link'>Home</NavLink>
                </div>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <NavLink to='/this-month' className='nav-link'>This Month</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/all-birthdays' className='nav-link'>All Birthdays</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/edit-birthdays' className='nav-link'>Edit birthdays</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MainNavigation

