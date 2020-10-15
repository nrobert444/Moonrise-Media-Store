import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}
Meta.defaultProps = {
  title: 'Welcome to Moonrise Media',
  description: 'We sell hard to find media at great prices',
  keywords: 'oop, out of print, htf, hard to find, rare, DVD, Blu-Ray'
}

export default Meta
