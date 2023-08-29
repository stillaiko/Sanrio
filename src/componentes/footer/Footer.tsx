export default Footer

import './Footer.css'

function Footer(){
    return(
       <footer>
    
    <nav>
        <div>

         <div className='icons'>
         <div className='icon1'></div>
         <div className='icon2'></div>
         </div>
         
        

         <ul className='ul'>
         <li><a href="">DESINGS</a></li>
         <li><a href="">CONTATO</a></li>
         <li><a href="">SOBRE MIM</a></li>
         <li><a href="">FEEDBACKS</a></li>
         </ul>

         <div className='L'></div>
         <div className='mattel'>©2023</div>

        </div>
          
    </nav>
    
       </footer>
    )
}
