import React, { useContext } from "react";
import AdminMenu from "../AdminMenu";
import DeleteIcon from "@material-ui/icons/Delete";
import AppContext from "../../context";
import { acceptUser, setUserTeam } from "../../firebase/firebaseUtils";

// const firestore = firebase.firestore();

const Users = () => {
  // useEffect(() => {
  //   usersListCollection.get().then((snapshot) => {
  //     snapshot.forEach((doc) => {
  //       let element = doc.data();

  //       setUsers((prevState) => {
  //         return [
  //           ...prevState,
  //           { nameAndSurname: element.nameAndSurname, email: element.email },
  //         ];
  //       });
  //     });
  //   });
  // }, []);

  const context = useContext(AppContext);

  const usersWithoutAdmins = context.users.filter(
    (user) => user.admin === false,
  );

  return (
    <div className="admin">
      <AdminMenu />
      <div className="users">
        <ul>
          {usersWithoutAdmins.map(
            ({ nameAndSurname, email, id, acceptance, team }, index) => (
              <li key={id}>
                <span>
                  <strong>
                    {index + 1}. {nameAndSurname} - {email}
                  </strong>
                  <select
                    onChange={(e) => setUserTeam(id, e.target.value)}
                    defaultValue={team}
                  >
                    <option>wybierz</option>
                    <option value="orkiestra symfoniczna">
                      Orkiestra Symfoniczna
                    </option>
                    <option value="orkiestra Leopoldinum">
                      Orkiestra Leopoldinum
                    </option>
                    <option value="chór">Chór</option>
                  </select>
                  {acceptance ? (
                    <p>Zaakceptowany</p>
                  ) : (
                    <button onClick={() => acceptUser(id)}>Dodaj</button>
                  )}
                  <DeleteIcon style={{ marginLeft: "10px" }} />
                </span>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
};

export default Users;
