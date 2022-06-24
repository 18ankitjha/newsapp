import React from 'react'
import loading from './loading1.gif'
const Spinner=()=> {
  
    return (
      <div className='text-center'>
        
        <img src={loading} alt="loading" style={{width:"20%"}}/>
      </div>
    )
  
}
export default Spinner