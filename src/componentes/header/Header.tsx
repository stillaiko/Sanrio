import './Header.css'
import logo from '../../assets/logo sanrio branca.png'

function Header(){
    return(
        <header>
            <div className='h1'>
            <img className='logo' src={logo} alt="" />
            <p>portifolio</p>
            </div>

            <nav>
                <ul>
                    <li><a href="">DESINGS</a></li>
                    <li><a href="">CONTATO</a></li>
                    <li><a href="">SOBRE MIM</a></li>
                    <li><a href="">FEEDBACKS</a></li>
                </ul>
            </nav>
           
        </header>
    )
}

export default Header