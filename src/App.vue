<template>
  <div id="app">
    <Header/>
    <Feature/>
    <Work/>
    <Team/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Feature from './components/Feature'
import Work from './components/Work'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default {
  name: 'App',
  components: {
    Header,
    Feature,
    Work,
    Team,
    Contact,
    Footer
  }
}
</script>

