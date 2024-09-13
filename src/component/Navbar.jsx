import React, { useContext } from 'react'
import MyContext from '../context/Mycontext'


const Navbar = () => {
 
    const {fetchDataByCategory,setQuery}=useContext(MyContext);
 
    return (<>
    <div className='container text-center my-3'>
<button onClick={()=>fetchDataByCategory("backgrounds")} type="button" className="btn btn-outline-primary  mx-2">Backgrounds</button>
<button onClick={()=>fetchDataByCategory("fashion")} type="button" className="btn btn-outline-warning mx-2">Fashion</button>
<button onClick={()=>fetchDataByCategory("nature")} type="button" className="btn btn-outline-light mx-2">Nature</button>
<button onClick={()=>fetchDataByCategory("animals")} type="button" className="btn btn-outline-info mx-2">Animals</button>
<button onClick={()=>fetchDataByCategory("food")} type="button" className="btn btn-outline-warning mx-2">Food</button>
<button onClick={()=>fetchDataByCategory("sports")} type="button" className="btn btn-outline-info mx-2">Sports</button>
<button onClick={()=>fetchDataByCategory("building")} type="button" className="btn btn-outline-light mx-2">Buildings</button>
<button onClick={()=>fetchDataByCategory("music")} type="button" className="btn btn-outline-primary mx-2">Music</button>
    </div>

    <form className='d-flex justify-content-center my-4'  >
    <input onChange={(e)=>setQuery(e.target.value)} type="text" className='bg-dark text-light form-control' style={{width:"400px"}} />

    </form>
    </>)
}

export default Navbar
