import React from 'react'
import Table from 'react-bootstrap/Table';

export default function Workflow() {
  return (
    <div>
        <Table striped bordered>
            <thead>
                <tr>
                    <th>Folder Name</th>
                    <th>File Name</th>
                    <th>Owner Name</th>
                    <th>Owner Email</th>
                </tr>
            </thead>
        </Table>
    </div>
  )
}
