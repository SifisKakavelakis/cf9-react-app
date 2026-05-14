import { Component } from "react";
import CounterButton from "./CounterButton.tsx";
type State = {
    count: number;
}

class ClassCounter extends Component<object, State>{
constructor(props: object) {
    super(props);
    this.state = {count: 0};
}

increaseCount = () => {
    this.setState({count: this.state.count + 1});
}

render() {
    return (
        <>
            <h1 className="text-center">
                Count is {this.state.count}
                <div className="text-center space-x-4 pt-12">
                    <CounterButton
                        onClick={this.increaseCount}
                        label="Increase"
                    />
                </div>
            </h1>
        </>
    )
}
}

export default ClassCounter;