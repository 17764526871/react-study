import React, { Component } from 'react';
import ReactDOM from 'react-dom'

//react表单与事件

//实例
class ExampleInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'hello world!'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        })

    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <h4>{this.state.value}</h4>
            </div>
        );
    }
}

ReactDOM.render(
    <ExampleInput></ExampleInput>,
    document.getElementById('example12')
)

//子组件使用表单传递
//father
class ExampleInput1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '这是父子组件input实例'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    render() {
        return (
            <div>
                <Content myData={this.state.value} updateState={this.handleChange}></Content>
            </div>
        );
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }
}
//chriden
class Content extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.myData} onChange={this.props.updateState} />
                <h4>{this.props.myData}</h4>
            </div>
        );
    }
}


ReactDOM.render(
    <ExampleInput1></ExampleInput1>,
    document.getElementById('example12')
)

//select下拉表单
class ExampleInput2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'content'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit}>
                    <label >
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="gg">Google</option>
                            <option value="rn">Runoob</option>
                            <option value="tb">vaobao</option>
                            <option value="fb">Facebook</option>
                        </select>
                    </label>
                </form>
            </div>
        );
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    handleSubmit(e) {
        alert(this.state.value);
        e.preventDefault();

    }
}

ReactDOM.render(
    <ExampleInput2></ExampleInput2>,
    document.getElementById('example12')
)

//多个表单 使用name属性来查找
class ExampleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInput: true,
            number: 2
        }
        this.handleChange = this.handleChange.bind(this)
    }
    render() {
        return (
            <form >
                是否离开:
                <label >
                    <input type="checkbox" name="isInput" checked={this.state.isInput} onChange={this.handleChange} />
                </label>
                <br />
                <label >
                    访客数:
                    <input
                        type="number"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                </label>
            </form>
        );
    }
    handleChange(e) {
        const target = e.target
        const value = target.type === 'checkbox'? target.checked : target.value;
        const name =target.name
        this.setState({
            [name]:value
        })
     }
}

ReactDOM.render(
    <ExampleForm></ExampleForm>,
    document.getElementById('example12')
)


