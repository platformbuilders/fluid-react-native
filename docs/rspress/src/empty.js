// Arquivo vazio para substituir módulos problemáticos
export default {};

// Mock para hooks comuns que podem ser esperados
export const useSearch = () => ({
  search: () => [],
  setSearchText: () => {},
  searchText: '',
  searching: false,
  searchResults: []
});
