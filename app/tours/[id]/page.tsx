function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h2 className="text-2xl">ID :{params.id}</h2>
    </div>
  );
}
export default page;
