import React from 'react'
import Cards from '../components/cards/Cards'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navbar/NavBar'
import Slider from '../components/slider/Slider'

export default function Home() {
  return (
    <div>
    <div><NavBar/></div>
    <div><Slider/></div>
    <div><Cards/></div>
<br></br>
<div><Footer/></div>
    </div>
  )
}

