import { Layout } from "antd"

export function PageFooter() {
  const { Footer } = Layout
  return (
    <Footer
      style={{
        height: "15px",
        backgroundColor: "#add8e6",
        backgroundImage:
          "linear-gradient(to right,#1b71da, #3c89e3, #3c89e3, #5da0ed, #7eb8f6, #7eb8f6, #9fcfff,#9fcfff)"
      }}
    >
      <p
        style={{
          color: "black",
          textAlign: "right",
          fontFamily: "arial",
          fontSize: "14px"
        }}
      >
        ⓒPratico 2022
      </p>
    </Footer>
  )
}
