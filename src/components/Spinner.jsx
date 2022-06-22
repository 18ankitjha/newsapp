import React, { Component } from 'react'
import loading from './loading1.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        
        <img src={loading} alt="loading" style={{width:"20%"}}/>
      </div>
    )
  }
}
export default Spinner