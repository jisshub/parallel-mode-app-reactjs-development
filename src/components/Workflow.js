import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Workflow.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Folder, 
        PencilSquare, 
        PlusLg, 
        PlusSquare, 
        Trash } from 'react-bootstrap-icons';
import Modal from 'react-bootstrap/Modal';
import { ModalBody } from 'react-bootstrap';

export default function Workflow() {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };
  return (
    <Container>
        <Row>
            <Col>
                <div className='table'>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>Folder Name</th>
                                <th>File Name</th>
                                <th>Owner Name</th>
                                <th>Owner Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Praveen Folder</td>
                                <td>----</td>
                                <td>Praveen</td>
                                <td>Praveen@gmail.com</td>
                            </tr>
                        </tbody>                
                    </Table>
                </div>
            </Col>
            <Col md='auto'>
                <div className='workflow-form'>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Row>
                                <Col>
                                    <Form.Label className='label-clr'>Workflow Name</Form.Label>   
                                </Col>
                                <Col>
                                    <Form.Control type='text' />
                                </Col>
                            </Row>
                        </Form.Group>
                        
                        <Form.Group className='mb-3'>
                            <Row>
                                <Col>
                                    <Form.Label className='label-clr'>Due Date</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control type='date' />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </div>
            </Col>
            <Col xs lg="2">
                <div className='workflow-form-2'>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Row>
                                <Col>
                                    <Form.Label className='label-clr'>Workflow Type</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Check 
                                        type='radio'
                                        id='workflow-type'
                                        label='Sequential'
                                    />
                                    <Form.Check 
                                        type='radio'
                                        id='workflow-type'
                                        label='Parallel'
                                        checked
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </div>
            </Col>
        </Row>
        <Row className='row-2-inputs'>
            <Col>
                <div>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Row>
                                <Col>
                                    <Form.Label className='label-clr'>Message</Form.Label>
                                </Col> 
                                <Col>
                                    <Form.Control 
                                        type='text' 
                                        placeholder='Are they ok for Payment?'
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </div>
            </Col>
            <Col>
                <div>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Row>
                                <Col>
                                    <Form.Label className='label-clr' >Invite Email</Form.Label>
                                </Col>
                                <Col>                                   
                                    <Form.Control
                                        type='text' 
                                        placeholder='Search Email or Name'
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Row>
                                <Col>
                                    <Form.Label className='label-clr' >Start From</Form.Label>
                                </Col>
                                <Col>                                   
                                    <Form.Control
                                        type='text' 
                                        placeholder='Owner Name(Default)'
                                    />
                                </Col>
                            </Row>
                        </Form.Group> 
                    </Form>
                </div>
            </Col>
            <Col>
                <div>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Row>
                                <Col>
                                    <Form.Label className='label-clr' >End To</Form.Label>
                                </Col>
                                <Col>                                   
                                    <Form.Control
                                        type='text' 
                                        placeholder='Search Email or Name'
                                    />
                                </Col>
                            </Row>
                        </Form.Group> 
                    </Form>
                </div>
            </Col>
        </Row>

        <Row>
            <Col>
                <div className='table-second'>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>Work Process</th>
                                <th>Workflow Start From</th>
                                <th>If Approve (Yes) ?</th>
                                <th>If Rejects (No)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Workflow Approval</td>
                                <td> </td>
                                <td>
                                    <tr>
                                        <thead>
                                            <th className='th-clr'>Whom to Send &nbsp;</th>
                                            <th className='th-clr'>Action Type</th>
                                        </thead>
                                    </tr>
                                </td>
                                <td>
                                    <tr>
                                        <thead>
                                            <th className='th-clr'>Whom to Send &nbsp;</th>
                                            <th className='th-clr'>Action Type</th>
                                        </thead>
                                    </tr>
                                </td>
                                <td>
                                    <PlusSquare 
                                        color="green" 
                                        size={30} 
                                        className='icon-stl-upd'
                                        onClick={handleShow}
                                        style={{cursor: 'pointer'}}
                                    />
                                    <PencilSquare 
                                        color='royalblue' 
                                        size={30} 
                                        className='icon-stl-upd'
                                        style={{cursor: 'pointer'}}
                                    />
                                    <Trash 
                                        color='red' 
                                        size={30} 
                                        style={{cursor: 'pointer'}}
                                    />
                                </td>

                            </tr>
                            <tr>
                                <td>Workflow Review</td>
                                <td></td>
                                <td>
                                    <tr>
                                        <td>
                                            <input 
                                                type={'text'}
                                                placeholder='Whom to Send'
                                                />
                                        </td>
                                        <td>
                                            <select style={{height: '1.9rem'}}>
                                                <option>Approve (Yes)</option>
                                                <option>Reject (No)</option>
                                                <option>Review</option>
                                                <option>Complete</option>
                                            </select>
                                        </td>
                                    </tr>
                                </td>
                                <td>
                                    <tr>
                                        <td>
                                            <input 
                                                type={'text'}
                                                placeholder='Whom to Send'
                                                />
                                        </td>
                                        <td>
                                            <select style={{height: '1.9rem'}}>
                                                <option>Approve (Yes)</option>
                                                <option>Reject (No)</option>
                                                <option>Review</option>
                                                <option>Complete</option>
                                            </select>
                                        </td>
                                    </tr>
                                </td>
                            </tr>
                            <tr>
                                <td>Workflow Final Submit</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>                
                    </Table>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
            </Col>
            <Col>
                <Button style={{backgroundColor: '#3ecc31', border: '2px solid black'}}
                        variant='success'>
                    Send
                </Button>
            </Col>
        </Row>
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Approve Workflow
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>Add Workflow Process or Not</Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant='secondary' 
                        onClick={handleClose}
                    >
                    Cancel
                    </Button>
                    <Button 
                        variant='primary'
                        onClick={handleClose}
                    >
                    Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    </Container>
  )
}
