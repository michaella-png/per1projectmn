import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages} from "~/server/queries"

/*const mockUrls = [
  "https://utfs.io/f/182c8988-2780-4ff3-b3d8-9b73bc91b801-1ody.jpg",
  "https://utfs.io/f/556971d5-4e5f-43d8-a4bc-454c055591bc-nm33wo.jpg",
  "https://utfs.io/f/947917f2-8143-4bee-a096-9003bb92c29e-1ody.jpg",
  "https://utfs.io/f/ba6c56d7-a117-42f6-bd28-0f19e396b68d-1ody.jpg",
  "https://utfs.io/f/0fe8a03d-b38a-4281-9c0c-f7fe4750fdf1-1ody.jpg",
  "https://utfs.io/f/25655a47-22ce-40f6-b766-c9b1b42bef73-nm33wo.jpg"
  ];

  const mockImages = mockUrls.map((url, index) => ({
    id: index +1,
    url,
  }));*/

export default async function HomePage() {
  const images = await getMyImages().catch((error) => {
    console.error(error);
    return null;
  });
  return (
    <main className="bg-orange-200">
      <div className="flex flex-wrap gap-4">
        {images != null && images.map((image, index) => (
          <div key={image.id} className="w-48 text-orange-700 text-xl rounded-xl border-8 shadow-lg cursor-grab">
            <img src={image.url} />
            <div>{image.name}</div>
            <div className="text-sm text-orange-450">{image.createdAt.toString()}</div>

      </div>
      ))}
    </div>
  </main>
 );
}
