import styled from "@emotion/styled";

const StyledFlex = styled.div`
  display: flex;
  ${({ direction }) => `flex-direction: ${direction};`}
`;

const RemoveBookModal = ({ children, direction = "row", ...props }) => {
  return <div {...props}>{children}</div>;
};

export default RemoveBookModal;
