import image from "@/images/testing (2).jpg";
import Image from "next/image";

const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h2 className="text-2xl">ID :{params.id}</h2>
      <section className="flex gap-x-4">
        {/* local image */}
        <div>
          <Image
            src={image}
            alt="testing img"
            height={192}
            width={192}
            className="w-48 h-48 object-cover rounded"
          />
          <h3>holiday in china</h3>
        </div>
        <div>
          <Image
            src={url}
            alt="testing img"
            height={192}
            width={192}
            className="w-48 h-48 object-cover rounded"
          />
          <h3>holiday in china</h3>
        </div>
      </section>
    </div>
  );
}
export default page;
