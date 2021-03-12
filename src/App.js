import { useState, useEffect } from 'react'

import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';

function App() {

  const [clickedIngredients, setClickedIngredients] = useState([])

  const handleClick = (e) => {
    console.log(e.target.innerText)
    setClickedIngredients([...clickedIngredients, { name: e.target.innerText}])
  }

  useEffect(() => {
    console.log(clickedIngredients)
  }, [clickedIngredients])


  return (
    <div className="burger-stacker">
      <IngredientList handleClick={handleClick}/>
      <BurgerStack clickedIngredients={clickedIngredients}/>
    </div>
  );
}

export default App;
