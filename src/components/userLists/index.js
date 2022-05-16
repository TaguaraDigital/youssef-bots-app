import { useEffect, useState } from "react";
import UserListsTableHeader from "./UserListsTableHeader";
import UserListsRowRO from "./UserListsRowRO";
import styles from "./userLists.module.scss";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();

        setUsers(data);
        setIsLoading(false);
        console.log(data, isLoading);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.section}>
      {isLoading && <h1> Buscando Usuarios .....</h1>}
      {!isLoading && (
        <>
          <h2 className={styles.title}> Usuarios</h2>
          <table className={styles.table}>
            <UserListsTableHeader />
            <tbody>
              {users &&
                users.length > 0 &&
                users.map((user, i) => {
                  return <UserListsRowRO key={user.id} user={user} />;
                })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default UserList;
