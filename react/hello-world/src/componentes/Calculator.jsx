import { useState } from "react";
import { evaluate } from "mathjs";

const styles = {
  wrapper: {
    display: "grid",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1)",
    width: "360px",
    fontSize: "1.5rem",
    fontWeight: "700",
  },
  display: {
    backgroundColor: "#CCD5AE",
    color: "white",
    minHeight: "180px",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: "2rem",
    gap: "1rem",
  },
  inputText: {
    display: "flex",
    width: "fit-content",
    justifySelf: "flex-end",
    fontSize: "1.25rem",
  },
  resultRow: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    fontSize: "3rem",
  },
  resultValue: {
    display: "flex",
    height: "fit-content",
  },
  buttons: {
    backgroundColor: "white",
    flexGrow: 1,
    height: "480px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    cursor: "pointer",
    fontSize: "1.5rem",
    fontWeight: "700",
    backgroundColor: "white",
    transition: "opacity 0.3s ease, color 0.3s ease",
  },
  btnClear: {
    backgroundColor: "#FEFAE0",
  },
  btnOperator: {
    backgroundColor: "#E9EDC9",
    color: "#D4A373",
  },
  btnEquals: {
    backgroundColor: "#FEFAE0",
  },
  btnDel: {
    fontSize: "0.875rem",
  },
  spacer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E9EDC9",
  },
};

function CalcButton({ style, onClick, children}) {
    const [hovered, setHovered] = useState(false);
    return (
        <button
            style={{
                ...styles.btn,
                ...style,
                ...(hovered ? { opacity: 0.75, color: "#CCD5AE" } : {}),
            }}
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
        </button>
    );
}

export function Calculator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value) => setInput((prev) => prev + value);

    const handleCalculate = () => {
        try {
            if (!input) return;
            setResult(evaluate(input).toString());
        } catch (error) {
            setResult("Error")
            console.error(error);
        }
    };

    const handleClear = () => {setInput("");setResult("");};
    const handleDelete = () => setInput((prev) => prev.slice(0, -1));

    return (
        <div style={styles.wrapper}>
            <div style={styles.display}>
                <span style={styles.inputText}>{input}</span>

                <div style={styles.resultRow}>
                    <span>=</span>
                    <span style={styles.resultValue}>{result}</span>
                </div>
            </div>
            <div style={styles.buttons}>
                <CalcButton style={styles.btnClear} onClick={handleClear}>C</CalcButton>
                <CalcButton style={styles.btnOperator} onClick={() => handleClick("+")}>+</CalcButton>
                <CalcButton style={styles.btnOperator} onClick={() => handleClick("-")}>-</CalcButton>
                <div style={styles.spacer} />

                <CalcButton onClick={() => handleClick("7")}>7</CalcButton>
                <CalcButton onClick={() => handleClick("8")}>8</CalcButton>
                <CalcButton onClick={() => handleClick("9")}>9</CalcButton>
                <div style={styles.spacer} />

                <CalcButton onClick={() => handleClick("4")}>4</CalcButton>
                <CalcButton onClick={() => handleClick("5")}>5</CalcButton>
                <CalcButton onClick={() => handleClick("6")}>6</CalcButton>
                <div style={styles.spacer} />

                <CalcButton onClick={() => handleClick("1")}>1</CalcButton>
                <CalcButton onClick={() => handleClick("2")}>2</CalcButton>
                <CalcButton onClick={() => handleClick("3")}>3</CalcButton>
                <div style={styles.spacer} />

                <CalcButton onClick={() => handleClick(".")}>.</CalcButton>
                <CalcButton onClick={() => handleClick("0")}>0</CalcButton>
                <CalcButton style={styles.bntDel} onClick={handleDelete}>DEL</CalcButton>
                <CalcButton style={styles.bntEquals} onClick={handleCalculate}>=</CalcButton>
            </div>
        </div>
    );
}