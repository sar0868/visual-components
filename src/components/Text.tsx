import { useState } from "react";

export function Text() {
  const [text, setText] = useState();

  return <p>{text}</p>;
}
