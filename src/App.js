import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLuggageCart } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const sampleItems = [
  { id: 1, description: "Keys", quantity: 3, packed: false },
  { id: 2, description: "Wallets", quantity: 1, packed: true },
  { id: 3, description: "Suitcases", quantity: 4, packed: false },
  { id: 4, description: "umberallas", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackageList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <h1>
      Luggage List{" "}
      <FontAwesomeIcon icon={faLuggageCart} className="icon-luggage" />
    </h1>
  );
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>List all the things you need for your trip</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item" />
      <button>Add</button>
    </form>
  );
}

function PackageList() {
  return (
    <div className="list">
      <ul>
        {sampleItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>
        <FontAwesomeIcon icon={faClose} className="icon-close" />
      </button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        You have Y items in your list. You have already packed Y (Y%) items.
      </em>
    </footer>
  );
}
