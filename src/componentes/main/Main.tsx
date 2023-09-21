import './Main.css'
import foto from '../../assets/foto minha.png'
import Trabalho from '../trabalho/Trabalho'
import { useState } from 'react'

type TrabalhoType = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}

function Main(){

const [texto,setTexto] = useState("")
const trabalhos:TrabalhoType[] = [
    {
        id:1,
        titulo:"Formulário de cadastro",
        descricao:"Formulário de cadastro de site em cores neutras", 
        imagem:"/login_black.png"
    },
    {
        id:2,
        titulo:"Formulário de cadastro",
        descricao:"Formulário de cadastro para rede social no tema azul", 
        imagem:"/shineLogin.png"
    },
    {
        id:3,
        titulo:"Paleta de cores", 
        descricao:"Paleta de cores para projetos figma",
        imagem:"/paleta.png"
    },
    // {
    //     id:4,
    //     titulo:"Central de ajuda", 
    //     descricao:"Formulário de cadastro",
    //     imagem:"/loginUp.png"
    // },
    // {
    //     id:5,
    //     titulo:"Central de ajuda", 
    //     descricao:"Formulário de cadastro",
    //     imagem:"/profile.png"
    // },
    {
        id:4,
        titulo:"Real Aiko", 
        descricao:"Desenho digital com referência fotográfica (Half body)",
        imagem:"/nana.png"
    },
    {
        id:5,
        titulo:"Apolo", 
        descricao:"Desenho digital com referência fotográfica (Half body)",
        imagem:"/apolo.png"
    },
    {
        id:6,
        titulo:"Saiki", 
        descricao:"Desenho digital Fanart (Icon)",
        imagem:"/saiki.png"
    },
    {
        id:7,
        titulo:"Lily", 
        descricao:"Desenho digital (Icon)",
        imagem:"/lily.png"
    },
    {
        id:8,
        titulo:"Atlas", 
        descricao:"Desenho digital com referência fotográfica (Half body)",
        imagem:"/atlas.png"
    },
    {
        id:9,
        titulo:"Ícaro", 
        descricao:"Desenho digital com referência fotográfica (Icon)",
        imagem:"/icaro.png"
    },
    {
        id:10,
        titulo:"Aesthetic photo", 
        descricao:"Desenho digital com referência fotográfica culinária (Icon)",
        imagem:"/comida1.png"
    },
    {
        id:11,
        titulo:"Aesthetic photo", 
        descricao:"Desenho digital com referência fotográfica culinária (Icon)",
        imagem:"/comida2.png"
    },
    {
        id:12,
        titulo:"Hades", 
        descricao:"Desenho digital com referência fotográfica (Icon)",
        imagem:"/hades.png"
    },

]

function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
    setTexto(e.target.value)
    }

    return(
        <>
            
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
<button className="shadow__btn">
    trabalhos
</button>
</div>

<div className="pesquisa">
        <p>Buscar Filme</p>
        <input className='barrapesquisa' type="text" onChange={mudaTexto} />

        <div>
        <p className='texto_digitado'>Pesquisa: {texto}</p>
        </div>
    </div>

        <main className='content_main'>

       {trabalhos.filter((trabalho)=>trabalho.titulo.toLowerCase().includes(texto)).map((trabalho) => <Trabalho key = { trabalho.id } titulo={trabalho.titulo} descricao={trabalho.descricao} imagem={trabalho.imagem}/> )}

{/* <div className='boxes'>

<div className='card1'></div>
<div className='card2'></div>
<div className='card3'></div>

<div className='card4'></div>
<div className='card5'></div>
<div className='card6'></div>


</div> */}
        </main>
        </>
    )
}

export default Main