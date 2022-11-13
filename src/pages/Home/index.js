
import './index.scss'
import { Input,Button,Card,Form,Space,Collapse,Popover, Table, Select} from 'antd';
import { useEffect, useState } from 'react';
// import request from '@/utils/request';
import axios from 'axios';




const {Panel} = Collapse
const text = (
    <div>
    <p>Variance of Cumulative Noise – 3.90 x 10^-6</p>
    <p>Number of Known Input/ output pairs – 4 per attack</p>
    <p>Number of Attacks -- 5% of total record count</p>
    <p> ε - epsilon -- 0.2</p>
    <p>Maximum Value -- 1</p>
    <p>Growth Rate -- 0.01, 0.02</p>
    </div>
)

const content1 = (
    <div>
    <p>In additive noise, a high privacy level can be witnessed when the noise </p>
    <p>variance is increased, but consequently results in a low accuracy level.</p>
  </div>
);

const content2 = (
    <div>
    <p>Cycles are virtually broken-down sets of the entire dataset.</p>
    
  </div>
)



// History
const columns = [
    {
      title: 'NIR',
      dataIndex: 'nir',
      key: 'nir',
  
    },
    {
      title: 'Cycle Size',
      dataIndex: 'cs',
      key: 'cs',
    },
    {
      title: 'Privacy',
      dataIndex: 'privacy',
      key: 'privacy',
    },  {
      title: 'Accuracy',
      dataIndex: 'accuracy',
      key: 'accuracy',
    },
    
  ];
  



function Home () {
    //Input data
   function onFinish (values) {
    // console.log('values info',values)  
   }

   const [val1,setVal1] = useState({});
   const [val2,setVal2] = useState({});
   
   const handleSubmit = event =>{
    // console.log('handleSubmit');
    event.preventDefault();
    // console.log('val1', val1,'type:',typeof val1);
    // console.log('val2', val2);
    setVal1('');
    setVal2('');    
   }


    //Output data
   const [result, setResult] = useState({})

   const data = {"growth_rate_k": val1,"cycle_size" :val2}

   const [tableData, setTD] = useState([
    // {
    //   key: '1',
    //   nir: 'John Brown',
    //   cs: 32,
    //   privacy: 322,
    //   accuracy: 332,
  
    // },
    ])

    //Receiving data
    const submitHandler= () => {
        axios.post('http://127.0.0.1:8080/runExp',data)
            .then(res => {
                console.log('res=>',res)
                setResult(res.data);
                console.log('a',res,typeof res)
                console.log('aaa',res.data, typeof res.data)

                const bb = 
                    {
                        key: '2',
                        nir: '',
                        cs: '',
                        privacy: '',
                        accuracy: '',
                    }

                bb.nir = val1
                bb.cs = val2
                bb.privacy =  (1-res.data.privacyList[0].value)*100+'%'
                bb.accuracy = res.data.accuracy*100+'%'
                console.log('bb',bb)
                setTD(
                    [...tableData,bb]
                )
                // setTD (bb)
                
               

                
            },)
            .catch(err => console.log(err))
   }

   const submitHandler1= () => {
    axios.post('http://127.0.0.1:8080/runExp',data)
        .then(res => {
            console.log('res=>',res)
            setResult(res.data);
            console.log('a',res,typeof res)
            console.log('aaa',res.data, typeof res.data)

            const bb = 
                {
                    key: '2',
                    nir: '',
                    cs: '',
                    privacy: '',
                    accuracy: '',
                }

            bb.nir = val1
            bb.cs = val2
            bb.privacy =  (1-res.data.privacyList[1].value)*100+'%'
            bb.accuracy = res.data.accuracy*100+'%'
            console.log('bb',bb)
            setTD(
                [...tableData,bb]
            )
            // setTD (bb)
            
           

            
        },)
        .catch(err => console.log(err))
}

const submitHandler2= () => {
    axios.post('http://127.0.0.1:8080/runExp',data)
        .then(res => {
            console.log('res=>',res)
            setResult(res.data);
            console.log('a',res,typeof res)
            console.log('aaa',res.data, typeof res.data)

            const bb = 
                {
                    key: '2',
                    nir: '',
                    cs: '',
                    privacy: '',
                    accuracy: '',
                }

            bb.nir = val1
            bb.cs = val2
            bb.privacy =  (1-res.data.privacyList[2].value)*100+'%'
            bb.accuracy = res.data.accuracy*100+'%'
            console.log('bb',bb)
            setTD(
                [...tableData,bb]
            )
            // setTD (bb)
            
           

            
        },)
        .catch(err => console.log(err))
}

   useEffect(() =>{
        // console.log('result',result)
  
   },[result])


   const [selectValue, setSelectValue] = useState([])

   const handleChange = (value) => {
    // console.log(`selected`,value);
    setSelectValue(value)
    
    };

    useEffect(() =>{
    // console.log('selectValue',selectValue)
    
    },[selectValue])

    const [showElem1, setShowElem1] = useState (true)
    const [showElem2, setShowElem2] = useState(false)
    const [showElem3, setShowElem3] = useState(false)
 
    useEffect(() =>{
        if (selectValue === 'Selection1'){
                setShowElem1(true)
                setShowElem2(false)
                setShowElem3(false)
        }
        else if (selectValue === 'Selection2'){
            setShowElem1(false)
            setShowElem2(true)
            setShowElem3(false)
        }
        else if (selectValue === 'Selection3'){
            setShowElem1(false)
            setShowElem2(false)
            setShowElem3(true)
        }
        // console.log('showElem3',showElem3,typeof showElem3)
    },[selectValue, showElem1,showElem2,showElem3])

    




    return(
        <>
        <div className='backgroud'>

       

            
            <Space>
                <Collapse bordered={false} ghost={true} className='collapses'>
                    <Panel header="Default Paramenters" >
                        {text}
                    </Panel>
                </Collapse>
               
            </Space>

            <Select
                defaultValue="Selection1"
                className='selection'
                
                onChange={handleChange}
                options={[
                    {
                    value: 'Selection1',
                    label: 'Selection1',
                    },
                    {
                    value: 'Selection2',
                    label: 'Selection2',
                    },
                    {
                    value: 'Selection3',
                    label: 'Selection3',
                    },
                    
                ]}
            />

            <Card className='card' style={{display:showElem1 ? 'block':'none'}} >
                <Form
                    onFinish={onFinish}
                    
                    onSubmitCapture={(event)=>handleSubmit(event)}
                    // name="form1"
                >
                    <Popover content={content1} title="Noise Increase Rate">
                        <Form.Item
                            label="NIR"
                            name="data1"
                            // rules={[{ required: true, message: 'Enter data' }]}
                        >
                            <Input
                                id="val1"
                                name="val1"
                                type="text"
                                onChange={event => setVal1(event.target.value)}
                                value={val1}
                            />
                        </Form.Item>
                    </Popover>

                    <Popover content={content2} title="Cycle Size">
                        <Form.Item
                            label="Cycle Size"
                            name="data2"
                            // rules={[{ required: true, message: 'Enter data' }]}
                        >
                            <Input
                                id="val2"
                                name="val2"
                                type="text"
                                onChange={event => setVal2(event.target.value)}
                                value={val2}
                            />
                        </Form.Item>
                    </Popover>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={submitHandler}>Submit</Button>
                    </Form.Item>

                    {/* <Form.Item
                        label="Selection"
                        name="result"
                    >
                        
                        <h1>Privacy: {result.qwq}</h1>
                        <h1>Accuracy: {result.zzz}</h1>
                    </Form.Item> */}

                </Form>
            </Card>

            <Card className='card' style={{display:showElem2 ? 'block':'none'}} >
                <Form
                    onFinish={onFinish}
                    
                    onSubmitCapture={(event)=>handleSubmit(event)}
                    // name="form1"
                >
                    <Popover content={content1} title="Noise Increase Rate">
                        <Form.Item
                            label="222NIR"
                            name="data1"
                            // rules={[{ required: true, message: 'Enter data' }]}
                        >
                            <Input
                                id="val1"
                                name="val1"
                                type="text"
                                onChange={event => setVal1(event.target.value)}
                                value={val1}
                            />
                        </Form.Item>
                    </Popover>

                    <Popover content={content2} title="Cycle Size">
                        <Form.Item
                            label="Cycle Size"
                            name="data2"
                            // rules={[{ required: true, message: 'Enter data' }]}
                        >
                            <Input
                                id="val2"
                                name="val2"
                                type="text"
                                onChange={event => setVal2(event.target.value)}
                                value={val2}
                            />
                        </Form.Item>
                    </Popover>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={submitHandler1}>Submit</Button>
                    </Form.Item>

                    {/* <Form.Item
                        label="Selection"
                        name="result"
                    >
                        
                        <h1>Privacy: {result.qwq}</h1>
                        <h1>Accuracy: {result.zzz}</h1>
                    </Form.Item> */}

                </Form>
            </Card>

            <Card className='card' style={{display:showElem3 ? 'block':'none'}} >
                <Form
                    onFinish={onFinish}
                    
                    onSubmitCapture={(event)=>handleSubmit(event)}
                    // name="form1"
                >
                    <Popover content={content1} title="Noise Increase Rate">
                        <Form.Item
                            label="333NIR"
                            name="data1"
                            // rules={[{ required: true, message: 'Enter data' }]}
                        >
                            <Input
                                id="val1"
                                name="val1"
                                type="text"
                                onChange={event => setVal1(event.target.value)}
                                value={val1}
                            />
                        </Form.Item>
                    </Popover>

                    <Popover content={content2} title="Cycle Size">
                        <Form.Item
                            label="Cycle Size"
                            name="data2"
                            // rules={[{ required: true, message: 'Enter data' }]}
                        >
                            <Input
                                id="val2"
                                name="val2"
                                type="text"
                                onChange={event => setVal2(event.target.value)}
                                value={val2}
                            />
                        </Form.Item>
                    </Popover>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={submitHandler2}>Submit</Button>
                    </Form.Item>

                    {/* <Form.Item
                        label="Selection"
                        name="result"
                    >
                        
                        <h1>Privacy: {result.qwq}</h1>
                        <h1>Accuracy: {result.zzz}</h1>
                    </Form.Item> */}

                </Form>
            </Card>
            

            <Table 
                className='tables'
                columns={columns} 
                dataSource={tableData} 
            />

            

            {/* <Card className='card2'>                        
                <Form
                    onFinish={onFinish }
                    
                >
                    <Popover content={content1} title="Noise Increase Rate">
                        <Form.Item
                            label="NIR"
                            name="data1"
                            // rules={[{ required: true, message: 'Enter data' }]}
                        >
                            <Input 
                            />
                        </Form.Item>
                    </Popover>

                    <Popover content={content2} title="Period Size">
                        <Form.Item
                            label="Period Size"
                            name="data2"
                            // rules={[{ required: true, message: 'Enter data' }]}
                        >
                            <Input/>
                        </Form.Item>
                    </Popover>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" >Submit</Button>
                    </Form.Item>

                    <Form.Item
                        label="Result"
                        name="result"
                    >
                        <h1>Privacy and Accuracy</h1>
                    </Form.Item>

                </Form>
            </Card> */}
            
        </div>
        
        </>
    )
}


export default Home