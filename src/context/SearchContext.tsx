import { createContext, useState, Dispatch, SetStateAction } from 'react';

interface SearchContextType {
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>
}

// Create the context
export const SearchContext = createContext<SearchContextType>({
  searchText: '',
  setSearchText: () => {},
});

interface Props {
  children: any
}

// Create the context provider
export const SearchProvider = ({ children }: Props) => {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};
