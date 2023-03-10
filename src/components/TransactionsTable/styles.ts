import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tr {
      position: relative;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }

      &.remove-transaction {
        position: absolute;
        right: 0;
        cursor: pointer;
        background: none;
        transition: filter 0.3s, background 0.3s;

        &:hover {
          filter: brightness(0.9);
          background: ${darken(0.1, "#fff")};
        }
      }
    }
  }
`;
