import "@assets/css/styles.css"
import logo from "@assets/img/praticoLogo.png"
import { useAuth } from "@context/AuthProvider"
import { UserTokenMutationProps } from "@context/types"
import { Button, Form, Input } from "antd"

export const Login = () => {
  const auth = useAuth()

  function onFinish({ email, password }: UserTokenMutationProps) {
    auth.logIn({ email, password })
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

            <div
              className="container-login-form-btn"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{ background: "#00add1", borderColor: "#00add1", borderRadius: "5px", width: "100px" }}
              >
                Login
              </Button>
            </div>
            {/* {isLoading && <LoadingModal />} */}
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
