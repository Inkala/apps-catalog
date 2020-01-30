import React from 'react'
import HostList from '../../components/HostList/HostList'
import ViewChanger from '../../ui/ViewChanger/ViewChanger'

const styles = {
  display: 'flex',
  flexDirection: "column"
}

const Home = () => {
  return (
    <section style={styles} id="home">
      <ViewChanger />
      <HostList />
    </section>
  )
}

export default Home
