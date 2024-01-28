import React from "react";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [text,setText] = useState('Hi');
  const handleonChange = (event:ChangeEvent<HTMLInputElement>)=>{
    setText(event.target.value)
  }
  return (
    <h1>Hello</h1>
  );
}
