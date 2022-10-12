import { useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { CartContext } from '../CartContext/CartContext'



const ModalForm =({createOrder, handleChange, props}) => {
    
    const ctx = useContext(CartContext)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 

    return (
      <>
        
        
        {ctx.cartList.length === 0
        
        ?
        <button className='button-cart' variant="primary" disabled  onClick={handleShow}>
          Checkout
        </button> :
        <button className='button-cart' variant="primary"  onClick={handleShow}>
        Checkout
      </button>
        }
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Complete your information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form >
              <Form.Group className="mb-3 " id="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="John Doe"
                  autoFocus
                  name='name'
                  onChange={handleChange}
                  
                />
              </Form.Group>
              <Form.Group className="mb-3 " id="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name='email'
                  autoFocus
                  onChange={handleChange}
                  
                />
              </Form.Group>
              <Form.Group  className="mb-3 " id="phone">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="+54 911 3133-2897"
                  name='phone'
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3 " id="adress">
                <Form.Label>Adress</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Montes de Oca 381"
                  name='adress'
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
              <div class="form-floating">
                <select class="form-select" id="payment" aria-label="Floating label select example">
                  <option selected></option>
                  <option value="1">Wire transfer</option>
                </select>
                <label for="floatingSelect" name='payment'  onChange={() => handleChange}>Payment method</label>
               
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
           <button className='button-cart' onClick={() => console.log(createOrder())}>Checkout</button>

          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default ModalForm