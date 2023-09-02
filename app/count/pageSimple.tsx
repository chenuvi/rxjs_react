"use client";

import { useState } from "react";
import { Button } from "antd";
export default function Count() {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    setCount(count + 1);
  };
  const onDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
    <h2 className="text-red-900"> count: { count }</h2>
      <Button onClick={onIncrement}> + 1</Button>
      <Button onClick={onDecrement}> - 1</Button>
    </>
  );
}
