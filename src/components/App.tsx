import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  function onKey(ev: KeyboardEvent) {
    const key = ev.key;

    if (key.length === 1) {
      // 1文字のときは追加する。（他の特殊系のキーを弾いている）
      setText((v) => v + key);
    } else if (key === "Escape") {
      // Escape が押されたときはクリアする。
      setText("");
    } else if (key === "Backspace") {
      // Backspace が押されたときは1文字削除する。
      setText((v) => v.slice(0, -1));
    }
  }

  function onClear() {
    setText("");
  }

  useEffect(() => {
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const [text, setText] = useState("");

  return (
    <div
      style={{
        width: "100%",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "24px" }}>{text.length === 0 ? "　" : text}</p>
      <button
        style={{ fontSize: "small", padding: "0px 1rem" }}
        onClick={onClear}
      >
        Clear
      </button>
    </div>
  );
}

export default App;
