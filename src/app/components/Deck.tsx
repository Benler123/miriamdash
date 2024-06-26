'use client';
import React, { Component, useState } from 'react'
import Grid from "@mui/material/Grid";
import { Star } from 'lucide-react';
import StarRating from './StarRating';
import { Inter } from "next/font/google";
import Image from "next/image"


function Deck() {
    const [isClicked, setIsClicked] = useState(false);

    const wfColor = "rgb(70,62,188)"
    const handleClick = () => {
      setIsClicked(!isClicked);
    };
  
  
    return (
      <div className="shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 w-full" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '23rem', borderRadius: '1rem', border: `2px solid ${wfColor}`, backgroundColor: wfColor, margin: '0.5rem'}}
      onClick={handleClick}>
        <Grid container  justifyContent="center">
          <img src="/wf.jpg" style={{objectFit:'contain'}}/> 
        </Grid>
      </div>
      )
  }
  export default Deck;
