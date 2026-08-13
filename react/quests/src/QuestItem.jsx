import { useState } from "react";

const css = `
  .quest-item {
    display: flex;
    gap: 12px;
    flex-direction: column;
    padding: 12px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  }
  .quest-row {
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
  }
  .quest-checkbox {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    cursor: pointer;
    accent-color: #a8b4ff;
    flex-shrink: 0;
  }
  .quest-checkbox:disabled {
    cursor: not-allowed;
  }
  .quest-title {
    word-break: break-word;
    margin: 0;
    font-size: 15px;
  }
  .quest-title--concluded {
    text-decoration: line-through;
    opacity: 0.45;
  }
  .quest-input {
    border-radius: 8px;
    padding: 6px 12px;
    width: 100%;
    font-size: 14px;
    outline: none;
    border: 1px solid rgba(168, 180, 255, 0.3);
    background: rgba(255, 255, 255, 0.05);
    color: inherit;
    box-sizing: border-box;
  }
  .quest-buttons {
    display: flex;
    gap: 8px;
  }
  .btn-base {
    padding: 6px 16px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    transition: background 0.15s, transform 0.1s;
  }
  .btn-edit {
    background: #2a2f4a;
    color: #a8b4ff;
  }
  .btn-edit:hover {
    background: #3a3f5c;
  }
  .btn-delete {
    background: #3a1f1f;
    color: #ff9090;
  }
  .btn-delete:hover {
    background: #4a2a2a;
  }
`;

export default function QuestItem(props) {
  const [title, setTitle] = useState(props.quest.title);
  const [checked, setChecked] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const concluded = props.quest.status === "concluído";

  return (
    <>
      <style>{css}</style>
      <div className="quest-item" data-testid="questItem">
        <div className="quest-row">
          <input
            disabled={concluded}
            type="checkbox"
            checked={checked}
            className="quest-checkbox"
            onChange={() => {
              if (concluded) return;
              setChecked(!checked);
              props.saveConcludedQuest(props.quest);
            }}
          />
          {editMode && !concluded ? (
            <input
              placeholder="quest"
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
              className="quest-input"
              data-testid="input"
            />
          ) : (
            <p
              className={`quest-title${concluded ? " quest-title--concluded" : ""}`}
              data-testid="title"
            >
              {props.quest.title}
            </p>
          )}
        </div>

        {!concluded && (
          <div className="quest-buttons" data-testid="buttons">
            <button
              data-testid="editButton"
              className="btn-base btn-edit"
              onClick={() => {
                if (editMode) props.saveEditQuest(props.quest, title);
                setEditMode(!editMode);
              }}
            >
              {editMode ? "✓ Salvar" : "✎ Editar"}
            </button>
            <button
              className="btn-base btn-delete"
              onClick={() => {
                if (concluded) return;
                props.saveDeleteQuest(props.quest);
              }}
            >
              ✕ Excluir
            </button>
          </div>
        )}
      </div>
    </>
  );
}