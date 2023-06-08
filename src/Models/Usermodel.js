import { useState,useEffect } from 'react';

const useUserModel = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    localStorage.setItem('dataKey', JSON.stringify(users));
    // var users = localStorage.getItem("datakey") || JSON.stringify([]);
    // users = JSON.parse(users);
  //   const savedItem = localStorage.getItem("datakey");
  // const parsedItem = JSON.parse(savedItem);
  // return parsedItem || "";
  }, [users]);

  

//   const [users, setUsers] = useState ( () => {
  
// });
  
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

 

