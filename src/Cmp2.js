import React, { Component } from "react";
import { connect } from "react-redux";
import {Button} from "antd";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Cmp2_1 from "./Cmp2_1";
import Cmp2_2 from "./Cmp2_2";

class Cmp2 extends Component {
    constructor(...arg) {
        super(...arg)
    };

    fn2() {
        this.props.setN();
    }

    fn3() {
        this.props.setA();
    }

    componentDidUpdate(old_props, old_state) {
        console.log(old_state);
        let old = old_props.match.params.id;
        let current = this.props.match.params.id;
        if (old != current) {
            console.log('更新,请求数据')
        };
    }

    render() {
        console.log(123);

        return (
            <div>
                我是news{this.props.match.params.id}
                <Router>
                    <Link to="/guoji">国际</Link>
                    <Link to="/sport">体育</Link>

                    <Route path="/guoji" component={Cmp2_1}></Route>
                    <Route path="/sport" component={Cmp2_2}></Route>
                </Router>
                <div className="flex">
                    <Button type="primary" onClick={this.fn2.bind(this)}>setN</Button>
                    <p>{this.props.reducer2.n}</p>
                </div>
                <div className="flex">
                    <Button type="primary" onClick={this.fn3.bind(this)}>setA</Button>
                    <p>{this.props.reducer2.a}</p>
                </div>
                
            </div>
        )
    }
}
const actions = {
    setN() {
        return {
            type: "set_n",
            n: "张三"
        }
    },
    setA() {
        return {
            type: "set_a",
            a: 8
        }
    }
}

export default connect((state, props) => {
    return state;
},actions)(Cmp2);