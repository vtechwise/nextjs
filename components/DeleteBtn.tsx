import { deleteUser } from "@/utils/actions";

function DeleteBtn({ id }: { id: string }) {
  return (
    <form action={deleteUser}>
      <input type="hidden" name="id" value={id} />
      <button className="bg-red-500 text-white text-sm p-2 rounded">
        delete
      </button>
    </form>
  );
}
export default DeleteBtn;
