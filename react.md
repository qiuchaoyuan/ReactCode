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
    style { {color:'red'} }
    循环，key，map循环

## 4.父子组件
    父传子
        this.props
        参数只读
    事件
        onClick，this问题（需要绑定this）

## 5.组件状态
    state，渲染问题，this.setState

## 6.组件通信
    ref 
    父级找子级，不直接操作state，而是让子级自己管理

    parent=this
    子级找父级，同样不直接操作state，通过props拿到父级暴露的this

## 7.生命周期
[链接]: https://www.jianshu.com/p/514fe21b9914 "React生命周期"
    componentDidMount 组件已经挂载 在 render 之后调用（调用后台接口可以在这个生命周期里面调用或是constructor里面调用）
    componentWillUpdate 组件将要更新
    componentDidUpdate 组件已经更新 这个生命周期有两个函数，第一个是之前的状态对象，第二个是之前状态
        componentDidUpdate(old_props,old_state){}
    componentWillUnmount 在组件被卸载前调用，可以在这里执行一些清理工作，比如清除组件中使用的定时器，清除componentDidMount中手动创建的DOM元素等，以避免引起内存泄漏。

## 8.脚手架
    create-react-app projectName
    装yarn

## 9.数据通信
    fetch
    async componentDidMount(){
        let data = await fetch('./data/data.json');
    }

# React 第二次课
## 1. Redux
    数据流向 state->component->action->state

    Redux
        1.创建一个store
        createStore
            function reducer1(state={name:'Blue',age:18},action){
                5.这里可以拿到action，在这里进行修改
                switch (action.type){
                    case:"set_name",
                        return {...state,name:action.name}
                    default:
                        return state;
                }
                
            }
            const store = createStore(reducer1)

        6.如果有两个reducer，可以用combinReducer把多个reducer合并成一个reducer数组
        注：如果组件提交action修改reducer数组的内容的时候，会循环所有的reducer进行匹配
        combineReducers
            const reducers_arr = combineReducers({
                user:reducer1,
                company:reducer2
            })

    React-redux

        2.将APP用provider包括起来，并将第一步创建好的store通过provider传递给APP
        Provider
            <Provider store={store}><App /></Provider>

        3.用connect包装需要用到reducer数据的组件，用this.props拿数据
        connect
            export default connect((state,props)=>{
                return state;
            })(cmp1)

        4.用action修改reduer里面的数据
        const actions = {
            setName(state,props){
                type:"set_name",
                name:"this_name"
            }
        }
        export default connect((state,props)=>{
            return state;
        },actions)(cmp1)

    1.actions的优化手段
        把type都弄成一个文件，然后引入文件去引用，防止一方修改的时候出现错误

    2.store提取出来
        ...

    3.多个reducer，combineReducers
        每次提交action都会把该组件相关联的reducer都执行 ^-^

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

    7.拿到history里面的信息，并进行跳转
        import {BrowserRouter as Router,Route,Link,withRouter} from 'react-router-dom'
        withRouter(cmp)
        console.log(this.props.history)
        this.props.history.push(pathname:"/",state:{name:"aaa"})