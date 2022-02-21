import "./app.css"
import React from "react"
import { Quote } from "./container/Quote"

const styles: {[key: string]: React.CSSProperties} = {
  appContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  }
}

function App() {

  return (
    <>
      <div className="main-background"></div>
      <div style={styles.appContainer}>
        <Quote />
      </div>
    </>
  )
}

export default App
