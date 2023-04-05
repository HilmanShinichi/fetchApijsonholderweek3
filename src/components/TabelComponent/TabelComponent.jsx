import React from 'react';
import { connect } from 'react-redux'
// import './App.css';
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';



function TabelComponent(props) {
    console.log(props.rows)
    
  
  const handleInc = (evt) => {
    props.dispatch({
      type: 'INCREMENT'
    })
  }
  const handleDec = (evt) => {
    props.dispatch({
      type: 'DECREMENT'
    })
  }
    const handleIncH = (evt) => {
      props.dispatch({
        type: 'INCREMENTH', newHarga:5000
      })
  }
  
  
  
  return (
    <>
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={props.rows} columns={props.columns} />
    </div>
  
  </>
      
    );
  }
  const mapStateToProps = (state) => {
    return {
      count: state.count,
      harga: state.harga,
      rows:state.rows,
      columns: state.columns
    }
  }
  export default connect(mapStateToProps)(TabelComponent);