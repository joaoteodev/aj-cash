import { useTransactions } from "../../hooks/useTransactions";

import removeImg from "../../assets/close.svg"

import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions, deleteTransaction } = useTransactions();
  
 
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL"
              }).format(transaction.amount)}</td>
              <td>{transaction.category}</td>
              <td>
              {new Intl.DateTimeFormat("pt-BR").format(
                new Date(transaction.createdAt)
                )}
              </td>
              <td onClick={() => deleteTransaction(transaction.id)} className="remove-transaction">
                <img src={ removeImg } alt="Remover transação"/>
              </td>
          </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}