import Link from "next/link";

const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  return data;
};

const ToursPage = async () => {
  const data = await fetchTours();
  return (
    <div>
      <h1 className="text-3xl font-semibold">
        {data.map((tour) => {
          return (
            <Link href={`tours/${tour.id}`} key={tour.id} className="">
              <h2 className="text-xl hover:bg-blue-500">{tour.name}</h2>
            </Link>
          );
        })}
      </h1>
    </div>
  );
};
export default ToursPage;
