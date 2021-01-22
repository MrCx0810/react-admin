import React, { useState } from 'react';
import {Button, Card, Form, Input, Pagination, Table} from 'antd';
import styles from './product.module.css'
import ProductSearch from "../../components/product/Search";
import { PlusOutlined} from '@ant-design/icons';
import Modal from "antd/es/modal/Modal";


function Product() {
    const columns = [
        {
            title: '序号',
            dataIndex: 'id',
            sorter: (a, b) => a.id.length - b.id.length,
        },
        {
            title: '商品名称',
            dataIndex: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: '商品图片',
            dataIndex: 'productUrl',
            render: (productUrl) => <img style={{height:40, width:40, borderRadius:2 }} src={productUrl}/>
        },
        {
            title: '销量',
            dataIndex: 'num',
        },
        {
            title: '状态',
            dataIndex: 'status',
            sorter: (a, b) => a.status.length - b.status.length,
        },
        {
            title: '时间',
            dataIndex: 'createTime',
            sorter: (a, b) => a.createTime.length - b.createTime.length,
        },
    ];

    const data = [
        {
            id: '1',
            name: '良品铺子',
            productUrl: 'https://gitee.com/chu1204505056/image/raw/master/table/vab-image-20.jpg',
            num: 100,
            status: 1,
        },
        {
            id: '2',
            name: '良品铺子',
            productUrl: 'https://gitee.com/chu1204505056/image/raw/master/table/vab-image-20.jpg',
            num: 166,
            status: 1,
        },
        {
            id: '3',
            name: '良品铺子',
            productUrl: 'https://gitee.com/chu1204505056/image/raw/master/table/vab-image-20.jpg',
            num: 309,
            status: 1,
        },
        {
            id: '4',
            name: '良品铺子',
            productUrl: 'https://gitee.com/chu1204505056/image/raw/master/table/vab-image-20.jpg',
            num: 309,
            status: 1,
        },
        {
            id: '5',
            name: '良品铺子',
            productUrl: 'https://gitee.com/chu1204505056/image/raw/master/table/vab-image-20.jpg',
            num: 309,
            status: 1,
        },
        {
            id: '6',
            name: '良品铺子',
            productUrl: 'https://gitee.com/chu1204505056/image/raw/master/table/vab-image-20.jpg',
            num: 309,
            status: 1,
        },
        {
            id: '7',
            name: '良品铺子',
            productUrl: 'https://gitee.com/chu1204505056/image/raw/master/table/vab-image-20.jpg',
            num: 309,
            status: 1,
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
                <ProductSearch/>
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
                                label="商品名称"
                                name="productName"
                                rules={[{ required: true, message: '请输入商品名称' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="商品图片"
                                name="productUrl"
                                rules={[{ required: true, message: '请输入商品图片' }]}
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

export default Product;