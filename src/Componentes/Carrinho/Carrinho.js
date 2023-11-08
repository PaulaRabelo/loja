import React from "react";
import { ConjuntoDoCarrinho } from "./estiloDoCarrinho";
import Itens from "./Itens/Itens";

function Carrinho(props) {
  const itensDoCarrinho =
    props.carrinho &&
    props.carrinho.map((item) => {
      return (
        <Itens
          key={item.id}
          imagem={item.photo}
          quantidade={item.quantidade}
          nome={item.name}
          itemBotao={() => props.removerItemDoCarrinho(item)}
          texto={"Remover"}
        />
      );
    });
    

    const limparCarrinho = (valorTotal) => {
      props.setCarrinho([]); 
      props.removerValorTotal(valorTotal); 
      alert("Carrinho finalizado com sucesso!");
    };
    


  return (
    <ConjuntoDoCarrinho>
      <h2>Carrinho:</h2>
        <div>{itensDoCarrinho}</div>
      <p>Valor total: R$ 
        {props.valorTotal},00
      </p>
      <button 
      onClick={()=>
      {limparCarrinho(props.valorTotal)}
      }>
        Finalizar Compra
      </button>
     
      
        
      
    </ConjuntoDoCarrinho>
  );
}

export default Carrinho;
