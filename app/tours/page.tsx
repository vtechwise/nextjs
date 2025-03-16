const url = "https://www.course-api.com/react-tours-projects";

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
            <h2 className="text-xl" key={tour.id}>
              {tour.name}
            </h2>
          );
        })}
      </h1>
    </div>
  );
};
export default ToursPage;
