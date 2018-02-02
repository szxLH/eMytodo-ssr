const React = require('react')
const Home = require('../src/views/home').default
const { renderToString, renderToStaticMarkup } = require('react-dom/server')

module.exports = ({ title }) => {
  const html = renderToString(<Home initCount={5} />)
  const propsScript = 'var APP_PROPS = ' + JSON.stringify({initCount: 5});
  return renderToStaticMarkup(
    <html>
      <head>
        <title>{title}</title>
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{__html: html}}></div>
      </body>
      
      <script src="/public/app.js"></script>
      <script dangerouslySetInnerHTML={{__html: propsScript}}></script>
    </html>
  )
};