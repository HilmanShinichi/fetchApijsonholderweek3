import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductComp = ({id, nama, email, website, onDelete, onUpdate,index }) => {
  const navigate = useNavigate()
    const handleDelete = () => {
        onDelete(id);
    }
    const handleUpdate = () => {
      onUpdate(id);
  }

  return (
    <>
    <tr key={id}>
        <td>{index + 1}</td>
        <td>{nama}</td>
        <td>{email}</td>
        <td>{website}</td>
        <td><button type="button" class="btn btn-primary mr-2" onClick={handleUpdate}>Update</button>
        <button type="button" class="btn btn-danger" onClick={handleDelete}>Delete</button>
        </td>
    </tr>
  
    </>
    
  )
}

export default ProductComp;
