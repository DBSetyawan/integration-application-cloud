import React from 'react'
import Helmet from 'react-helmet'
import Pricing from '../Pricing'
import PropTypes from 'prop-types'
import logo from '../../../static/icons/partner_logo_integration_cloud.png';

const PricingPageTemplate = ({
  title,
  meta_title,
  meta_description,
  pricing,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
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
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <h2 className='has-text-weight-semibold is-size-2'>
                  {pricing.heading}
                </h2>
                <p className='is-size-5'>{pricing.description}</p>
                <Pricing data={pricing.plans} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

PricingPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

export default PricingPageTemplate
