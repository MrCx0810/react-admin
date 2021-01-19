import React, { useState } from 'react';
import {Button, Card, Form, Input, Pagination, Table} from 'antd';
import styles from './user.module.css'
import Search from "../../components/user/Search";
import { PlusOutlined} from '@ant-design/icons';
import Modal from "antd/es/modal/Modal";


function User() {
    const columns = [
        {
            title: '用户名',
            dataIndex: 'name',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: '年龄',
            dataIndex: 'age',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: '地址',
            dataIndex: 'address',
            filters: [
                {
                    text: '伦敦',
                    value: 'London',
                },
                {
                    text: '纽约',
                    value: 'New York',
                },
            ],
            filterMultiple: false,
            onFilter: (value, record) => record.address.indexOf(value) === 0,
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '4',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
        },
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },

    ];

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [state, setState] = useState({visible: false});
    // console.log('state=', state)
    return (
        <div className={styles.body}>
            <Card type="inner">
                <Search/>
            </Card>
            <div style={{marginTop:20}}>
                <>
                    <Button type="primary" onClick={() => setState({visible: true})}>
                        <PlusOutlined />
                        添加
                    </Button>
                    <Modal
                        maskStyle={{opacity:'.6',background:'rgba(0,0,0,.5)',backdropFilter: 'blur(10px)',animation:'none'}}
                        title="添加"
                        visible={state.visible}
                        onOk={() => setState({visible: true})}
                        onCancel={() => setState({visible: false})}
                        okText="确认"
                        cancelText="取消"
                        destroyOnClose
                        maskClosable={false}
                    >
                        <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="用户名"
                                name="username"
                                rules={[{ required: true, message: '请输入用户名' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="地址"
                                name="address"
                                rules={[{ required: true, message: '请输入地址信息' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Form>
                    </Modal>
                </>
            </div>
            <br/>
            <Table pagination={false} columns={columns} dataSource={data} onChange={onChange}/>
            <div className={styles.page} style={{marginTop:30, textAlign:'center'}}>
                <Pagination
                    total={85}
                    showSizeChanger
                    showQuickJumper
                    showTotal={total => `共 ${total} 条`}
                />
            </div>
        </div>
    );
}

export default User;