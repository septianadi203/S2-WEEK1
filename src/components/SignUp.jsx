import '../style/style.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export function SignUp(props) {

  return (
    <>
    <div className='px-5'>
      <Modal 
      {...props}
      size="sm" aria-labelledby="contained-modal-title-vcenter"
      centered>
          <Modal.Title className='signmid fw-bold mt-4'>Sign Up</Modal.Title>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className='fw-bold'>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className='fw-bold'>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className='fw-bold'>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className='fw-bold'>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className='fw-bold'>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                autoFocus
              />
            </Form.Group>
          <Button type='submit' className='w-100 mt-3' variant="primary">
            Sign Up
          </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
    </>
  );
}
