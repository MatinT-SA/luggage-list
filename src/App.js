export default function App() {
  return (
    <>
      <Logo />
      <Form />
      <PackageList />
      <Stats />
    </>
  );
}

function Logo() {
  return <h1>Luggage List</h1>;
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
    <footer>
      <em>
        You have Y items in your list.you have already packed Y (Y%) items.
      </em>
    </footer>
  );
}
