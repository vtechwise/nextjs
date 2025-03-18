import { fetchUsers } from "@/utils/actions";
import DeleteBtn from "./DeleteBtn";

async function UserLists() {
  const users = await fetchUsers();
  return (
    <div className="mt-4">
      {users.length ? (
        <div>
          {users.map((user) => {
            return (
              <h4
                className="text-xl capitalize flex justify-between items-center  mb-4"
                key={user.id}
              >
                {user.firstName} {user.lastName}
                <DeleteBtn id={user.id} />
              </h4>
            );
          })}
        </div>
      ) : (
        <div>
          {" "}
          <h2 className="texl-lg"> No user found</h2>
        </div>
      )}
    </div>
  );
}
export default UserLists;
