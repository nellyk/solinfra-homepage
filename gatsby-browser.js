/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === 'undefined') {
    /* eslint-disable-next-line no-unused-expressions */
    import('intersection-observer')
    console.info('# IntersectionObserver is polyfilled!')
  }
}
