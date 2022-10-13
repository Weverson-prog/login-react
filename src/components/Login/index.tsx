import {Row, Col, Form, Input, Button, message} from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";


export const Login = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    async function onFinish (values: {email: string; password: string}){
    
        try{
            await auth.authenticated(values.email, values.password)
            navigate("/profile")

        }catch (error){
            message.error('Invalid email or Password')
        }
    }

    return (
        <Row 
            justify="center"
            align="middle"
            style={{
                height : '100vh'
            }}
        >
        <Col span={12}>
            <Form
                name='basic'
                labelCol={{span: 5}}
                wrapperCol={{span: 16}}
                onFinish={onFinish}
            >
            <Form.Item
                label='Email'
                name='email'
            >
                <Input />
            </Form.Item>

            <Form.Item
                label='Password'
                name='password'
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 5, span:16}}>
            <Button type = "primary" htmlType="submit">
                Sign in
            </Button>    
            </Form.Item>
            </Form>
        </Col>
        </Row>
    )
}