import React from 'react'
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Card from './Components/Card'
import data from "./data"

export default function App() {
  const cards = data.map(item => {
    return (
      <Card 
          coverImg={item.coverImg}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          location={item.location}
          title={item.title}
          price={item.price}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Content />
      <section className='card-list'>
      {cards}
      </section>
      <Footer />
    </div>
  );
}


