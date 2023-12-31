import './Form.css'
import { useState } from 'react'

export default function Form(){

  const [fistname,setFist] = useState("")
  function Nome1(e:React.ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
    setFist(e.target.value)
    }

    const [lastname,setLast] = useState("")
    function Nome2(e:React.ChangeEvent<HTMLInputElement>){
      console.log(e.target.value)
      setLast(e.target.value)
      }

    const [email,setEmail] = useState("")
    function Email(e:React.ChangeEvent<HTMLInputElement>){
      console.log(e.target.value)
      setEmail(e.target.value)
      }

    const [mensagem,setMensagem] = useState("")
    function Mensagem(e:React.ChangeEvent<HTMLInputElement>){
      console.log(e.target.value)
      setMensagem(e.target.value)
      }

    return(
       <>
       <main className='f'>
<div className='cards'>
<div className="card">
  <div className="icon">
    <svg xmlns="http://www.w3.org/2000/svg"  height="38px" width="38px" version="1.1" id="heart" viewBox="0 0 471.701 471.701" >
      <linearGradient id="gradientColor">
        <stop offset="5%" stop-color="#7eaaff"></stop>
        <stop offset="95%" stop-color="#ff48fb"></stop>
        </linearGradient>
        <g>
        <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"></path>
      </g>
    </svg>
  </div>
  <p className="title">Email</p>
<p className="text">ana.ribeiro5@gmail.com</p>
</div>

<div className="card">
  <div className="icon">
    <svg xmlns="http://www.w3.org/2000/svg"  height="38px" width="38px" version="1.1" id="heart" viewBox="0 0 471.701 471.701" >
      <linearGradient id="gradientColor">
        <stop offset="5%" stop-color="#7eaaff"></stop>
        <stop offset="95%" stop-color="#ff48fb"></stop>
        </linearGradient>
        <g>
        <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"></path>
      </g>
    </svg>
  </div>
  <p className="title">GitHub</p>
<p className="text">@stillaiko</p>
</div>

<div className="card">
  <div className="icon">
    <svg xmlns="http://www.w3.org/2000/svg"  height="38px" width="38px" version="1.1" id="heart" viewBox="0 0 471.701 471.701" >
      <linearGradient id="gradientColor">
        <stop offset="5%" stop-color="#7eaaff"></stop>
        <stop offset="95%" stop-color="#ff48fb"></stop>
        </linearGradient>
        <g>
        <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"></path>
      </g>
    </svg>
  </div>
  <p className="title">Phone</p>
<p className="text">+55 (xx) x xxx-xxx</p>
</div>

</div>

<div className='f2'>
<form className="form">
    <p className="title1">Contact Me</p>
        <div className="flex">
        <label>
            <input placeholder="" type="text" className="input" onChange={Nome1}/>
            <span>Firstname</span>
        </label>

        <label>
            <input placeholder="" type="text" className="input" onChange={Nome2}/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input  placeholder="" type="text" className="input" onChange={Email}/>
        <span>Email</span>
    </label> 
        
    <label>
        <input placeholder="" type="text" className="input" onChange={Mensagem}/>
        <span>Mensagem</span>
    </label>
    <button className="submit">Submit</button>
</form>
</div>

<div className='cut'>
<p className='c'>Print</p>
<div>
<p className='texto_digitado'> Fistname: {fistname}</p>
<p className='texto_digitado'> Lastname: {lastname}</p>
<p className='texto_digitado'> Email: {email}</p>
<p className='texto_digitado'> Mensagem: {mensagem}</p>
</div>
</div>

</main>
       </>
    )
}