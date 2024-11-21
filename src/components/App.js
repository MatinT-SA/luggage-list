import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackageList from "./PackageList";
import Stats from "./Stats";
import ConfirmModal from "./ConfirmModal";

export default function App() {
  const [items, setItems] = useState([]);
  const [isModalOpen, setisModalOpen] = useState(false);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function closeClearModal() {
    setisModalOpen(false);
  }

  function openClearModal() {
    setisModalOpen(true);
  }

  function handleClearLuggage() {
    setItems([]);
    setisModalOpen(false);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackageList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItem={openClearModal}
      />
      <Stats items={items} />
      {isModalOpen && (
        <ConfirmModal
          onConfirm={handleClearLuggage}
          onCancel={closeClearModal}
        />
      )}
    </div>
  );
}
