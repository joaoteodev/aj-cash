import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
  }
`;

interface totalContainerProps {
  status: boolean;
}

const colors = {
  green: "#33CC95",
  red: "#e52e4d"
};

export const TotalContainer = styled.div<totalContainerProps>`
  &.highlight-background {
    background: ${props => (props.status === true ? colors.green : colors.red)};
    color: #fff;
  }
`;
