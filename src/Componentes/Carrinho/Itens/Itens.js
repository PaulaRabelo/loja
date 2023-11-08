import React from "react";
import { ConjuntoDeItens } from "./estiloDosItens";

function Itens(props) {

  console.log(props.quantidade)
  return (
    <ConjuntoDeItens>
      <img src={props.imagem} />
      {/* <p>{props.quantidade}x</p> */}
      <div>
      <p>{props.nome}</p>
      <p>{props.quantidade}</p>
      <button onClick={props.itemBotao}>{props.texto}</button>
      </div>
    </ConjuntoDeItens>
  );
}

export default Itens;
