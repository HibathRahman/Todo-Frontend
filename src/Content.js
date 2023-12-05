import React from 'react'
import Listitems from './Listitems'


const Content = ({items , handleCheck,handleDelete }) => {
   
    return (
    <main>
        {(items.length) ? (
             <ul >
                <Listitems 
                        items = {items}
                        handleCheck = {handleCheck}
                        handleDelete = {handleDelete}
                />        
              </ul>
        ) : (
            <p>Your List is empty</p>
        )}
   </main>
      
    )
}


export default Content





// const Content = () => {
//     function welcome(){
//         const greeting = ["all" , "student"]
//         const int = Math.floor(Math.random()*2)
//         return greeting[int]
//     }

//     function handleClick1 (name){
//         console.log(`hello ${name}` );
//     }

//     function handleNameChange (){
//         console.log(" hello");
//     }
//     function getTargetValue (e){
//         console.log(e.target.innerText);
//     }

//     useState();
//     useState();
   
//     // usestate returns array of 2 values
//     //  99 is a current value 
// const [count , setCount] = useState(99);

//    function add(){
//     setCount((count) => {
//        return count + 1
//     })
//     //  setCount((count) => {
//     //    return count + 1
//     // })
//     // setCount(count + 1)
//     // setCount(count + 1)
//    }
//    function sub(){
//     setCount((count) => {
//         return count - 1
//      })
//    }
 
//    const [num , setNum] = useState(0)
//    function handleNumber(){
//        const number =Math.floor(Math.random()*100 + 1) ;
//        setNum(number )
//    } 

// return (
// <main>
// <p onDoubleClick={() => handleClick1("hiba")}>    welcome {welcome()}  </p>

// <button onClick={() =>handleNameChange()}>    name change   </button>
// {/* its automatic calling so used anonymous function ,before call ()=> */}

// <button onClick={(e) =>getTargetValue(e)}>    click    </button>


// <div>
//     <button onClick={add}>+</button>
//     <span>number : {count}</span>
//     <button onClick={sub}>-</button>
// </div>

// <div>
//     <p> Random Number -{num} </p>
//     <button onClick={handleNumber}>Number </button>
// </div>
    


// </main>
// )
// }