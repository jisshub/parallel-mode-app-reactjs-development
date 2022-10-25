import React from 'react'
import Table from 'react-bootstrap/Table';
import './Workflow.css';

export default function Workflow() {
  return (
    <div>
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
    </div>
  )
}
