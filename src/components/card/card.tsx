import './style.css'
import Categorias from '../tagsCategorias/categorias'

export type CardProps = {
  item : string,
  quantidade : string,
  unidade: string,
  categoria: string
}

export function Card({ item, quantidade , unidade , categoria}: CardProps){

  return (
    <label className='card'>
      <div className='container'>
          <input type="checkbox" name="" id=""/>
          <div>
            <h3>{item}</h3>
            <p> {quantidade} {unidade} </p>
          </div>
      </div>
      <div className='Container'>
        <Categorias
        categoria={categoria}
        />  
          <select name="excluir" id="" className='select-box'>
            <option value="excluir">excluir</option>
          </select>
      </div>
  </label>
  )
}