import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkle } from "lucide-react";

const GenerateImage = () => {
  return (
    <div className="p-4 md:p-8 border rounded-xl shadow-lg h-full flex flex-col gap-4 bg-[#F9F9F9]">
      <h2 className="text-lg font-medium">Generate Image</h2>
      <div className="w-full h-full border rounded-lg">
        <form className="flex gap-4 p-4 h-full">
          <div className="flex flex-col w-full space-y-4 ">
            <div className="flex items-center justify-center h-full rounded-lg border p-4">
              Image here
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <p>Describe what image you want.</p>
                <Input placeholder="Enter your prompt." />
              </div>
              <div className="flex gap-4 ">
                <Button variant="outline" className="w-full">
                  Cancel
                </Button>
                <Button className="w-full">
                  <p>Generate Image</p>
                  <Sparkle fill="#facc15" className="text-yellow-400" />
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GenerateImage;
