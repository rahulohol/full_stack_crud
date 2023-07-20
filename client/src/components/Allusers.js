import react, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Button,
  styled,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";
import { getUsers, deleteUser } from "../service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 80%;
  margin: 50px auto;
  text-align: "center";
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState(false);

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  return users ? (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell style={{ textAlign: "center" }}>Status</TableCell>
          <TableCell>Edit / Delete</TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user, index) => (
          <TRow key={user.id}>
            <TableCell>{index + 1}</TableCell>{" "}
            {/* change it to user.id to use JSON Server */}
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
                textAlign: "center",
                // backgroundColor: "greenyellow",
                boxSizing: "border-box",
              }}
            >
              <Button
                style={
                  user.userstatus
                    ? {
                        // padding: "3",
                        backgroundColor: "green",
                        color: "white",
                        cursor: "initial",
                        fontWeight: "bold",
                      }
                    : {
                        // padding: "3",
                        backgroundColor: "#bf1a1a",
                        color: "white",
                        cursor: "initial",
                        fontWeight: "bold",
                      }
                }
              >
                {user.userstatus ? "Active" : "Unactive"}
              </Button>
            </TableCell>
            <TableCell>
              <Button
                color="primary"
                variant="contained"
                style={{
                  marginRight: 10,
                  marginBottom: 10,
                  backgroundColor: "#cd8724",
                }}
                component={Link}
                to={`/edit/${user._id}`}
              >
                Edit
              </Button>{" "}
              {/* change it to user.id to use JSON Server */}
              <Button
                color="secondary"
                // color="red"
                variant="contained"
                style={{ backgroundColor: "#bf1a1a", marginBottom: 10 }}
                onClick={() => deleteUserData(user._id)}
              >
                Delete
              </Button>{" "}
              {/* change it to user.id to use JSON Server */}
            </TableCell>
          </TRow>
        ))}
      </TableBody>
    </StyledTable>
  ) : (
    <Box
      style={{
        width: "100%",
        display: "flex",
        marginTop: 20,
        justifyContent: "center",
      }}
    >
      <CircularProgress sx={{ marginRight: 2 }} />
      <Typography variant="h4"> Loading...</Typography>
    </Box>
  );
};

export default AllUsers;
