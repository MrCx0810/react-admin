import React from 'react';
import {Form, Row, Col, Input, Button, DatePicker, Select} from 'antd';
import styles from './search.module.css'
const { Option } = Select;


function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
    console.log('onOk: ', value);
}

const AdvancedSearchForm = () => {
    // const [expand, setExpand] = useState(false);
    const [form] = Form.useForm();

    // const getFields = () => {
    //     const count = expand ? 10 : 3;
    //     const children = [];
    //     children.push(
    //
    //     );
    //
    //     return children;
    // };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            style={{styles}}
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
        >
            <Row gutter={24} className={styles.userSearchForm}>
                <Col span={4} key='status'>
                    <Form.Item  name='status' label='上架状态'>
                        <Select defaultValue="上架状态" style={{ width: 120 }}>
                            <Option value="0">未上架</Option>
                            <Option value="1">已上架</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={4} key='username'>
                    <Form.Item  name='username' label='商品名称'>
                        <Input style={{height:32}} placeholder="请输入查询商品名称" />
                    </Form.Item>
                </Col>
                <Col span={3} key='startTime'>
                    <Form.Item name='startTime'>
                        <DatePicker placeholder="请选择开始时间" showTime onChange={onChange} onOk={onOk} />
                    </Form.Item>
                </Col>
                <Col span={3} key='endTime'>
                    <Form.Item name='endTime'>
                        <DatePicker placeholder="请选择结束时间" showTime onChange={onChange} onOk={onOk} />
                    </Form.Item>
                </Col>
                <Col
                    span={4}
                    style={{
                        textAlign: 'right',
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        查询
                    </Button>
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => {
                            form.resetFields();
                        }}
                    >
                        重置
                    </Button>
                    <Button
                        type="dashed" htmlType="submit"
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => {
                            form.resetFields();
                        }}
                    >
                        导出
                    </Button>
                   {/* <a
                        style={{
                            fontSize: 12,
                        }}
                        onClick={() => {
                            setExpand(!expand);
                        }}
                    >
                        {expand ? <UpOutlined /> : <DownOutlined />} 展开
                    </a>*/}
                </Col>
            </Row>
            {/*<Row>*/}
            {/*    <Col*/}
            {/*        span={24}*/}
            {/*        style={{*/}
            {/*            textAlign: 'right',*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        <Button type="primary" htmlType="submit">*/}
            {/*            查询*/}
            {/*        </Button>*/}
            {/*        <Button*/}
            {/*            style={{*/}
            {/*                margin: '0 8px',*/}
            {/*            }}*/}
            {/*            onClick={() => {*/}
            {/*                form.resetFields();*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            重置*/}
            {/*        </Button>*/}
            {/*        <a*/}
            {/*            style={{*/}
            {/*                fontSize: 12,*/}
            {/*            }}*/}
            {/*            onClick={() => {*/}
            {/*                setExpand(!expand);*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            {expand ? <UpOutlined /> : <DownOutlined />} 展开*/}
            {/*        </a>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
        </Form>
    );
};

function Search() {
    return(
        <div className={styles.content}>
            <AdvancedSearchForm />
        </div>
    );
}

export default Search;