import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import FaHome from 'react-icons/lib/fa/home';
import FaUser from 'react-icons/lib/fa/user';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaStar from 'react-icons/lib/fa/star';
import FaFolderOpen from 'react-icons/lib/fa/folder-open';
import WebFont from 'webfontloader';

import IconText from '../components/IconText';
import logo from '../images/logo.svg';
import Navbar from '../components/Navbar';
import './index.scss';


WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif'],
  },
});

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Navbar icon={<img src={logo} alt="logo" />}>
      <Link to="/"><IconText text="Home" icon={<FaHome size={27} />} /></Link>
      <Link to="/about/"><IconText text="About" icon={<FaUser size={27} />} /></Link>
      <Link to="/skills"><IconText text="Skills" icon={<FaStar size={27} />} /></Link>
      <Link to="/work/"><IconText text="Work" icon={<FaFolderOpen size={27} />} /></Link>
      <Link to="/contact/"><IconText text="Contact" icon={<FaPencil size={27} />} /></Link>
    </Navbar>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;


// <Header siteTitle={data.site.siteMetadata.title} />
