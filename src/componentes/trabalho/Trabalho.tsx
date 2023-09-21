import './Trabalho.css'

type TrabalhoProps={
    titulo:string,
    descricao:string,
    imagem:string
}

export default function Trabalho(props:TrabalhoProps){

return(
    <>
    
    <div className='trabalho_content'>

<div className='foto_trabalho'><img src={props.imagem} alt="" /></div>
<div className="texto_foto"><h1 className='titulo_'>{props.titulo}</h1><p className='descricao'>{props.descricao}</p></div>

    </div>

    </>
)

}