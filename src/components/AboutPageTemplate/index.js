import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import logo from '../../../static/icons/partner_logo_integration_cloud.png';

const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className='hero is-0-mobile is-bold is-medium'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <p className='has-text-centered'>
                  <img src={logo} />
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <PageContent className='content' content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPageTemplate
