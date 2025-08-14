import "./App.css";
import { useState } from "react";
import Render from "./components/Render";

function App() {
  const [user, setUser] = useState(["A", "B", "C"]);

  const addUser = (newUser) => {
    setUser([...user, newUser]);
  };

  const deleteUser = (index) => {
    const newUser = [...user];
    newUser.splice(index, 1);
    setUser(newUser);
  };

  return (
    <div className="App">
      <h2>Thêm phần tử</h2>
      <button onClick={() => addUser("D")}>Add</button>

      <h2>Xóa phần tử</h2>
      <button onClick={() => deleteUser(1)}>Delete</button>

      <h2>List</h2>
      <Render data={user} />

      
    </div>
  );
}

export default App;
