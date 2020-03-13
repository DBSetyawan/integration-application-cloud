import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import config from '../../../config'
import Share from '../../components/Share'

  const FooterPage = ({ data }) => {
  // const { markdownRemark: post } = data

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          {/* <Share
            title={post.frontmatter.title}
            slug={post.fields.slug}
            excerpt={post.frontmatter.meta_description}
          /> */}
          <p>Powered by <a href='https://www.gatsbyjs.org'>Gatsby</a> and <a href='https://www.netlifycms.org'>Netlify CMS</a> | Integration Application your business</p>
          <p>Developer by <a href='https://dbsetyawan.github.io/portfolio/'>Daniel Budi Setyawan</a> & All team.</p> 
          <p>
            {config.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

FooterPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  }),
}

export default FooterPage

export const pageQuery = graphql`
  query IndexPageFooter($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`