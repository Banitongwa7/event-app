import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="grid h-screen place-content-center">
      <h1 className="text-4xl">Event App</h1>
      <Button variant={"destructive"} className="px-10">Delete</Button>
    </main>
  );
}
