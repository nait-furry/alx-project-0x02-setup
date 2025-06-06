// pages/home.tsx
import { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: "Welcome", content: "This is the welcome section of our site." },
    { title: "About the Project", content: "This project demonstrates basic Next.js features." },
  ]);

  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts([...posts, post]);
  };

  return (
    <div>
      <Header />
      <main className="p-8 space-y-4">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Post
        </button>

        <PostModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
    </div>
  );
}
