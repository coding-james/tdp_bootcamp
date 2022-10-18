import { useState } from 'react';
import SearchBar from './SearchBar';

function SearchList() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [newItem, setNewItem] = useState('');

  const addNewItem = (event) => {
    event.preventDefault();
    setItems((currentItems) => [...currentItems, { name: newItem, qty: 1 }]); // When an item created, default qty to 1
    setNewItem('');
  };

  const removeItem = (index) => {
    const cloneItems = [...items];
    cloneItems.splice(index, 1);
    setItems(cloneItems);
  };

  const increaseQty = (index) => {
    const cloneItems = [...items];
    cloneItems.splice(index, 1, { name: cloneItems[index].name, qty: (cloneItems[index].qty + 1) });
    setItems(cloneItems);
  };

  const decreaseQty = (index) => {
    const cloneItems = [...items];
    if(cloneItems[index].qty > 1){
      cloneItems.splice(index, 1, { name: cloneItems[index].name, qty: (cloneItems[index].qty - 1) });
      setItems(cloneItems);
    } else {
      removeItem(); //if user decreases to zero, remove item
    }
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
      {/* OLD CODE PRIOR TO QTY been included in the array */}
      {/* <label>Search <SearchBar text={search} changeHandler={(e) => setSearch(e.target.value)} /></label>
      {
            items
              .filter((item) => item.toLowerCase().startsWith(search.toLowerCase()))
              .map((item, i) => (
                <p>
                  {`${item} `}
                  <button type="button" onClick={() => removeItem(i)}>X</button>
                </p>
              ))
        }     */}

      <label>Search <SearchBar text={search} changeHandler={(e) => setSearch(e.target.value)} /></label>
      {
        items
          .filter((item) => item.name.toLowerCase().startsWith(search.toLowerCase()))
          .map((item, i) => (
            <p>
              {`${item.name} Qty: ${item.qty}`}
              <button type="button" onClick={() => increaseQty(i)}>Qty +</button>
              <button type="button" onClick={() => decreaseQty(i)}>Qty -</button>
              <button type="button" onClick={() => removeItem(i)}>X</button>
            </p>
          ))
      }

      {/* OLD CODE - Figuring out how to display the array */}
      {/* {items.map(item => (
          <p>{item.name} Qty: {item.qty}</p>
        ))} */}

    </div>
  );
}

export default SearchList;