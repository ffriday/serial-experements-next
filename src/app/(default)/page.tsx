import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <h1>HOME</h1>
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 my-3 bg-slate-800">
          {i}
        </div>
      ))}
    </main>
  );
}
