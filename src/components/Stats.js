export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>
          No items yet? Let’s gear up and get that packing list ready! 🎒🚀
        </em>
      </p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Packing perfection! Now go make some memories. 📸✈️"
          : `You have ${
              numItems === 1 ? "1 item" : `${numItems} items`
            } in your list. You have already packed
        ${numPacked} items (${percentage}%)`}
      </em>
    </footer>
  );
}
