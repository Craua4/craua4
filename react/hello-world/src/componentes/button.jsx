import React from "react";

export class ClickButton extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert("Botão Clicado!");
    }

    render() {
        return <button onClick={this.handleClick}>Clique Aqui</button>;
    }
}