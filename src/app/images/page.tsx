import { Button } from "@/components/ui/button";
import Link from "next/link";

const ImagesPage = () => {
  return (
    <div className="p-8 border rounded-xl shadow-lg h-full flex flex-col gap-4 bg-[#F9F9F9]">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Images</h2>
        <Link href="/images/create">
          <Button size="sm">Generate Image</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-8 h-full">
        <div className="flex items-center justify-center h-96 md:h-full rounded-lg border shadow-md bg-white">
          <p>Add</p>
        </div>
        <div className="h-96 md:h-full rounded-lg border shadow-md bg-white"></div>
        <div className="h-96 md:h-full rounded-lg border shadow-md bg-white"></div>
        <div className="h-96 md:h-full rounded-lg border shadow-md bg-white"></div>
        <div className="h-96 md:h-full rounded-lg border shadow-md bg-white"></div>
        <div className="h-96 md:h-full rounded-lg border shadow-md bg-white"></div>
        <div className="h-96 md:h-full rounded-lg border shadow-md bg-white"></div>
      </div>
    </div>
  );
};

export default ImagesPage;
