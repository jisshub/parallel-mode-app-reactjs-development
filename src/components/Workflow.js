import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Workflow.css';
import Form from 'react-bootstrap/Form';

export default function Workflow() {
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
            <Col>
                <div className='workflow-form'>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Row>
                                <Col>
                                    <Form.Label>Workflow Name</Form.Label>   
                                </Col>
                                <Col>
                                    <Form.Control type='text' />
                                </Col>
                            </Row>
                        </Form.Group>
                        
                        <Form.Group className='mb-3'>
                            <Row>
                                <Col>
                                    <Form.Label>Due Date</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control type='date' />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </div>
            </Col>
            <Col>
                <div className='workflow-form-2'>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Row>
                                <Col>
                                    <Form.Label>Workflow Type</Form.Label>
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
    </Container>
  )
}
