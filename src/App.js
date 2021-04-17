import React, {useState} from 'react'
import "./App.css";
import Axios from 'axios'
import Recipe from './Components/Recipe'
import Alert from './Components/Alert'
import {v4 as uuidv4} from 'uuid'

const App = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
    //const APP_ID = "55c8aff1"; //Food API
    //const APP_KEY = "b3f2bc665478aea5b33d71fd53c1356b"; //Food API
    const APP_ID ="e89e5b7a";
    const APP_KEY = "0ed51257e2a20e3f00693b31d8f09e47";
    //const url = `http://api.edamam.com/auto-complete?q=${query}&limit=10&app_id=${APP_ID}&app_key=${APP_KEY}`; //Food API
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`; //Recipes API
    //const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
    //const url = `http://api.edamam.com/auto-complete?q=rou&limit=100&app_id=${APP_ID}&app_key=${APP_KEY}`;
const getData = async () => {
    if(query!==""){ 
    const result = await Axios.get(url);
    if(!result.data.more){
        return setAlert("No Food With Such Name")
    }
    setRecipes(result.data.hits)
    console.log(result);
    setAlert("");
    setQuery("");
    }else{
        setAlert('Please add an ingredient')
    }
}; 
const onChange = (e)=>{
    setQuery(e.target.value);
};
const onSubmit = (e)=>{
    e.preventDefault();
    getData();

};

    return (
        <div className = "App">
            <h1 onClick = {getData}>CalPal App</h1>
            <form className = "search-form" onSubmit = {onSubmit}>
                {alert !== "" && <Alert alert ={alert} />}
                <input type="text" placeholder = "Search Food" autoComplete ="off" onChange = {onChange} value={query}/>
                <input type="submit" value="search"/>
            </form>
            <div className = "recipes">
            {recipes !==[] && recipes.map(recipe => <Recipe key = {uuidv4()}recipe = {recipe}/>)}
            </div>
        </div>
    );
};

export default App;
