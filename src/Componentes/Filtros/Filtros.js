import React, { useState } from "react";
import { Filtro, GrupoDeFiltros } from "./estiloDoFiltro";

function Filtros({setFiltroMinimo, setFiltroMaximo,filtroMaximo,filtroMinimo, filtroBuscaPorNome, setFiltroBuscaPorNome  }) {
  
  
 

  return (
    <GrupoDeFiltros>
      <h2>Filtros</h2>
      <Filtro>
        Filtro Mínimo:
        <input
          type={"number"}
          value={filtroMinimo}
          onChange={(e)=>{setFiltroMinimo(e.target.value)}}
          />
      </Filtro>

      <Filtro>
        Filtro Máximo:
        <input
          type={"number"}
          value={filtroMaximo}
          onChange={(e)=>{setFiltroMaximo(e.target.value)}}
          />
      </Filtro>

      <Filtro>
        Busca por nome:
        <input
          type={"text"}
          value={filtroBuscaPorNome}
          onChange={(e)=>{setFiltroBuscaPorNome(e.target.value)}}
        />
      </Filtro>
    </GrupoDeFiltros>
  );
}

export default Filtros;
