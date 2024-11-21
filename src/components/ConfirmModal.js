export default function ConfirmModal({ onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Are you sure you want to clear all the items?</h3>
        <div className="modal-actions">
          <button onClick={onConfirm} className="btn-confirm">
            Yes, Clear All
          </button>
          <button onClick={onCancel} className="btn-cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
