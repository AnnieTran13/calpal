import React, {useState} from "react";
import RecipeDetails from './RecipesDetails';


const Recipe = ({recipe}) => {
    const [show, setShow] = useState(false)
    const {label, image, url, ingredients, calories, totalWeight} = recipe.recipe;
    const onImageClick = (string) =>{
        console.log(string)
    }
    return (
        <div className = "recipe">
            <h2>{label}</h2>
            <a href="Journal" onClick={()=>onImageClick(calories.toFixed(2))}><img src={image} alt={label}/></a>
            <a href = {url} target="_blank" rel="noopener noreferrer">
                <button class = "link">Link</button>
            </a>
            <button onClick={()=>setShow(!show)}> Ingredients</button>
            {show && <RecipeDetails ingredients = {ingredients}/>}
            <div class= "calories">{calories.toFixed(2)} Cal</div>
            <div class="totalweight" >{totalWeight.toFixed(2)} grams</div>

        </div>
    )   
}

export default Recipe
