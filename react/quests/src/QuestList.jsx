import QuestItem from "./QuestItem";

export default function QuestList(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        gap: "24px",
        width: "80%",
      }}
    >
      {props.quests.map((quest) => {
        return (
          <QuestItem
            key={quest.id}
            quest={quest}
            saveEditQuest={props.saveEditQuest}
            saveConcludedQuest={props.saveConcludedQuest}
            saveDeleteQuest={props.saveDeleteQuest}
          />
        );
      })}
    </div>
  );
}
