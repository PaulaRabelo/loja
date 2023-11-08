import React from "react";
import { Cartao, TextoDoCartao } from "./estiloDoCartao";


const ItemProdutos = ({imagem, nome, valor, onClick})=> {
 
  console.log(imagem)
    return (
      <Cartao>
        <img src={imagem} />
        <TextoDoCartao>
          <p>{nome}</p>
          <p>R$ {valor},00</p>
          <button onClick={onClick}>Adicionar carrinho</button>
        </TextoDoCartao>
      </Cartao>
    );
  
}

export default ItemProdutos;
