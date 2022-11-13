import {  Table } from 'antd';
import React from 'react';
import './index.scss' 

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
const data = [
  {
    key: '1',
    nir: 'John Brown',
    cs: 32,
    privacy: 322,
    accuracy: 332,

  },
  {
    key: '2',
    nir: 'John Brown',
    cs: 32,
    privacy: 322,
    accuracy: 332,

  },  {
    key: '3',
    nir: 'John Brown',
    cs: 32,
    privacy: 322,
    accuracy: 66,

  },
];



function Tables () {

    return (
        <div>
            <Table 
              className='tables'
              columns={columns} 
              dataSource={data} 
            />
        </div>
    )

}

export default Tables;