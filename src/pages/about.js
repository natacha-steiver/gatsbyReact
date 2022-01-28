import React from "react"
import Header from "../components/header";
import About from "../components/about";
import AsideTop from  "../components/asideTop";
import Footer from  "../components/footer";
const AboutPage=() =>{
  return (
  <>

  <AsideTop/>
  <Header />
  <section style={{padding:"1rem 0"}}>
  <About />
  </section>
  <Footer/>


 
  </>
  )
}


export default AboutPage;
