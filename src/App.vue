<template>
  <div id="app">
    <div id="app">
    <Header/>
    <Feature/>
    <Work/>
    <Team/>
  </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Feature from './components/Feature'
import Work from './components/Work'
import Team from './components/Team'

export default {
  name: 'App',
  components: {
    Header,
    Feature,
    Work,
    Team
  }
}
</script>

