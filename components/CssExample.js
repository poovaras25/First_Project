import React, { Component } from 'react'
import '../css/CssExample.css'
import '../css/CssFile.css'
import styles from '../css/style.module.css'
import styled from 'styled-components'


 class CssExample extends Component {
 
   render() {

    const textColorChange = {
        backgroundColor : "aqua",
        textAlign : 'right'
    }

    const StyleOne = styled.div`
    color:green;
    background-color:${(props) => props.changeColor}`


    return (
        <>
                <h1>Css Example</h1>
                <div style={{ backgroundColor :'Graytext' }} >Inline Css Example</div>
                <div style={textColorChange}>JavaScript object's Css Example</div>
                <p>Seperate Css File</p>
                <h3 className='sample'>Seperate Css File</h3>
                <h4 className={styles.sample} >Module Css File</h4>
                <StyleOne changeColor='red'>Styled Component Example</StyleOne>
  
  
        </>
    )
  }
}

export default CssExample
