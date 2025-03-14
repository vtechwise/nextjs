import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="max-w-3xl mx-auto mt-10">
      <div className="flex justify-between">
        <Link href={"/home"} className="text-2xl font-bold">
          Home
        </Link>
        <Link href={"/contact"} className="text-2xl font-bold">
          Contact
        </Link>
        <Link href={"/user"} className="text-2xl font-bold">
          User
        </Link>
        <Link href={"/tour"} className="text-2xl font-bold">
          Tour
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
