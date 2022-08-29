import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './AddToCart.css'

function AddtoCart(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add to cart
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
       
        <div className='modal-body'>
            <div className='modal-flex'>
            <p>{`You added ${props.game} to cart!`}</p>
            <img className='toad' src={require('./charizard.png')} alt='toad-intro'></img>
            </div>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddtoCart 