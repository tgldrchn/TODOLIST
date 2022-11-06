import React, {useState} from "react"
import './App.css';

function App() {

  const[newItem, setNewItem] = useState("");
  const[items, setItems] = useState([])


  function addItem(){

    if(!newItem){
      return
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
      completed: false,
      style: "",
    };


    setItems(oldList => [...oldList, item]);
    setNewItem("");
    console.log(item)
  }

  function deleteItem(id){
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray)
  }

  function searchItem(){
    const searchedArray = items.filter((item) => {
      if(item.value.toLowerCase().includes(newItem.toLowerCase())){
        return item
      } else if (newItem === ""){
        return item
      }
    })
    setItems(searchedArray);
    setNewItem("")
  }

  function checker(item){
    if(item.completed === false){
    } 
  }

  const Task = (props) => {
    return(
      <div className="props" key={props.id}>
        <div className='miniProps' style={{textDecoration: props.style}}>
          <input type="checkbox" className="checkbox" onChange={() => checker()}/>
          {props.value}
        </div>
          <button className='remove' onClick={() => deleteItem(props.id)}>x</button>
      </div>
    )
  }

  


  return (
    <div className='body'>
      
      <div className='container'>

        <div className="miniContainer">
        <input type="text" placeholder='Add your todo list...' className='todoLists' onChange={(e)=>{setNewItem(e.target.value)}}value={newItem}/>
        <button className='button'onClick={() => addItem()}>Add</button>
        <button className='button'onClick={() => searchItem()}>Search</button>
        </div>
         
        {items.map((item)=>{
          return (
           <Task id={item.id} value={item.value} completed={item.completed} style = {item.style}/>
        )})}

       
      </div> 
    </div>
  );
}

export default App;