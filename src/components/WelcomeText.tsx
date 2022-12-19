import { Col, Layout, Row } from "antd"

type WelcomeTextProps = {
  text: string
}

export function WelcomeText({ text }: WelcomeTextProps) {
  const { Content } = Layout
  return (
    <Content>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto",
          height: "100%",
          width: "500px"
        }}
      >
        <h1
          style={{
            color: "black",
            textAlign: "center"
          }}
        >
          Seu&nbsp;
          <span
            style={{
              color: "#5da0ed",
              WebkitTextStroke: "1px",
              WebkitTextStrokeColor: "#5da0ed"
            }}
          >
            Parceiro
          </span>
          &nbsp;Para o Crescimento.
        </h1>
        <h2
          style={{
            color: "black",
            textAlign: "center",
            fontFamily: "arial",
            fontSize: "20px"
          }}
        >
          {text}
        </h2>
      </div>
    </Content>
  )
}
