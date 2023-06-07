import React from 'react';
import RegisterForm from './views/RegisterForm';
import LoginForm from './views/LoginForm';
import TaskForm from './views/TaskForm';
import UserModel from './Models/Usermodel';

const App = () => {
  const userModel = UserModel();

  const handleRegister = (user) => {
    userModel.addUser(user);
    // Save the user object to a JSON file or backend service
  };

  const handleLogin = (mobile, password) => {
    const user = userModel.getUserByMobileAndPassword(mobile, password);
    if (user) {
      // Perform login logic
      console.log('Login successful');
    } else {
      console.log('Invalid mobile or password');
    }
  };

  const handleAddTask = (task) => {
    // Perform task addition logic
    console.log('Task added:', task);
  };

  return (
    <div  style={{textAlign:"center"}}>
      <h1>Task Manager</h1>
      <RegisterForm onRegister={handleRegister} />
      <LoginForm onLogin={handleLogin} />
      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
};

export default App;
