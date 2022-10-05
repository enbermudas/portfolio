import { Textarea } from "./Notepad.styled";

interface NotepadProps {
  text: string
};

const Notepad = ({
  text
}: NotepadProps) => {
  return (
    <Textarea value={text} onChange={() => {}}/>
  )
};

export default Notepad;
