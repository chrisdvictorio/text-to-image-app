import { House, Image, ImagePlus } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="hidden xl:block my-10 ml-10 p-3 border rounded-xl shadow-lg w-80 bg-[#F9F9F9] space-y-8">
      <h2 className="text-center mt-8 text-xl">Logo Here</h2>
      <ul className="space-y-2">
        <li className="w-full">
          <Link href="/">
            <Button variant={"outline"} className="py-6 w-full justify-start">
              <House className="w-16 h-16" />
              <p>Home</p>
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/images">
            <Button variant={"outline"} className="py-6 w-full justify-start">
              <Image />
              <p>Images</p>
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/images/create">
            <Button variant={"outline"} className="py-6 w-full justify-start">
              <ImagePlus />
              <p>Generate Image</p>
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
