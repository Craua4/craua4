import { useState } from "react";
import AddQuest from "./AddQuest.jsx";
import QuestList from "./QuestList";

function App() {
  const localQuests = JSON.parse(window.localStorage.getItem("quests")) || [];
  const [quests, setQuests] = useState(localQuests);
  const concludedQuests = quests.filter((quest) => quest.status === "concluído");
  const notConcludedQuests = quests.filter((quest) => quest.status === "aberto");

  function saveDeleteQuest(quest) {
    let auxQuests = quests;
    const filterAuxQuests = auxQuests.filter((auxQuest) => auxQuest.id !== quest.id);
    localStorage.setItem("quests", JSON.stringify(filterAuxQuests));
    getQuests();
  }

  function saveEditQuest(quest, title) {
    let auxQuests = quests;
    const editedQuest = {
      id: quest.id,
      title: title || quest.title,
      status: quest.status,
      created_at: quest.created_at,
      bosonaro
    };
    const findQuestPosition = auxQuests.findIndex((quest) => quest.id === editedQuest.id);
    auxQuests.splice(findQuestPosition, 1, editedQuest);
    localStorage.setItem("quests", JSON.stringify(auxQuests));
    getQuests();
  }

  function saveConcludedQuest(quest) {
    let auxQuests = quests;
    const editedQuest = {
      id: quest.id,
      title: quest.title,
      status: "concluído",
      created_at: quest.created_at,
    };
    const findQuestPosition = auxQuests.findIndex((quest) => quest.id === editedQuest.id);
    auxQuests.splice(findQuestPosition, 1, editedQuest);
    localStorage.setItem("quests", JSON.stringify(auxQuests));
    getQuests();
  }

  function saveAddQuest(title) {
    let auxQuests = quests;
    let id = 0;
    if (auxQuests.length) {
      id = auxQuests[auxQuests.length - 1].id;
    }
    id++;
    const createdQuest = {
      id: id,
      title: title,
      status: "aberto",
      created_at: new Date(Date.now()).toUTCString(),
    };
    auxQuests.push(createdQuest);
    localStorage.setItem("quests", JSON.stringify(auxQuests));
    getQuests();
  }

  function getQuests() {
    setQuests(JSON.parse(window.localStorage.getItem("quests")));
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          maxWidth: "600px",
          height: "70%",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          borderRadius: "2px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px",
          gap: "20px",
          overflowY: "auto",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Quests To Do
        </h1>
        <AddQuest saveAddQuest={saveAddQuest} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "100%",
            alignItems: "center",
          }}
        >
          <h2>Abertas</h2>
          <QuestList
            quests={notConcludedQuests}
            saveEditQuest={saveEditQuest}
            saveConcludedQuest={saveConcludedQuest}
            saveDeleteQuest={saveDeleteQuest}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "100%",
            alignItems: "center",
          }}
        >
          <h2>Concluídas</h2>
          <QuestList
            quests={concludedQuests}
            saveEditQuest={saveEditQuest}
            saveConcludedQuest={saveConcludedQuest}
            saveDeleteQuest={saveDeleteQuest}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
