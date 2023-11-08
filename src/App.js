import React, { useEffect, useState } from "react";
import Carrinho from "./Componentes/Carrinho/Carrinho";
import Filtros from "./Componentes/Filtros/Filtros";

import { ConjuntoDeComponentes } from "./estiloDoApp";
import { pacoteDeProdutos } from "./pacoteDeProdutos";
import Produtos from "./Produtos/Produtos";

function App() {
  const [filtroMinimo, setFiltroMinimo] = useState(10);
  const [filtroMaximo, setFiltroMaximo] = useState(100000);
  const [filtroBuscaPorNome, setFiltroBuscaPorNome] = useState("");

  
  const [ordenacao, setOrdenacao] = useState("Crescente");
  const [carrinho, setCarrinho] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);

    const filtroDeProdutos = ()=>{
      const produtosFiltrados = pacoteDeProdutos
      .filter((item)=>{
          return item.price >= filtroMinimo
      })
      .filter((item)=>{
         return item.price <= filtroMaximo
      })
      .filter((item)=>{
        return item.name.includes(filtroBuscaPorNome)
      })
      return produtosFiltrados;
    }

    const filtrados = filtroDeProdutos();
   
 
 
  const ordenarProdutos = (event) => {
    setOrdenacao(event.target.value);
  };

 


  const removerItemDoCarrinho = (itemParaRemover) => {
    if (itemParaRemover.quantidade === 1) {
      const novoCarrinho = carrinho.filter((item) => {
        if (item.id !== itemParaRemover.id) {
          return item;
        } else {
          return false;
        }
      });
      setCarrinho(novoCarrinho);

    if (novoCarrinho.length !== 0) {
      setValorTotal(valorTotal - itemParaRemover.price);
    }else {
      setValorTotal(0);
    }
  } else {
    const novoCarrinho = carrinho.map((item) => {
      if (itemParaRemover.id === item.id && item.quantidade >= 1) {
        return { ...item,
           quantidade: item.quantidade - 1
          
          };
      } else {
      
        return item;
      }
    });
    setCarrinho(novoCarrinho);
    }
  };

  const removerValorTotal = (valor) => {
    setValorTotal(valorTotal - valor);
  };

 

  return (
    <ConjuntoDeComponentes>
      <Filtros
      filtroMinimo={filtroMinimo}
      setFiltroMinimo={setFiltroMinimo}
      filtroMaximo={filtroMaximo} 
      setFiltroMaximo={setFiltroMaximo}
      filtroBuscaPorNome={filtroBuscaPorNome} 
      setFiltroBuscaPorNome={setFiltroBuscaPorNome}
      />
      <Produtos
        setOrdenacao={setOrdenacao}
        quantidade={filtrados.length}
        onChangeCabecalho={ordenarProdutos}
        ordenacao={ordenacao}
        produtos={filtrados}
        
        carrinho={carrinho}
        setCarrinho={setCarrinho}
        
        setValorTotal={setValorTotal}
        valorTotal={valorTotal}
      />
      <Carrinho
        carrinho={carrinho}
        setCarrinho={setCarrinho}
        valorTotal={valorTotal}
        removerItemDoCarrinho={removerItemDoCarrinho}
        removerValorTotal={removerValorTotal}
      />
    </ConjuntoDeComponentes>
  );
}

export default App;
