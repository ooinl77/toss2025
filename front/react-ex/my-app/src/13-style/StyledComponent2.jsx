import styled from "styled-components";

const Button = styled.button`
  color: grey;
  background-color: yellow;
  border: 2px solid green;
`;

const RoundedButton = styled(Button)`
  border-radius: 16px;
`;

function StyledComponent2() {
  return (
    <div>
      <Button>Normal</Button>
      <RoundedButton>RoundedButton</RoundedButton>
    </div>
  );
}
export default StyledComponent2;
