import React, { useEffect, useMemo, useState } from "react";
import { productStyle } from "./style";
import { defaultFilter, RecordsPerPage } from "../../constant/constant";
import { useHistory } from "react-router-dom";
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";


const Book= () => {
  const classes = productStyle();

  return (
    <div className={classes.productWrapper}>
      <div className="container">
        <Typography variant="h1">Book Page</Typography>
       
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
               
                  <TableCell>
                                   
                   label
                  </TableCell>

                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
                <TableRow >
                  <TableCell>name</TableCell>
                  <TableCell>price</TableCell>
                  <TableCell>category</TableCell>
                  <TableCell>
                    <Button
                      type="button"
                      className="green-btn btn"
                      variant="contained"
                      color="primary"
                      disableElevation
                     
                    >
                      Edit
                    </Button>
                    <Button
                      type="button"
                      className="btn pink-btn"
                      variant="contained"
                      color="primary"
                      disableElevation
                      
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
            
             
            </TableBody>
          </Table>
        </TableContainer>
        
      </div>
    </div>
  );
};

export default Book;
