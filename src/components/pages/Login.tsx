import { Button, Form, Input, message } from "antd"
import { useNavigate } from "react-router-dom"
import "../../assets/css/styles.css"
import logo from "../../assets/img/pratico_logo_nome_baixo arrumada.png"
import { useAuth } from "../../context/AuthProvider/useAuth"

export const Login = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  async function onFinish(values: { email: string; password: string }) {
    try {
      await auth.authenticated(values.email, values.password)
      console.log("logado")
      return navigate("/")
    } catch (error) {
      message.error("Invalid email or Password")
    }
  }

  return (
    <div className="main-container">
      <div className="container-login">
        <div className="wrap-login">
          <Form className="login-form" onFinish={onFinish}>
            <span className="login-form-title"> </span>

            <span className="login-form-title">
              <img src={logo} alt="Prático Login" />
            </span>

            <Form.Item label="E-mail" name="email">
              <Input placeholder="Email" style={{ borderRadius: "5px" }} />
            </Form.Item>

            <Form.Item label="Senha" name="password">
              <Input.Password placeholder="Password" style={{ borderRadius: "5px" }} />
            </Form.Item>

            <div className="container-login-form-btn">
              <Button
                type="primary"
                htmlType="submit"
                style={{ background: "#00add1", borderColor: "#00add1", borderRadius: "5px", width: "100px" }}
              >
                Login
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <footer>
        <p className="copyright">©Prático 2022</p>
      </footer>
    </div>
  )
}
export default Login
