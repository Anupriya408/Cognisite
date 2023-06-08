import { useState,useEffect } from 'react';
import axios  from 'axios';

const useUserModel = () => {
  const [users, setUsers] = useState([]);


  // const getData = () => {
  //   var requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };

  //   fetch("http://localhost:8080/users", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => setUsers(result))
  //     .catch((error) => console.log("error", error));
  // };

  // useEffect(() => {
  //   getData();
  // }, []);


  // useEffect(() => {
    // localStorage.setItem('dataKey', JSON.stringify(users));
   

   
  // }, [users]);

  // axios.post( "http://localhost:3000/",users)


  
  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const getUserByMobileAndPassword = (mobile, password) => {
    return users.find((user) => user.mobile === mobile && user.password === password);
  };

  return {
    users,
    addUser,
    getUserByMobileAndPassword
  };
};

export default useUserModel;

 

