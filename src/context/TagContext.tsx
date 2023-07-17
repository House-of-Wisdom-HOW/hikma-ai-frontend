import { createContext, useState, Dispatch, SetStateAction } from 'react';

interface TagContextType {
  selectedTags: string[]
  setSelectedTags: Dispatch<SetStateAction<string[]>>
}

// Create the context
export const TagContext = createContext<TagContextType>({
  selectedTags: [],
  setSelectedTags: () => {},
});

interface Props {
  children: any
}

// Create the context provider
export const TagProvider = ({ children }: Props) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <TagContext.Provider value={{ selectedTags, setSelectedTags }}>
      {children}
    </TagContext.Provider>
  );
};
