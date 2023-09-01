//import { useState } from 'react'
//import Comp1 from './components/Comp1' //屬於全局引入 會全部變紅
//import Comp2 from './components/Comp2'
import {Button} from 'antd';
import{UpCircleOutlined} from '@ant-design/icons';
//這裡反白註解 反而才能跑出來?? 其實是因為又犯了全局引入,要甚麼引入甚麼就好了
//import 'antd/dist/antd.css';// or'antd/dist/antd.less';

function App() {
  //const [count, setCount] = useState(0)

  return (

      <div className='App'>
        組件
  <Button type='primary'>Our Button  </Button>
  <UpCircleOutlined style={{fontSize:'40px',color:'red'}} />

      </div>


  )
}

export default App
