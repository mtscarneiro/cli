import React from "react";

export default function AboutCard() {
  return (
    <>
      <div className="commands--card">
        <span>$ </span> cd about
      </div>
      <div className="commands--about">
        <h2>Sobre</h2>
        <p>
          Meu nome é Erik Lopes, tenho 19 anos e sou de Antonina – PR, mas moro
          em São José dos Pinhais, também no Paraná, Atualmente estou buscando
          minha primeira oportunidade no mercado de trabalho como desenvolvedor
          full-stack remoto, área no qual venho estudando há 1 ano.
        </p>
      </div>
    </>
  );
}
