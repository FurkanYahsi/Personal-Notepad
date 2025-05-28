import React, { Component, useEffect } from 'react'
import './HomeScreen.css'
import HomeDesign from '../../components/home-design/HomeDesign'
import { useNavigate } from 'react-router-dom'

const HomeScreen = () => {
  
  
    const navigate = useNavigate();
    useEffect(() => {
      if(localStorage.getItem('currentUser') === null) {
        navigate('/login');
      }
    },[navigate]);
   
    return (
      
      <div className='homeScreen'>
        <HomeDesign/>
      </div>
    ) 
  
}
export default HomeScreen;
