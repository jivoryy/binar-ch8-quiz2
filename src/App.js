import { useState } from "react";
import UserTable from "./components/UserTable/userListTable";
import UserForm from "./components/UserForm/userForm";

function App() {
  const SEEDERS_TEMP = [
    {
      username: "PussySlayer613",
      email: "pussy.slay3r@gmail.com",
      experience: 600000,
      lvl: 600,
    },
    {
      username: "HardcoreLevellingWarrior",
      email: "hclw@gmail.com",
      experience: 600000,
      lvl: 666,
    },
  ];

  const [userData, setUserData] = useState(SEEDERS_TEMP);

  const addUser = (data) => {
    setUserData((prevState) => {
      return [...prevState, data];
    });
  };

  return (
    <div className="container">
      <div className="text-end mt-4">
        <UserForm onAddUser={addUser} />
      </div>
      <UserTable user={userData} />
    </div>
  );
}

export default App;
