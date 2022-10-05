import Icon from "../Icon";

export interface File {
  id: string;
  icon: string;
  name: string;
  onClick: () => void;
};

export interface FolderProps {
  files: File[];
};

const Folder = ({
  files
}: FolderProps) => {
  return (
    <>
      {!!files.length && files.map((file) => {
        return (
          <Icon
            key={file.id}
            title={file.name}
            icon={file.icon}
            onClick={file.onClick}
            testId={`${file.id}-testid`}
            dark
          />
        )
      })}
    </>
  );
};

export default Folder;
