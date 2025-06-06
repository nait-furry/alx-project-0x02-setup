import React from "react";

import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex gap-4">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/home" className="hover:underline">/home</Link>
      <Link href="/about" className="hover:underline">/about</Link>
    </header>
  );
};

export default Header;

