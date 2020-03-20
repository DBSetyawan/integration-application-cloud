import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'

const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <strong>Aplikasi terintegrasi berbasis Web Based Laravel</strong>
          </Link>
          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

          <div className='navbar-end'>
            <SearchBox searchIndex={data.siteSearchIndex.index} />
             <Link className='navbar-item' to='/penawaran-solusi-synchronize-data-accurate-online'>
                            Solusi Synchronize Accurate online
            </Link>
            <Link className='navbar-item' to='/pricing'>
                            Harga
            </Link>
            {/* <Link className='navbar-item' to='/blog'>
                            Blog
            </Link> */}
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <Link
                    className='button is-primary is-outlined'
                    to='/contact'>
                            Hubungi Kami
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
