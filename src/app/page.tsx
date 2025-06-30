import { Button } from "@/components/ui/button";
import DarkModeToggle from "./_components/DarkModeToggle";

export default function Home() {
  return (
    <main className="py-10 px-6 max-w-screen-2xl mx-auto h-screen space-y-20">
      <div className="flex justify-between items-center border-2 p-5 rounded-xl">
        <Button variant="primary">دکمه</Button>
        <p className="text-foreground">این یک متن تستی است</p>
        <DarkModeToggle />
      </div>

      <div className="grid gap-4 lg:gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,1fr)] px-2">
        {/* desktop category section*/}
        <div className="border-2 rounded-xl hidden md:flex items-center justify-center md:col-span-4 lg:col-span-3 row-span-2">
          Sidebar
        </div>

        {/* desktop sort section */}
        <div className="border-2 rounded-xl hidden md:flex items-center justify-center md:col-span-8 lg:col-span-9">
          Top bar
        </div>

        {/* blogs section */}
        <div className="border-2 rounded-xl flex items-center justify-center md:col-span-8 lg:col-span-9">
          Content
        </div>
      </div>
    </main>
  );
}
