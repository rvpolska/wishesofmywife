import { useState } from "react";
import { data } from "./data";


import './App.css';


function App (){

const [names, setNames] = useState(data);
const [showMore,setShowMore] = useState(false);

const removeItem = (id) => {
  let newItem = names.filter(name => name.id !==id);
  setNames(newItem)
}


const showTextClick = (item) =>{
  item.showMore = !item.showMore
  setShowMore(!showMore)
}

return(
  <div>
  <div className="container">
    <h1>My wife's {names.length} wishes!</h1>
  </div>

  
  {names.map((item =>{
    const {id, name,description, image, source, price,showMore} = item;

    return(
      <div key={id}>

        <div className="container">
        <h2>{id} - {name}</h2>
        </div>

        <div className="container">

        <img src={image} width='400px' alt="img"/>

        </div>
      
        <div className="container">
       <p>{showMore ? description : description.substring(0, 50) + '...'}
       <button onClick={() => showTextClick(item)}>{showMore ? 'Show less' : 'Show more'}</button>
       </p>
       </div>

       <div className="container">
       <p>source : {source}</p>
       </div>

       <div className="container">
       <p className="price">price : {price} $</p>
       </div>

       <div className="container">
      <button className="btn" onClick={() =>removeItem(id)}>Remove</button>

      <button className="btn" onClick={() => setNames([])}>Remove all</button>

       </div>
       
      </div>
      
    )
  }))}
  </div>
)


}



export default App;


























