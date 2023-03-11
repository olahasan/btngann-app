import React, { useState } from 'react'

function Form() {

const[User, setUser] = useState({
    name:"",
    age:"",
})
const[Allitems, setAllitems] = useState([])




const handleFormChange = (e) => {
    // console.log(e.target.name , e.target.value);

    switch(e.target.name){
       case "name":
        setUser({
            ...User,
            name:e.target.value,
        })
        break;

        case "age":
            setUser({
                ...User,
                age:e.target.value,
            })
        break;


        default:
        break;
    }
}

const formSubmit = (e) => {
    e.preventDefault();
    if(User.name.length === 0 || User.age.length === 0 ){
        return ""
    }else{
    // console.log("yyyy");
    // console.log(User);
    Allitems.push(User)
    setUser({
        ...User,
        Allitems
    })
    // console.log(Allitems);
    setUser({
        name:"",
        age:"",
    })
    // console.log(Allitems);
}
}




// const handleClick = (e , key) => {
//     const olla = key
//     console.log(olla)
//     console.log('key index:' , key);
// }


const handleClick = (e , index) => {
    // console.log('handleClick index:' , index)
    let handleClickIndex = index;
    // console.log(handleClickIndex);

    const ooo = Allitems.filter((c , index)=>{
        // console.log(c)
        // console.log(index)
        let oooIndex = index;
        // console.log(oooIndex);

        // handleClickIndex === oooIndex ? console.log("true") : console.log("false")
        return(
            handleClickIndex === oooIndex ? "" : c
        )
       
    })
    setAllitems(ooo)
}

const[Done, setDone] = useState(false)

const handleDone = (e, index)=>{

    // console.log('handleDone index:' , index)
    let handleDoneIndex = index;
    console.log(handleDoneIndex);


    const ddd = Allitems.filter((c, index)=>{
        console.log(c)
        // console.log(index)

        let dddIndex = index;
        console.log(dddIndex);

        handleDoneIndex === dddIndex ? console.log("true") : console.log("false")
      
        return(
        handleDoneIndex === dddIndex ? setDone(!Done) : ""
        )
    })

   
}





  return (
    <div>
        <form onSubmit={formSubmit}>
            <div className='w-50 mx-auto my-5'>
                <input className='form-control mb-3'placeholder='Write Your Name' name='name' value={User.name} onChange={handleFormChange} />
                <input className='form-control mb-3' placeholder='Write Your Age' name='age' value={User.age} onChange={handleFormChange} />
                <button className='btn btn-primary w-100' >save</button>
            </div>
        </form>

        <div>
          <h1 className='Text-center'>Todo list</h1>
          <ul>
            {/* {Allitems.length  ?   Allitems.map(   (e, key)=>  <li key={Math.random()}> {e.name }  {e.age }  <small onClick={(e)=>handleClick(e , key)} key={key} style={{color: "red" , fontWeight: "bold" , cursor:"pointer"}}>&times;</small></li> )   : ""} */}
            {Allitems.length  ?   Allitems.map(   (e, index)=>  
            <li key={Math.random()} >
                {/* <span > {e.name }  {e.age }   </span> */}


                <span className={`${ Done ? "text-decoration-line-through" : "text-decoration-none"}`}> {e.name }  {e.age }   </span>

                    <small onClick={(e)=>handleClick(e , index)}  style={{color: "red" , fontWeight: "bold" , cursor:"pointer"}}>&times;</small>

                <small onClick={(e)=>handleDone(e , index)} style={{cursor:"pointer"}}>done</small>


            </li> )   : ""}
          </ul>
        </div>

    </div>
  )
}

export default Form