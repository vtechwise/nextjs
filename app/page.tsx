import Link from "next/link";

function page() {
  return (
    <div>
      <h1 className="text-2xl"> Home Page</h1>
      <Link href={"/about"} className="text-red-200 inline-block mt-8">
        about page
      </Link>
    </div>
  );
}
export default page;
