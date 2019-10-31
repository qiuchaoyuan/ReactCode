# React 第一次课

## 1.html跟JSX区别的地方
    class=>className
    for=>htmlFor

## 2.组件
    class Cmp1 extents React.component(){
        constructor(...arg){
            super(...arg)
        }
        render(){
            return (
                <div>aaa</div>
            )
        }
    }   

## 3.表达式
    {}
    style {{color:'red'}}
    循环，key，map循环

## 4.父子组件
    父传子
        this.props
        参数只读
    事件
        onClick，this问题

## 5.组件状态
    state，渲染问题，this.setState

## 6.组件通信
    ref 
    父级找子级，不直接操作state，而是让子级自己管理

    parent=this
    子级找父级，同样不直接操作state，通过props拿到父级暴露的this

## 7.生命周期
    componentDidMount
    componentWillUpdate

## 8.脚手架
    create-react-app projectName
    装yarn

## 9.数据通信
    fetch,async componentDidMount(){
        let data = await fetch('./data/data.json');
    }

# React 第二次课
## 1. Redux
    数据流向 state->component->action->state

    Redux
        combineReducers
            const reducers_arr = combineReducers({
                user:reducer1,
                company:reducer2
            })
        createStore
            function reducer1(state={name:'Blue',age:18},action){
                return state;
            }
            const store = createStore(reducer1)
    React-redux
        Provider
            <Provider><App /></Provider>
        connect
            export default connect((state,props)=>{
                return state;
            })(cmp1)

    1.actions的优化手段
        把type都弄成一个文件，然后引入文件去引用，防止一方修改的时候出现错误
    2.store提取出来
        ...
    3.多个reducer，combineReducers
        每次提交action都会把该组件相关联的reducer都执行
## 2.React-router
    4.路由的基本使用
        npm install react-router-dom -S
        import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
        <Router> 放在render，相当于vue的router-view
            <div>
                <Link to="/"></Link>
                <Link to="/news"></Link>
                <Route path="/" exact component="cmp1"></Route>
                <Route path="/news" exact component="cmp2"></Route>
            </div>
        </Router>
    5.带参数的路由
        this.props.match.params
    6.路由的嵌套
        <Router>
            <div>
                <Link to="/sport"></Link>
                <Link to="/guoji"></Link>
                <Route path="/sport" exact component="cmp2_1"></Route>
                <Route path="/guoji" exact component="cmp2_2"></Route>
            </div>
        </Router>