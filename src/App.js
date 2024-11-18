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
  return <h1>Luggage List </h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>List all the things you need for your trip</h3>
    </div>
  );
}

function PackageList() {
  return <div className="list">List</div>;
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
