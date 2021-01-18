import React from 'react';
import {Form, Input, Button, Checkbox}  from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './login.module.css'

function Login(){

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className={styles.body}>
            <div className={styles.content}>
                <section>
                    <h2>REACT管理系统</h2>
                    <div>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: '请输入登录名' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入登录名" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: '请输入登录密码' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="请输入登录密码"
                                />
                            </Form.Item>
                            {/*<Form.Item>*/}
                            {/*    <Form.Item name="remember" valuePropName="checked" noStyle>*/}
                            {/*        <Checkbox>记住我</Checkbox>*/}
                            {/*    </Form.Item>*/}

                            {/*    <a className="login-form-forgot" href="">*/}
                            {/*       忘记密码*/}
                            {/*    </a>*/}
                            {/*</Form.Item>*/}

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className={styles.login_form_button}>
                                    提交
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Login;