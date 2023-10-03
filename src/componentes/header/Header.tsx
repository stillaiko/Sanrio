import './Header.css'
import logo from '../../assets/logo sanrio branca.png'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <header>
            <div className='h1'>
            <img className='logo' src={logo} alt="" />
            <p>portifolio</p>
            </div>

            <nav>
                <ul>
                    <li><Link to="/">DESINGS</Link></li>
                    <li><Link to="/contato">CONTATO</Link></li>
                    <li><Link to="/">SOBRE MIM</Link></li>
                    <li><Link to="/">FEEDBACKS</Link></li>
                </ul>
            </nav>
           
        </header>
    )
}

export default Header