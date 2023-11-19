"use client";
import { useState } from "react";
import Tiptap from "@/components/Tiptap";
import config from "@/config";
import Cases from "@/components/Cases";

export default function Home() {
  const [content, setContent] = useState(config.defaultContent);
  const [cases, setCases] = useState([{ input: "hi", output: "world" }]);
  const [currentCase, setCurrentCase] = useState(0);

  return (
    <div className="max-w-screen-md mx-auto my-56">
      <div className="m-5">
        <Tiptap content={content} setContent={setContent} />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-full mx-5">
          <Cases cases={cases} setCases={setCases} currentCase={currentCase} setCurrentCase={setCurrentCase} />
        </div>
      </div>
      <div className="flex justify-end">
      <button className="btn btn-neutral">✨ Let AI code </button>
      </div>
    </div>
  );
}
