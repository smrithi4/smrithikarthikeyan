import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react'


const TableA = () => {
    var pname = [{ name: "smrithi", age: 17, place: "kodakara" },
    { name: "tiya", age: 16, place: "tvm" },{ name: "anuja", age: 18, place: "chalakudy" }]
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>age</TableCell>
                        <TableCell>place</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pname.map((value, index) => {
                        return <TableRow>
                            <TableCell key={index}>{value.name}</TableCell>
                            <TableCell key={index}>{value.age}</TableCell>
                            <TableCell key={index}>{value.place}</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableA
