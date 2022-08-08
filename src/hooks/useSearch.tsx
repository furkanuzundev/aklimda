const useSearch = (list: NoteProps[], searchText) => {
  return list.filter(
    (obj) =>
      obj.title.toUpperCase().includes(searchText.toUpperCase()) ||
      obj.content.toUpperCase().includes(searchText.toUpperCase())
  );
};

export default useSearch;
