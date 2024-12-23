import { Button } from "@/components/ui/button";
import { Sparkle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center border rounded-xl shadow-lg h-full p-4 gap-12 bg-[#F9F9F9]">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="text-center">
          <h1 className="text-4xl font-light">
            Generate Image with the use of AI
          </h1>
          <p className="text-lg">
            Create Images effortlessly with AI-powered generation.
          </p>
        </div>
        <Link href="/images/create">
          <Button size="lg" className="rounded-full">
            <p>Generate Images</p>
            <Sparkle fill="#facc15" className="text-yellow-400" />
          </Button>
        </Link>
      </div>
      <h2>Tech Stack Used:</h2>
    </div>
  );
}
