import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const BirthdayPage = () => (
  <Layout>
    <SEO title='Birthday Parties' />
    <h1>Birthday Parties</h1>
    <p>Welcome to birthday parties page</p>
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
);

export default BirthdayPage;
