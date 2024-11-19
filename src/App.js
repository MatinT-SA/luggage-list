import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLuggageCart } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const sampleItems = [
  { id: 1, description: "Keys", quantity: 3, packed: false },
  { id: 2, description: "Wallets", quantity: 1, packed: true },
  { id: 2, description: "Suitcases", quantity: 4, packed: false },
  { id: 2, description: "umberallas", quantity: 1, packed: false },
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
  return (
    <div className="add-form">
      <h3>List all the things you need for your trip</h3>
    </div>
  );
}

function PackageList() {
  return (
    <div className="list">
      <ul>
        {sampleItems.map((item) => (
          <Item item={item} />
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
        You have Y items in your list.you have already packed Y (Y%) items.
      </em>
    </footer>
  );
}
