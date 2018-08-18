import React from 'react'
import { Link, graphql } from 'gatsby'
import PT from 'svg-country-flags/svg/pt.svg'
import EN from 'svg-country-flags/svg/us.svg'

const Header = ({ pages, location }) => (
  <header>
    <div>
      <h1>Demo Site</h1>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <ul>
          {pages
            .filter(page => !page.node.path.includes('404'))
            .map(page => ({
              ...page,
              pathname: location.pathname.split('/')[1] || 'en-US',
            }))
            .filter(page => page.node.context.lang === page.pathname)
            .map(page => (
              <li key={page.node.path}>
                <Link to={page.node.path}>{page.node.context.title}</Link>
              </li>
            ))}
        </ul>
        <ul>
          <li>
            <Link to="/pt-pt">
              <img src={PT} width="50px" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={EN} width="50px" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
