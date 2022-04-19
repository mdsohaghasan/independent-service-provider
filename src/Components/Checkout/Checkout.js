import React, { useState } from 'react'
import Services from '../Services/Services';


function Checkout() {
    const [name, setName] = useState('');
    const [Address, setAddress] = useState('');
    const [Phone, setPhone] = useState('');
    const [error, setError] = useState('');
  

    const handleNameBlur = event => {
        setName(event.target.value);
      }
      const handleAddressBlur = event => {
        setAddress(event.target.value);
      }
      
      const handlePhoneBlur = event => {
        setPhone(event.target.value);
      }
    
      const handleCreateUser = event => {
        event.preventDefault();
        const chechoutInfo = {name, Phone, Address};
        console.log(chechoutInfo);
      }
  return (
    <div>
        <div>Checkout</div>
        <div>
            <Services></Services>
        </div>
        <div>Checkout info</div>
        <form onSubmit={handleCreateUser}>
           <input onBlur={handleNameBlur} type="text" placeholder='your name' required/> <br/>
           <input onBlur={handleAddressBlur} type="text" placeholder='your Address' required/> <br/>
           <input onBlur={handlePhoneBlur} type="text" placeholder='your Phone' required/> <br/>
           <input type="submit" value="Checkout"/> 
      </form>



    </div>

  )
}

export default Checkout