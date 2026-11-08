type ReduxTodoFormProps = {
  title: string;
  setTitle: (title: string) => void;
  editingId: string | null;
  onSave: () => void;
};

export default function ReduxTodoForm({
  title,
  setTitle,
  editingId,
  onSave,
}: ReduxTodoFormProps) {
  return (
    <div className="mb-2 flex flex-wrap gap-2">
      <input
        id="wd-redux-todo-title"
        className="rounded border border-neutral-300 px-2 py-1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        type="button"
        id="wd-redux-add-todo"
        className="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
        onClick={onSave}
      >
        {editingId ? "Update" : "Add"}
      </button>
    </div>
  );
}
