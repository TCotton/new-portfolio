import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const notFound = `NOT FOUND`
const you = `You just hit a route that doesn&#39;t exist... the sadness.`

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found"/>
    <h1>
      {notFound}
    </h1>
    <p>
      {you}
    </p>
  </Layout>
)

export default NotFoundPage
