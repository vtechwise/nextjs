import { fetchUsers } from "@/utils/actions";

async function UserLists() {
  const users = await fetchUsers();
  return (
    <div className="mt-4">
      {users.length ? (
        <div>
          {users.map((user) => {
            return (
              <h4 className="text-xl capitalize" key={user.id}>
                {user.firstName} {user.lastName}
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
