import Image from "next/image";
import React from "react";

export default function image() {
  return (
    <div>
      <h1 className="text-5xl">hello world</h1>
      <Image src="/logo.webp" alt="" width={200} height={200} />
    </div>
  );
}
