import Table from "react-bootstrap/Table";

function UserTable(props) {
  return (
    <Table striped bordered hover className="mx-auto mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>EXP</th>
          <th>Level</th>
        </tr>
      </thead>
      <tbody>
        {props.user.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.experience}</td>
              <td>{item.lvl}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default UserTable;
