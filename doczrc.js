import { css } from 'reakit/styled';

export default {
  dest: '/docs',
  files: '**/src/**/*.mdx',
  menu: [
    'Home',
    'Getting Started',
    'Primitives',
    'Palette',
    'Typography',
    'Layout',
    'Components',
    'Form',
    'Utilities',
    'Styling & Theming'
  ],
  themeConfig: {
    colors: {
      primary: '#444bc9',
      text: '#435a6f'
    },
    logo: {
      src: 'https://raw.githubusercontent.com/fannypackui/fannypack/master/logo.png',
      width: '230px'
    },
    showPlaygroundEditor: true,
    styles: {
      body: css`
        font-family: unset;
        font-size: 16px;
        color: unset;

        // Quick dirty hacks until we create our own docz theme
        & nav a {
          font-size: 16px !important;
        }

        & #get-started a {
          color: #444bc9;
        }

        & > div > div > div {
          font-size: 16px !important;
        }
      `,
      h1: {
        fontWeight: 'bold',
        fontSize: '48px',
        fontFamily: 'unset'
      },
      h2: {
        fontWeight: '600',
        fontFamily: 'unset'
      },
      paragraph: {
        fontSize: '16px'
      },
      li: {
        fontSize: '16px'
      }
    }
  },
  wrapper: 'src/_docs/wrapper',
  codeSandbox: false,
  typescript: true,
  propsParser: false,
  modifyBabelRc: (babelrc, args) => {
    babelrc.presets.pop();
    babelrc.presets.push(['docz-fannypack', { parseProps: false, typescript: true, flow: false }]);
    return babelrc;
  }
};
