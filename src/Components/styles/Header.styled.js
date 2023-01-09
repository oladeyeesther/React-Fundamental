import styled from "styled-components";
export const StyledHeader = styled.header`
/* background-color: ${(props) => props.bg}; */
// OR background-color: ${({ bg}) => bg}

background-color: ${({ theme }) => theme.colors.header};
h1{
    color: red;
}
`