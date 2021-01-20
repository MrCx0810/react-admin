import React from 'react';
import {Form, Input, Button}  from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './login.module.css'

function Login(){

    // const layout = {
    //     labelCol: { span: 8 },
    //     wrapperCol: { span: 16 },
    // };
    // const tailLayout = {
    //     wrapperCol: { offset: 8, span: 16 },
    // };

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className={styles.body}>
            <div className={styles.content}>
                <section>
                    <h2>React-Manager</h2>
                    <div className={styles.form}>
                        <Form
                            name="normal_login"
                            autoComplete = "off"
                            className={styles.login_form}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: '请输入账户名' }]}
                            >
                                <Input style={{borderRadius:30, height: 40}}  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账户名" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: '请输入登录密码' }]}
                            >
                                <Input
                                    style={{borderRadius:30, height: 40}}
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="账户密码"
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
                                <Button style={{borderRadius:30, height: 40, fontSize:20, fontWeight:'bold'}} type="primary" htmlType="submit" className={styles.login_form_button}>
                                   点 击 登 录
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