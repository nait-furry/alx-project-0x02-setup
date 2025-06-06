// pages/about.tsx
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">About Page</h1>

        <div className="space-x-4">
          <Button label="Small" size="small" shape="rounded-sm" />
          <Button label="Medium" size="medium" shape="rounded-md" />
          <Button label="Large" size="large" shape="rounded-full" />
        </div>
      </main>
    </div>
  );
}
