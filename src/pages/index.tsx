import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/Header"
import { ThemeProvider } from "../context/ThemeContext"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Header />
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
