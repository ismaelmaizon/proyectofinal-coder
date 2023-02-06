import React, { useState } from 'react'
import { useEffect } from 'react';
import Card from '../Card/Card'

const List = function ({data}) {
  
    return (
          data.map(({idDrink, strDrink, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5}) => (
            <Card key={idDrink} name={strDrink} img={strDrinkThumb} description={[strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5]}/>))
    )
    
  }


export default List;
