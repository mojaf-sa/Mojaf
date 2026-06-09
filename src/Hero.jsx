import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section style={{position:'relative',minHeight:'520px',display:'flex',alignItems:'center',background:'#111827',color:'#fff',overflow:'hidden'}}>
    <img src="https://images.pexels.com/photos/6444268/pexels-photo-6444268.jpeg" alt="MOJAF building materials Saudi Arabia" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:.55}} />
    <div style={{position:'relative',zIndex:2,maxWidth:'1180px',margin:'0 auto',padding:'70px 22px',width:'100%'}}>
      <div style={{color:'#d4af37',textTransform:'uppercase',letterSpacing:'1px',marginBottom:'16px'}}>Welcome to MOJAF</div>
      <h1 style={{fontSize:'clamp(2.2rem,5vw,4.8rem)',lineHeight:1.08,margin:0}}>Explore World class<br />Construction & Building Materials</h1>
      <p style={{fontSize:'1.15rem',lineHeight:1.7,maxWidth:'620px',marginTop:'22px'}}>The complete solution for construction and building materials across Riyadh, Jeddah, Dammam and Saudi Arabia.</p>
      <Link to="/products" style={{display:'inline-flex',marginTop:'28px',background:'#d4af37',color:'#fff',padding:'13px 30px',borderRadius:'4px',textDecoration:'none',fontWeight:700}}>Explore Products</Link>
    </div>
  </section>
);

export default Hero;
