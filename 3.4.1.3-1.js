onClick={() => {
    // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
    this.setState({ number: number + 1 });
    this.setState({ number: this.state.number + 1 });
  }}  