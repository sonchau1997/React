import React from "react";
export class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0,loading:true }
        
    }
    onDecrease = () => {
        this.setState({ count: this.state.count - 1 })

    }
    onIncrease = () => {
        this.setState({ count: this.state.count + 1 })

    }
    componentDidMount() {
        setTimeout(() => {
             this.setState({ loading: false }); }, 4000);
    }

    render() {
        console.log('renderrr');
        return (


            <div>
                {
                    this.state.loading ?(
                        <div>Loadingggggg</div> ):(

                        <>
                            <button onClick={() => this.onDecrease()}>-</button>
                            <span>{this.state.count}</span>

                            <button onClick={() => this.onIncrease()}  >+</button>
                        </>)
                }

            </div>

        )
    }

}