import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Modal,
  Button,
  Typography,
} from "@mui/material";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import ModalComponent from "../../shared/Modal/Modal";
import { DeleteTeacherHook, editTeacher, GetSingleTeacherHook, UpdateTeacherHook } from "../../utils/CustomQuerHook/CustomQueryHook";
import PaginationAdd from "../pagination/Pagination";
import { ToastContainer, toast } from 'react-toastify';

import "./table.css";
import { useQueryClient } from "react-query";

const TabelComponent = ({
  cellData,
  pagination,
  tableHead = [],
  tableType,
}) => {
  const [data, setData] = useState([]);
  const [ids, setId] = useState("");
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);

  const [errors, setError] = useState("");
  const[indexs,setIndex]=useState("")
  const queryClient=useQueryClient()


  const { mutate, isError } = DeleteTeacherHook();

  const OnSuccessToast = () => toast.success("Teacher was successfully updated", { autoClose: 7000,position: toast.POSITION.TOP_RIGHT });
  const OnErrorToast = () => toast.error("Teacher was not updated", { autoClose: 7000,position: toast.POSITION.TOP_RIGHT });
  console.log(ids)

  const handleClose = () => {
    setOpen(false);
  };
  // for close edit permission
  const handleEditClose = () => {
    setOpenEditForm(false);
  };
  const handleOpen = (_id) => {
    setOpen(true);
    setId(_id);
  };
  const handleOpenEdit = (_id,index) => {
    setOpenEditForm(true)
    setId(_id)

    setIndex(index)
  };
 

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  
  const handleSubmit = () => {
    mutate(ids);
    isError ? setError(isError) : setOpen(false);
  };
  const handleSubmitEdit =async (values) => {
   const data={
      username:values.userName,
      lastname:values.lastName,
      middlename:values.middleName,
      firstname:values.firstName

    }
    
    
    const response=await editTeacher(ids,data)
    response&&response?.data.success&&setOpenEdit(false)
    response?.data.success?OnSuccessToast():OnErrorToast()

    queryClient.invalidateQueries("teacher-data")
 

  };

  
  const initialValues ={
      firstName: "",
      lastName: "",
      middleName: "",
      userName: "",
    }
  
  console.log(initialValues,'vaue')
useEffect(()=>{
  console.log(indexs,'indexs')
  cellData?.data?.data?.map((each,index)=>{
    if(index===indexs){
     initialValues.firstName=each?.firstname
     initialValues.lastName=each?.lastname
     initialValues.middleName=each?.middlename

     initialValues.userName=each?.username


    }
  })
},[indexs,initialValues,cellData])

  const teacherSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "minimum 2 character")
      .max(50, "maximum 50 character")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "minimum 2 character")
      .max(50, "maximum 50 character")
      .required("Required"),
    // middleName: Yup.string()
    //   .min(2, "Too Short!")
    //   .max(50, "Too Long!")
    //   .required("Required"),
    userName: Yup.string()
      .min(2, "minimum 2 character")
      .max(50, "maximum 50 character")
      .required("Required"),
  });
  return (
    <>
    <ToastContainer />
      {tableType === "topic" && (
        <TableContainer component={Paper}>
          <Table aria-label="table-container">
            <TableHead>
              <TableRow>
                {tableHead.map((each) => (
                  <TableCell>{each.title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data?.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.code}</TableCell>
                    <TableCell>{row.topics}</TableCell>
                    <TableCell>{row.instructor}</TableCell>
                    <TableCell>{row.datecreated}</TableCell>
                    <TableCell
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.2em",
                      }}
                    >
                      <button
                        style={{
                          color: "white",
                          backgroundColor: "blue",
                          minWidth: "5em",
                          borderRadius: "0.5em",
                          border: "none",
                        }}
                      >
                        edit
                      </button>
                      <button
                        style={{
                          color: "white",
                          backgroundColor: "red",
                          minWidth: "5em",
                          borderRadius: "0.5em",
                          border: "none",
                        }}
                      >
                        delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {tableType === "teacher" && (
        <TableContainer component={Paper}>
          <Table aria-label="table-container">
            <TableHead>
              <TableRow>
                {tableHead.map((each) => (
                  <TableCell>{each.title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {cellData &&
                cellData?.data?.data?.map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell>{row._id}</TableCell>
                    <TableCell>{row.username}</TableCell>
                    <TableCell>{row.firstname}</TableCell>
                    <TableCell>{row.registerDate}</TableCell>
                    <TableCell
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.2em",
                      }}
                    >
                      <button
                        onClick={()=>handleOpenEdit(row._id,index)}
                        style={{
                          color: "white",
                          backgroundColor: "blue",
                          minWidth: "5em",
                          textTransform:"capitalize",
                          borderRadius: "0.3em",
                          border: "none",
                        }}
                      >
                        edit
                      </button>
                      <button
                        onClick={() => handleOpen(row._id)}
                        style={{
                          color: "white",
                          backgroundColor: "red",
                          textTransform:"capitalize",

                          minWidth: "5em",
                          borderRadius: "0.3em",
                          border: "none",
                        }}
                      >
                        delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {/* **modal for delete component** */}
      {
        <ModalComponent open={open}>
          <Typography>Are you sure you want to delete this?</Typography>
          <Box sx={{ padding: "1em" }}>
            <Button color="warning" onClick={handleSubmit}>
              Yes
            </Button>
            <Button onClick={handleClose}>No</Button>
          </Box>
        </ModalComponent>
      }
      {/* **modal for update component** */}
      {
        <ModalComponent open={openEditForm}>
          <Typography>Are you sure you want to update this?</Typography>
          <Box sx={{ padding: "1em" }}>
            <Button color="warning" onClick={()=>(setOpenEdit(true),setOpenEditForm(false))}>
              Yes
            </Button>
            <Button onClick={handleEditClose}>No</Button>
          </Box>
        </ModalComponent>
      }
      {
        <ModalComponent open={openEdit} handleClose={handleClose}>
          <Formik
            initialValues={initialValues}
            validationSchema={teacherSchema}
            onSubmit={(values) => {
              handleSubmitEdit(values);
            }}
          >
            {({ errors, touched }) => (
              <Form
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                <Typography variant="h6" bgcolor={'blue'} textAlign='center' color='white' py={1}>Update Teacher</Typography>
                <Field name="firstName" placeholder="firstname"  style={{borderRadius:'5px', padding:"10px", textTransform:'capitalize'}}/>
                {errors.firstName && touched.firstName ? (
                  <p style={{ fontSize: "1em", color: "red" }}>
                    {errors.firstName}
                  </p>
                ) : null}
                <Field name="middleName" placeholder="middlename"  style={{borderRadius:'5px', padding:"10px", textTransform:'capitalize'}}/>
                {errors.middleName && touched.middleName ? (
                  <p style={{ fontSize: "1em", color: "red" }}>
                    {errors.middleName}
                  </p>
                ) : null}
                <Field name="lastName" placeholder="lastname"  style={{borderRadius:'5px', padding:"10px", textTransform:'capitalize'}}/>
                {errors.lastName && touched.lastName ? (
                  <p style={{ fontSize: "1em", color: "red" }}>
                    {errors.lastName}
                  </p>
                ) : null}

                <Field name="userName" placeholder="username" type="text"  style={{borderRadius:'5px', padding:"10px", textTransform:'capitalize'}}/>
                {errors.userName && touched.userName ? (
                  <p style={{ fontSize: "1em", color: "red" }}>
                    {errors.userName}
                  </p>
                ) : null}
                <Box display={'flex'} justifyContent="space-between">
                <Button type="submit" style={{backgroundColor:'blue',color:"white"}}>Update</Button>
                <Button onClick={handleCloseEdit} style={{backgroundColor:'blue',color:"white"}}>Close</Button>
                </Box>
               
              </Form>
            )}
          </Formik>
        </ModalComponent>
      }

      {tableType === "result" && (
        <TableContainer component={Paper}>
          <Table aria-label="table-container">
            <TableHead>
              <TableRow>
                {tableHead.map((each) => (
                  <TableCell>{each.title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data?.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.topic}</TableCell>
                    <TableCell>{row.instructor}</TableCell>
                    <TableCell>{row.score}</TableCell>
                    <TableCell>{row.date}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {tableType === "passer" && (
        <TableContainer component={Paper}>
          <Table aria-label="table-container">
            <TableHead>
              <TableRow>
                {tableHead.map((each) => (
                  <TableCell>{each.title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data?.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.topic}</TableCell>
                    <TableCell style={{ color: "green" }}>
                      {row.correct}
                    </TableCell>
                    <TableCell style={{ color: "red" }}>{row.wrong}</TableCell>
                    <TableCell
                      style={{ color: "blue" }}
                    >{`${row.result}%`}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {pagination && (
        <Box
          justifyContent={"center"}
          alignItems="center"
          display={"flex"}
          margin="2em 0em"
        >
          <PaginationAdd
            setProducts={(e) => setData(e)}
            rawData={cellData?.data?.data}
          />
        </Box>
      )}
    </>
  );
};

export default TabelComponent;
