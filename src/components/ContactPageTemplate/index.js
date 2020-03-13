import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { ContactForm } from '../forms'
import logo from '../../../static/icons/partner_logo_integration_cloud.png';

const ContactPageTemplate = ({ title, subtitle, meta_title, meta_description }) => {
  return <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
     <section className='hero is-0-primary is-bold is-medium'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
                <p className='has-text-centered'>
                  <img src={logo}/>
                </p>
            </div>
          </div>
        </div>
      </section>
    <section className='hero is-3by1 is-bold is-medium'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-30 is-offset--0'>
              <div className='section'>
                <h1 className='title'>
                  {title}
                </h1>
                <h2 className='subtitle'>
                  {subtitle}
                </h2>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section className='section'>
      <div className='container'>
        <ContactForm />
      </div>
    </section>
  </div>
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
}

export default ContactPageTemplate
