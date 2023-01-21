import { useEffect, useState } from "react";
import incomeImg from "../../assets/in.svg";
import outcomeImg from "../../assets/out.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

import { Container, TotalContainer } from "./styles";

export function Summary() {
  const [status, setStatus] = useState(true)
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {

    if(transaction.type === "deposit") {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  useEffect(() => {
    if(summary.total >= 0) {
      setStatus(true)
    } else {
      setStatus(false)
    }
  }, [summary.total])

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL"
              }).format(summary.deposits)}</strong>
      </div>
      <div> 
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL"
              }).format(summary.withdraws)}</strong>
      </div>
      <TotalContainer className="highlight-background" status={status}>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL"
              }).format(summary.total)}</strong>
      </TotalContainer>
    </Container>
  );
}
