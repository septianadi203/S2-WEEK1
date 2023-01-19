import '../style/style.css';
// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export function SignIn(props) {

  return (
    <>
    <div className='px-5'>
      <Modal 
        {...props}
        size="sm" aria-labelledby="contained-modal-title-vcenter"
        centered>
          <Modal.Title className='signmid fw-bold mt-4'>Sign In</Modal.Title>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className='fw-bold'>Username</Form.Label>
              <Form.Control
                type="text"
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
          <p className=''>Don't have an account ? Clik 
            <Button variant="link" href='#' className='ps-1 pt-1 pb-2'>Here</Button>
          </p>
          <Button type='submit' className='w-100' variant="primary">
            Submit
          </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
    </>
  );
}

