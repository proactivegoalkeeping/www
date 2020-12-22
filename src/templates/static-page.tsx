import { Aside } from '../components/aside';
import { LayoutStatic } from '../layouts/static';
import React from 'react';
import classnames from 'classnames';
import { getRandomInt } from '../helpers';
import { graphql } from 'gatsby';
import styles from './static-page.module.scss';

export default ({ data }) => {
  const post = data.markdownRemark;
  const { author, title, subtitle, date } = post.frontmatter;

  return (
    <LayoutStatic>
      <div className="row">
        <div className="col-md-8 blog-main">
          {subtitle && (
            <h3 className="pb-4 mb-4 font-italic border-bottom">{subtitle}</h3>
          )}

          <div className="blog-post">
            {title && <h2 className="blog-post-title">{title}</h2>}
            {date && (
              <p className="blog-post-meta">
                {date} {author && <span>by {author}</span>}
              </p>
            )}

            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
        <Aside />
      </div>
    </LayoutStatic>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        keywords
      }
    }
  }
`;
