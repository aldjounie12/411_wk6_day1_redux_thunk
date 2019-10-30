import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container } from '@material-ui/core'
import Menu from '../containers/Menu'

const Import = (props) => {
  // fill out this component
  
  return (
    <Container>
      <br />
      <Button 
      variant='contained' 
      color='primary' 
      onClick={props.fetchMakes}
      >Import</Button>
      <br />
      <h2>COUNT: {props.makes.length}</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Make</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {props.makes.map((make, index) => (
            <TableRow key={make.id}>
              <TableCell component='th'scope='row'>
                {make.MakeId}
              </TableCell>
              <TableCell>{make['MakeName']}</TableCell>
              <TableCell>{make['VehicleTypeName']}</TableCell>
              <TableCell>
                <Menu index={index}/>
              </TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
    </Container>
  )
}

export default Import
