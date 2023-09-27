import { useState } from 'react';
import './App.css'
import {Card, CardProps} from './components/card/card'

export default function App() {

  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unidade, setUnidade] = useState('');
  const [categoria, setCategoria] = useState('');
  const [card, setCard] = useState<CardProps[]>([]);
  // const [cards, setCards] = useState<CardProps>({} as CardProps);
  function handleAddItem(e:any){
    e.preventDefault(); 
    const newCard = {
      item: itemName,
      quantidade: quantity,
      unidade:unidade,
      categoria:categoria
    }
    
    setCard( prevState => [...prevState, newCard]);
  //   useEffect(() => {
  //   // Dentro do objeto devemos colocar todas. ações que serão executadas.
  //     fetch('http://localhost:5500/api')
  //       .then(reponse => reponse.json())
  //       .then(data => {
  //         setCards(newCard);
  //         console.log(data);
  //       })
  //       .catch(error => console.error(error))
  //   // Os arrays definem quais os estados que o useEffect depende.
  // }, []);

  }
  
  return (
    <div className='box'>
      <h1>Lista de Compras</h1>
      <form>
        <div id='item1'>
          <label>Item</label>
          <input 
          type="text" 
          minLength={3}
          required 
          onChange={e => setItemName(e.target.value)}
          />
        </div>

        <div id="DropdownUnit">
          <label>Quantidade</label>

          <div id='i'>
             <input 
             type="number" 
             min={0} 
             required
             onChange={e => setQuantity(e.target.value)}
             />

             <select
            name="Dropdown" 
            id="Dropdown" 
            required 
            onChange={e => setUnidade(e.target.value)}
            >
              <optgroup id="quant">
                  <option value={'unidade'} title='Unidades'>UN.</option>
                  <option value={'gramas'} title='Gramas'>G</option>
                  <option value={'quilogramas'} title='Quilogramas'>KG</option>
                </optgroup>
             </select>
          </div>

        </div>

        <div id="DropdownCategory">
          <label>Categoria</label>
          <select 
          placeholder='Selecione' 
          required
          onChange={e => setCategoria(e.target.value)}
          defaultValue={'outra'}
          >
            <option>Selecione</option>
            <optgroup id='categoria'>
                <option value={"fruta"}>Fruta</option>
                <option value={"padaria"}>Padaria</option>
                <option value={"legume"}>Legume</option>
                <option value={"carne"}>Carne</option>
                <option value={"bebida"}>Bebida</option>
                <option value={"outra"}>Outra</option>
            </optgroup>
          </select>
          
        </div>

        <button 
        type="submit" 
        onClick={handleAddItem}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path  d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill="#FBF9FE"/>
                <path d="M12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5C11 4.44772 11.4477 4 12 4Z" fill="#FBF9FE"/>
          </svg>
        </button>
      </form>
      {
        card.map( card => (
          <Card
            item ={card.item}
            quantidade={card.quantidade}
            unidade={card.unidade}
            categoria={card.categoria}
          />
          
        ))
      }       
    </div>
  )
}


