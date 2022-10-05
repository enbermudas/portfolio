import { useState } from "react";
import { Textarea } from "./Notepad.styled";

interface NotepadProps {
  text: string;
};

const Notepad = ({
  text
}: NotepadProps) => {
  const [content, setContent] = useState(text);

  return (
    <Textarea value={content} onChange={(e) => setContent(e.target.value)} autoFocus/>
  )
};

export default Notepad;
