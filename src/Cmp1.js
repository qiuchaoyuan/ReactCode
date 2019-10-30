import React, { Component } from "react";
// 获取connect的内容
import { connect } from "react-redux";
import { Button } from "antd"
import 'antd/dist/antd.css';
import './cmp1.css'

class Cmp1 extends Component {
    constructor(...arg) {
        super(...arg)
    }

    fn() {
        this.props.setName();
    }

    fn1() {
        this.props.setAge();
    }

    render() {
        return (
            <div>
                {/* store里面的state和props糅合在一起，统一使用props管理，防止修改 */}
                <div className="flex">
                    <Button type="primary" onClick={this.fn.bind(this)}>setName</Button>
                    <p>{this.props.name}</p>
                </div>
                <div className="flex">
                    <Button type="primary" onClick={this.fn1.bind(this)}>setAge</Button>
                    <p>{this.props.age}</p>
                </div>

            </div>
        )
    }
}

// 提交actions修改内容
const actions = {
    setName() {
        return {
            type: "set_name",
            name: "zhangsan"
        }
    },
    setAge() {
        return {
            type: "set_age",
            age: 6
        }
    }
}
// 包装组件
export default connect((state, props) => {
    return state;
}, actions)(Cmp1)