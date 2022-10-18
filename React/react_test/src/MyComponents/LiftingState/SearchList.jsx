import { useState } from 'react';
import SearchBar from './SearchBar';

function SearchList() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [newItem, setNewItem] = useState('');

  const addNewItem = (event) => {
    event.preventDefault();
    setItems((currentItems) => [...currentItems, { name: newItem, qty: 1 }]); // ?
    setNewItem('');
  };

  const removeItem = (index) => {
    const cloneItems = [...items];
    cloneItems.splice(index, 1);
    setItems(cloneItems);
  };

  return (
    <div>
      <form onSubmit={addNewItem}>
        <label htmlFor="newItem">
          New Item: <input type="text" id="newItem" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
        </label>
        <button type="submit">Add New</button>
      </form>
      <br />
      <label>Search <SearchBar text={search} changeHandler={(e) => setSearch(e.target.value)} /></label>
      {
            items
              .filter((item) => item.toLowerCase().startsWith(search.toLowerCase()))
              .map((item, i) => (
                <p>
                  {`${item} `}
                  <button type="button" onClick={() => removeItem(i)}>X</button>
                </p>
              ))
        }    

    </div>
  );
}

export default SearchList;