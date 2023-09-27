import { useState } from "react";
import './style.css'
import Categorias from '../tagsCategorias/categorias'

export type CardProps = {
  item : string,
  quantidade : string,
  unidade: string,
  categoria: string
}


export function Card({ item, quantidade , unidade , categoria}: CardProps){

  const[isChecked, setIsChecked] = useState(false);
  const cartao = document.querySelector('.card');
  
  function finish(){
    setIsChecked(!isChecked);
    
    if (!isChecked == true){
      cartao?.classList.add('finish')
    }else if (!isChecked == false){
      cartao?.classList.remove('finish')
    }
    
  }

  return (
    <label className='card'>
      <div className='container'>
          <input type="checkbox" id="check" checked={isChecked}
          onChange={finish}/>
          <div>
            <h3>{item}</h3>
            <p> {quantidade} {unidade} </p>
          </div>
      </div>
      <div className='Container'>
        <Categorias
        categoria={categoria}
        />  
          <select name="excluir" id="" className='select-box' defaultValue={"excluir"}>
            <option value="excluir">excluir</option>
          </select>
      </div>
  </label>
  )
}