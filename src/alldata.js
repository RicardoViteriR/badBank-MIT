import React, { useContext } from 'react';
import { UserContext } from './index';
import { Card, Table } from 'react-bootstrap';


function AllData() {
  const ctx = useContext(UserContext);
  return (
    <>
      <Card className="text-center">
        <Card.Body>

          <Card.Title>
            <h1> All Data in Store</h1>
          </Card.Title>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Name</th>
                <th>Password</th>
                <th>Balance</th>
              </tr>
            </thead>

            <tbody>
              {ctx.users.map((users, index) => {
                return (<tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{users.email}</td>
                  <td>{users.name}</td>
                  <td>{users.password}</td>
                  <td>{users.balance}</td>
                </tr>)
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>


    </>
  );
}

export default AllData;