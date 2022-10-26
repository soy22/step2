const Box = styled.div`
/* props로 넣어 준 값을 직접 전달해 줄 수 있습니다. */
background: ${props => props.color || 'blue'};
padding: 1rem;
display: flex;
`;