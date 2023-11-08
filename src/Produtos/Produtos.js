import React from "react";

import { CabecalhoDiv, GrupoDeCartoes } from "./estiloDosProdutos";
import Itens from "../Componentes/Carrinho/Itens/Itens";
import Cabecalho from "../Componentes/Cabecalho/Cabecalho";

function Produtos(props) {

  // const adicionarProdutoNoCarrinho = (produto) => {
    
  //   const produtoNoCarrinho = props.carrinho.filter((item) => {
  //     if (item.id === produto.id) {
  //       return item;
  //     } else {
  //       return false;
  //     }
  //   });

  //   if (produtoNoCarrinho.length === 0) {
      
  //     produto.quantidade = 1;
  //     console.log("adicionar mais um",produto.quantidade)
      
  //     const novoCarrinho = [produto, ...props.carrinho];
  //     props.setCarrinho(novoCarrinho);
      
  //     console.log("adicionar novo produto",novoCarrinho)
  //   } 
    
  //   else {
  //     const novoCarrinho = props.carrinho.map((item) => {
  //       if (produto.id === item.id) {
  //         debugger
  //         return { ...item, quantidade: item.quantidade + 1 };
  //       } else {
  //         return item;
  //       }
  //     });

  //     props.setCarrinho(novoCarrinho);
  //   }
  //   adicionarValorTotal(produto.price);
  // };

  const adicionarProdutoNoCarrinho = (produto) => {
    const carrinhoAtualizado = [...props.carrinho];
    const produtoExistente = carrinhoAtualizado.find((item) => item.id === produto.id);
  
    if (produtoExistente) {
      // Verifica se a quantidade em estoque é maior que a quantidade no carrinho
      if (produtoExistente.quantidade <= produto.quantidade) {
        produtoExistente.quantidade += 1;
        
        produto.quantidade -=1
        
      } else {
        alert("Quantidade disponível insuficiente.");
      }
    } else {
      if (produto.quantidade > 0) {
        const produtoNoCarrinho = { ...produto, quantidade: 1 };
      carrinhoAtualizado.push(produtoNoCarrinho);
      produto.quantidade -= 1;
      } else {
        alert("Produto esgotado.");
      }
    }
  
    props.setCarrinho(carrinhoAtualizado);
    adicionarValorTotal(produto.price);
  };
  


  
  
  const adicionarValorTotal = (valor) => {
    props.setValorTotal(props.valorTotal + valor);
  };
  
  const produtosOrdenados =
    props.produtos &&
    props.produtos.sort((a, b) => {
      if (props.ordenacao === "Crescente") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  const produtosMapeados =
    produtosOrdenados &&
    produtosOrdenados.map((produto) => {
      return (
        <Itens
          key={produto.id}
          imagem={produto.photo}
          nome={produto.name}
          quantidade={produto.quantidade}
          valor={produto.price}
          itemBotao={() => adicionarProdutoNoCarrinho(produto)}
          texto={"Adicionar"}
        />
      );
    });

  return (
    <div>
      <Cabecalho/>
      <CabecalhoDiv>
        <p>Quantidade de produtos: {props.quantidade}</p>
        <label>
          Ordenação:
          <select onChange={props.onChangeCabecalho}>
            <option value={"Crescente"}>Crescente</option>
            <option value={"Decrescente"}>Decrescente</option>
          </select>
        </label>
      </CabecalhoDiv>
      <GrupoDeCartoes>{produtosMapeados}</GrupoDeCartoes>
    </div>
  );
}

export default Produtos;
