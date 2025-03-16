import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="max-w-3xl mx-auto mt-10">
      <div className="flex gap-x-4 border-b-2 pb-4">
        <Link href={"/"} className="text-2xl font-normal">
          Home
        </Link>
        <Link href={"/tours"} className="text-2xl font-normal">
          Contact
        </Link>
        <Link href={"/user"} className="text-2xl font-normal">
          User
        </Link>
        <Link href={"/tours"} className="text-2xl font-normal">
          Tours
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
