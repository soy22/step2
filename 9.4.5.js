const Box = styled.div`
  /* props로 넣어 준 값을 직접 전달해 줄 수 있습니다. */
  background: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;
  /* 기본적으로는 가로 크기 1024px에 가운데 정렬을 하고
    가로 크기가 작아짐에 따라 크기를 줄이고
    768px 미만이 되면 꽉 채웁니다. */
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;