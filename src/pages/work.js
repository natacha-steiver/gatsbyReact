import React from "react"
import Header from "../components/header";
import Cards from "../components/cards";
import AsideTop from  "../components/asideTop";
import Footer from  "../components/footer";
const Work=() =>{
  return (
  <>

  <AsideTop/>
  <Header />
  <section style={{padding:"1rem 0"}}>
  <Cards />
  </section>
  <Footer/>


 
  </>
  )
}


export default Work;
