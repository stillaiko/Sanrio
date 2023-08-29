export default Footer
import twin1 from '../../assets/twin1.png'
import twin2 from '../../assets/twin2.webp'
import './Footer.css'

function Footer(){
    return(
       <footer>
    
    <div className='box'>

        <img className='twin1' src={twin1} alt="" />
        
        <nav>
 
         <div className='icons'>
         <div className='icon1'></div>
         <div className='icon2'></div>
         <div className='icon3'></div>
         </div>
         
         <ul className='ul'>
         <li><a className='a' href="">DESINGS</a></li>
         <li><a className='ponto' href="">.</a></li>
         <li><a className='a' href="">CONTATO</a></li>
         <li><a className='ponto' href="">.</a></li>
         <li><a className='a' href="">SOBRE MIM</a></li>
         <li><a className='ponto' href="">.</a></li>
         <li><a className='a' href="">FEEDBACKS</a></li>
         </ul>

         <div className='mattel'>©2023</div>
    </nav>

    <img className='twin2' src={twin2} alt="" />

    </div>
    
       </footer>
    )
}
