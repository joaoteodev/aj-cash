import { useContext } from 'react';
import incomeImg from "../../assets/in.svg"
import outcomeImg from "../../assets/out.svg"
import totalImg from "../../assets/total.svg"
import { TransactionsContext } from "../../transactionsContext";

import { Container } from "./styles";


export function Summary() {
  const data = useContext(TransactionsContext)

  console.log(data)
  
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- R$ 500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
}