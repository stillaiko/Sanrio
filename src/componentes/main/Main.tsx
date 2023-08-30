import './Main.css'
import foto from '../../assets/foto minha.png'

function Main(){
    return(
        <main>
            
<div className='quadro'>

<div><img className='foto' src={foto} alt="" /></div>

<div className='boxTexto'>
    <h1 className='titulo'>ANA FERNANDES</h1>
    <p className='texto1'>Meu nome é Ana Flavia Fernandes, sou uma profissonal de design e tenho trabalhado nessa área há 3 anos.
    Desde o início da minha carreira, tenho colaborado com várias empresas e clientes para criar experiências digitais 
    atraentes e funcionais.Acredito que o design web é uma combinação perfeita entre criatividade e funcionalidade. 
    Meu objetivo é sempre encontrar o equilíbrio entre esses dois aspectos.
    </p>
</div>

</div>

<div className='trabalhos'>
<button className ="shadow__btn">
    TRABALHOS
</button>
</div>

<div className='boxes'>

<div className='card1'></div>
<div className='card2'></div>
<div className='card3'></div>

<div className='card4'></div>
<div className='card5'></div>
<div className='card6'></div>


</div>

        </main>
    )
}

export default Main