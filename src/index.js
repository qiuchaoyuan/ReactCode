import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 1.引入redux
import { createStore } from "redux";
import { Provider } from "react-redux"

// 2.创建store
function reducer1(state={name:"Blue",age:"18"},action){
    // 收到提交的action,修改reducer的内容
    switch(action.type){
        case "set_name":
        return {...state,name:action.name}

        case "set_age":
        return {...state,age:parseInt(state.age)+parseInt(action.age)}

        default:
        return state;
    }
    
}

// 3.创建存储对象
const store = createStore(reducer1);


ReactDOM.render(<Provider store={store}><App name="zhangsan"/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
