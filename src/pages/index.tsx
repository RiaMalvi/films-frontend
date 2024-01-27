import Image from "next/image";
import { Inter } from "next/font/google";
import { ChangeEvent, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [text,setText] = useState('Hi');
  const handleonChange = (event:ChangeEvent<HTMLInputElement>)=>{
    setText(event.target.value)
  }
  return (
    <h1>Hello</h1>
  );
}
