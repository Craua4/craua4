import React from "react";

export default class Counter extends React.Component {
    constructor() {
        super();
        // Define o estado inicial como 0
        this.state = {
            count: 0,
        };
    }


    //Método para implementar o valor do contador
    incrementar = () => {
        this.setState((prev) => ({
            count: prev.count +1, // Atualiza o estado
        }));
    };


    render() {
        return (
            <div>
                <h1>Contador: {this.state.count}</h1>
                <button onClick={this.incrementar}>Incrementar</button>
            </div>
        );
    }
}