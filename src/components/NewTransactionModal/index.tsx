import Modal from "react-modal";
import incomeImg from "../../assets/in.svg"
import outcomeImg from "../../assets/out.svg"
import closeImg from "../../assets/close.svg"

import { api } from "../../services/api";

import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { FormEvent, useState } from "react";

interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: newTransactionModalProps) {
  const [title, setTitle] = useState("")
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState("")
  const [transactionType, setTransactionType] = useState("deposit");

  function handleCreateNewTransaction(event : FormEvent) {
    event.preventDefault()
    // onRequestClose()

    const dataw = ({
      title,
      value,
      category,
      transactionType
    })

    api.post("/transactions", dataw)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
      <button
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setTransactionType("deposit")}
            isActive={transactionType === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setTransactionType("withdraw")}
            isActive={transactionType === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button
        type="submit"
        >
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}