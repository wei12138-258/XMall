import React, {Component} from 'react'
import { Card,Button ,Table, Divider, Tag} from 'antd'
import {getArtcleList} from "../../api/api"



const columns = [
    {
        title: 'ID',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
        <span>
            {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
                color = 'volcano';
            }
            return (
                <Tag color={color} key={tag}>
                {tag.toUpperCase()}
                </Tag>
            );
            })}
        </span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
        <span>
            <a>Invite {record.name}</a>
            <Divider type="vertical" />
            <a>Delete</a>
        </span>
        ),
    },
    ];
    const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    ];

class ArticleList extends Component{
    render(){
        return(
            <div>
                <Card 
                bordered={false} 
                title="商品列表" 
                extra={<Button type="primary">下载excal</Button>} 
                style={{ width: '100%' }}
                /> 
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
    componentDidMount(){
        getArtcleList()
    }
}

export default ArticleList
