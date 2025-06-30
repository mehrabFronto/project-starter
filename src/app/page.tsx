import { Button } from "@/components/ui/button";
import DarkModeToggle from "./_components/DarkModeToggle";

export default function Home() {
  return (
    <main className="p-10 max-w-screen-2xl mx-auto flex justify-between items-center">
      <Button variant="primary">دکمه</Button>
      <p className="text-foreground">این یک متن تستی است</p>
      <DarkModeToggle />
    </main>
  );
}
