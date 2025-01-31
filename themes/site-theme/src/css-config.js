module.exports = {
  prefix: '',
  important: true,
  separator: ':',
  theme: {
    colors: {

      'blk-overlay': 'rgba(34,34,34,0.3)',
      'color-D2232A': '#D2232A',
      'color-171511': '#171511',
      'color-A61C21': '#A61C21',
      'color-E0484E': '#E0484E',
      'color-7B1419': '#7B1419',
      'color-EDEDED': '#EDEDED',
      'color-E0E0E0': '#E0E0E0',
      'color-CCCCCC': '#CCCCCC',
      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      '72': '18rem',
      '80': '19rem',
      '90': '90px',
      '45': '45px',
      '30px': '30px',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1440px',
    },
    fontFamily: {
      'DIN-Regular': [
        'DIN-Regular',
        'serif',
      ],
      'DIN-Medium': [
        'DIN-Medium',
        'serif',
      ],
      'DIN-Bold': [
        'DIN-Bold',
        'serif',
      ],
    },
    fontSize: {
      '2xs': '.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '4halfxl': '2.75rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      '24': '24px',
      '34': '34px',
      normal: '1.5',
      loose: '2',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    textColor: theme => theme('colors'),
    backgroundColor: theme => theme('colors'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.gray.300', 'currentColor'),
    }),
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      lg: '0.5rem',
      full: '9999px',
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
    },
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '2/6': '33.33333%',
      '3/6': '50%',
      '4/6': '66.66667%',
      '5/6': '83.33333%',
      '1/12': '8.33333%',
      '2/12': '16.66667%',
      '3/12': '25%',
      '4/12': '33.33333%',
      '5/12': '41.66667%',
      '6/12': '50%',
      '7/12': '58.33333%',
      '8/12': '66.66667%',
      '9/12': '75%',
      '10/12': '83.33333%',
      '11/12': '91.66667%',
      full: '100%',
      screen: '100vw',
    }),
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      '98': '6.125rem',
      screen: '100vh',
    }),
    minWidth: {
      '0': '0',
      full: '100%',
    },
    minHeight: {
      '0': '0',
      full: '100%',
      screen: '100vh',
    },
    maxWidth: {
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%',
    },
    maxHeight: {
      full: '100%',
      screen: '100vh',
    },
    padding: theme => theme('spacing'),
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
    zIndex: {
      auto: 'auto',
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
    },
    opacity: {
      '0': '0',
      '25': '0.25',
      '50': '0.5',
      '75': '0.75',
      '100': '1',
    },
    fill: {
      current: 'currentColor',
    },
    stroke: {
      current: 'currentColor',
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      '0': '0',
      default: '1',
    },
    flexShrink: {
      '0': '0',
      default: '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    inset: {
      '0': '0',
      auto: 'auto',
    },
    container: {}
  },
  variants: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    cursor: ['responsive', 'hover'],
    display: ['responsive'],
    flexDirection: ['responsive'],
    flexWrap: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    justifyContent: ['responsive'],
    alignContent: ['responsive'],
    flex: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    order: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    inset: ['responsive'],
    resize: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    fill: ['responsive'],
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    fontSize: ['responsive'],
    fontStyle: ['responsive'],
    textTransform: ['responsive'],
    textDecoration: ['responsive', 'hover', 'focus'],
    fontSmoothing: ['responsive'],
    letterSpacing: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    wordBreak: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
  },
  corePlugins: {},
  plugins: [],
}

// /*

// Tailwind - The Utility-First CSS Framework

// A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
// David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

// Welcome to the Tailwind config file. This is where you can customize
// Tailwind specifically for your project. Don't be intimidated by the
// length of this file. It's really just a big JavaScript object and
// we've done our very best to explain each section.

// View the full documentation at https://tailwindcss.com.


// |-------------------------------------------------------------------------------
// | The default config
// |-------------------------------------------------------------------------------
// |
// | This variable contains the default Tailwind config. You don't have
// | to use it, but it can sometimes be helpful to have available. For
// | example, you may choose to merge your custom configuration
// | values with some of the Tailwind defaults.
// |
// */

// let defaultConfig = require('tailwindcss/defaultConfig')()


// /*
// |-------------------------------------------------------------------------------
// | Colors                                    https://tailwindcss.com/docs/colors
// |-------------------------------------------------------------------------------
// |
// | Here you can specify the colors used in your project. To get you started,
// | we've provided a generous palette of great looking colors that are perfect
// | for prototyping, but don't hesitate to change them for your project. You
// | own these colors, nothing will break if you change everything about them.
// |
// | We've used literal color names ("red", "blue", etc.) for the default
// | palette, but if you'd rather use functional names like "primary" and
// | "secondary", or even a numeric scale like "100" and "200", go for it.
// |
// */

// let colors = {
//   'blk-overlay': 'rgba(34,34,34,0.3)',
//   'color-D2232A': '#D2232A',
//   'color-171511': '#171511',
//   'color-A61C21': '#A61C21',
//   'color-E0484E': '#E0484E',
//   'color-7B1419': '#7B1419',
//   'color-EDEDED': '#EDEDED',
//   'color-E0E0E0': '#E0E0E0',
//   'transparent': 'transparent',

//   'black': '#22292f',
//   'white': '#ffffff',
// }

// module.exports = {

//   /*
//   |-----------------------------------------------------------------------------
//   | Colors                                  https://tailwindcss.com/docs/colors
//   |-----------------------------------------------------------------------------
//   |
//   | The color palette defined above is also assigned to the "colors" key of
//   | your Tailwind config. This makes it easy to access them in your CSS
//   | using Tailwind's config helper. For example:
//   |
//   | .error { color: config('colors.red') }
//   |
//   */

//   colors: colors,


//   /*
//   |-----------------------------------------------------------------------------
//   | Screens                      https://tailwindcss.com/docs/responsive-design
//   |-----------------------------------------------------------------------------
//   |
//   | Screens in Tailwind are translated to CSS media queries. They define the
//   | responsive breakpoints for your project. By default Tailwind takes a
//   | "mobile first" approach, where each screen size represents a minimum
//   | viewport width. Feel free to have as few or as many screens as you
//   | want, naming them in whatever way you'd prefer for your project.
//   |
//   | Tailwind also allows for more complex screen definitions, which can be
//   | useful in certain situations. Be sure to see the full responsive
//   | documentation for a complete list of options.
//   |
//   | Class name: .{screen}:{utility}
//   |
//   */

//   screens: {
//     'sm': '576px',
//     'md': '768px',
//     'lg': '992px',
//     'xl': '1200px',
//     'xxl': '1440px',
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Fonts                                    https://tailwindcss.com/docs/fonts
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your project's font stack, or font families.
//   | Keep in mind that Tailwind doesn't actually load any fonts for you.
//   | If you're using custom fonts you'll need to import them prior to
//   | defining them here.
//   |
//   | By default we provide a native font stack that works remarkably well on
//   | any device or OS you're using, since it just uses the default fonts
//   | provided by the platform.
//   |
//   | Class name: .font-{name}
//   | CSS property: font-family
//   |
//   */

//   fonts: {
//     'DIN-Regular': [
//       'DIN-Regular',
//       'serif',
//     ],
//     'DIN-Medium': [
//       'DIN-Medium',
//       'serif',
//     ],
//     'DIN-Bold': [
//       'DIN-Bold',
//       'serif',
//     ],
//     'sans': [
//       'system-ui',
//       'BlinkMacSystemFont',
//       '-apple-system',
//       'Segoe UI',
//       'Roboto',
//       'Oxygen',
//       'Ubuntu',
//       'Cantarell',
//       'Fira Sans',
//       'Droid Sans',
//       'Helvetica Neue',
//       'sans-serif',
//     ],
//     'serif': [
//       'Constantia',
//       'Lucida Bright',
//       'Lucidabright',
//       'Lucida Serif',
//       'Lucida',
//       'DejaVu Serif',
//       'Bitstream Vera Serif',
//       'Liberation Serif',
//       'Georgia',
//       'serif',
//     ],
//     'mono': [
//       'Menlo',
//       'Monaco',
//       'Consolas',
//       'Liberation Mono',
//       'Courier New',
//       'monospace',
//     ],
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Text sizes                         https://tailwindcss.com/docs/text-sizing
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your text sizes. Name these in whatever way
//   | makes the most sense to you. We use size names by default, but
//   | you're welcome to use a numeric scale or even something else
//   | entirely.
//   |
//   | By default Tailwind uses the "rem" unit type for most measurements.
//   | This allows you to set a root font size which all other sizes are
//   | then based on. That said, you are free to use whatever units you
//   | prefer, be it rems, ems, pixels or other.
//   |
//   | Class name: .text-{size}
//   | CSS property: font-size
//   |
//   */

//   textSizes: {
//     '2xs': '.625rem',    // 10px
//     'xs': '.75rem',     // 12px
//     'sm': '.875rem',    // 14px
//     'base': '1rem',     // 16px
//     'lg': '1.125rem',   // 18px
//     'xl': '1.25rem',    // 20px
//     '2xl': '1.5rem',    // 24px
//     '3xl': '1.875rem',  // 30px
//     '4xl': '2.25rem',   // 36px
//     '4.5xl': '2.75rem',   //44px
//     '5xl': '3rem',      // 48px
//     '6xl': '4rem',  //64px
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Font weights                       https://tailwindcss.com/docs/font-weight
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your font weights. We've provided a list of
//   | common font weight names with their respective numeric scale values
//   | to get you started. It's unlikely that your project will require
//   | all of these, so we recommend removing those you don't need.
//   |
//   | Class name: .font-{weight}
//   | CSS property: font-weight
//   |
//   */

//   fontWeights: {
//     'hairline': 100,
//     'thin': 200,
//     'light': 300,
//     'normal': 400,
//     'medium': 500,
//     'semibold': 600,
//     'bold': 700,
//     'extrabold': 800,
//     'black': 900,
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Leading (line height)              https://tailwindcss.com/docs/line-height
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your line height values, or as we call
//   | them in Tailwind, leadings.
//   |
//   | Class name: .leading-{size}
//   | CSS property: line-height
//   |
//   */

//   leading: {
//     'none': 1,
//     'tight': 1.25,
//     '24': '24px',
//     '34': '34px',
//     'normal': 1.5,
//     'loose': 2,
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your letter spacing values, or as we call
//   | them in Tailwind, tracking.
//   |
//   | Class name: .tracking-{size}
//   | CSS property: letter-spacing
//   |
//   */

//   tracking: {
//     'tight': '-0.05em',
//     'normal': '0',
//     'wide': '0.05em',
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Text colors                         https://tailwindcss.com/docs/text-color
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your text colors. By default these use the
//   | color palette we defined above, however you're welcome to set these
//   | independently if that makes sense for your project.
//   |
//   | Class name: .text-{color}
//   | CSS property: color
//   |
//   */

//   textColors: colors,


//   /*
//   |-----------------------------------------------------------------------------
//   | Background colors             https://tailwindcss.com/docs/background-color
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your background colors. By default these use
//   | the color palette we defined above, however you're welcome to set
//   | these independently if that makes sense for your project.
//   |
//   | Class name: .bg-{color}
//   | CSS property: background-color
//   |
//   */

//   backgroundColors: colors,


//   /*
//   |-----------------------------------------------------------------------------
//   | Background sizes               https://tailwindcss.com/docs/background-size
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your background sizes. We provide some common
//   | values that are useful in most projects, but feel free to add other sizes
//   | that are specific to your project here as well.
//   |
//   | Class name: .bg-{size}
//   | CSS property: background-size
//   |
//   */

//   backgroundSize: {
//     'auto': 'auto',
//     'cover': 'cover',
//     'contain': 'contain',
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Border widths                     https://tailwindcss.com/docs/border-width
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your border widths. Take note that border
//   | widths require a special "default" value set as well. This is the
//   | width that will be used when you do not specify a border width.
//   |
//   | Class name: .border{-side?}{-width?}
//   | CSS property: border-width
//   |
//   */

//   borderWidths: {
//     default: '1px',
//     '0': '0',
//     '2': '2px',
//     '4': '4px',
//     '8': '8px',
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Border colors                     https://tailwindcss.com/docs/border-color
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your border colors. By default these use the
//   | color palette we defined above, however you're welcome to set these
//   | independently if that makes sense for your project.
//   |
//   | Take note that border colors require a special "default" value set
//   | as well. This is the color that will be used when you do not
//   | specify a border color.
//   |
//   | Class name: .border-{color}
//   | CSS property: border-color
//   |
//   */

//   borderColors: global.Object.assign({ default: colors['grey-light'] }, colors),


//   /*
//   |-----------------------------------------------------------------------------
//   | Border radius                    https://tailwindcss.com/docs/border-radius
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your border radius values. If a `default` radius
//   | is provided, it will be made available as the non-suffixed `.rounded`
//   | utility.
//   |
//   | If your scale includes a `0` value to reset already rounded corners, it's
//   | a good idea to put it first so other values are able to override it.
//   |
//   | Class name: .rounded{-side?}{-size?}
//   | CSS property: border-radius
//   |
//   */

//   borderRadius: {
//     'none': '0',
//     'sm': '.125rem',
//     default: '.25rem',
//     'lg': '.5rem',
//     'full': '9999px',
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Width                                    https://tailwindcss.com/docs/width
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your width utility sizes. These can be
//   | percentage based, pixels, rems, or any other units. By default
//   | we provide a sensible rem based numeric scale, a percentage
//   | based fraction scale, plus some other common use-cases. You
//   | can, of course, modify these values as needed.
//   |
//   |
//   | It's also worth mentioning that Tailwind automatically escapes
//   | invalid CSS class name characters, which allows you to have
//   | awesome classes like .w-2/3.
//   |
//   | Class name: .w-{size}
//   | CSS property: width
//   |
//   */

//   width: {
//     'auto': 'auto',
//     'px': '1px',
//     '1': '0.25rem',
//     '2': '0.5rem',
//     '3': '0.75rem',
//     '4': '1rem',
//     '5': '1.25rem',
//     '6': '1.5rem',
//     '8': '2rem',
//     '10': '2.5rem',
//     '12': '3rem',
//     '16': '4rem',
//     '24': '6rem',
//     '32': '8rem',
//     '48': '12rem',
//     '64': '16rem',
//     '1/2': '50%',
//     '1/3': '33.33333%',
//     '2/3': '66.66667%',
//     '1/4': '25%',
//     '3/4': '75%',
//     '1/5': '20%',
//     '2/5': '40%',
//     '3/5': '60%',
//     '4/5': '80%',
//     '1/6': '16.66667%',
//     '5/6': '83.33333%',
//     'full': '100%',
//     'screen': '100vw',
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Height                                  https://tailwindcss.com/docs/height
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your height utility sizes. These can be
//   | percentage based, pixels, rems, or any other units. By default
//   | we provide a sensible rem based numeric scale plus some other
//   | common use-cases. You can, of course, modify these values as
//   | needed.
//   |
//   | Class name: .h-{size}
//   | CSS property: height
//   |
//   */

//   height: {
//     'auto': 'auto',
//     'px': '1px',
//     '1': '0.25rem',
//     '2': '0.5rem',
//     '3': '0.75rem',
//     '4': '1rem',
//     '5': '1.25rem',
//     '6': '1.5rem',
//     '8': '2rem',
//     '10': '2.5rem',
//     '12': '3rem',
//     '16': '4rem',
//     '24': '6rem',
//     '98': '6.125rem',
//     '32': '8rem',
//     '48': '12rem',
//     '64': '16rem',
//     'full': '100%',
//     'screen': '100vh',
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Minimum width                        https://tailwindcss.com/docs/min-width
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your minimum width utility sizes. These can
//   | be percentage based, pixels, rems, or any other units. We provide a
//   | couple common use-cases by default. You can, of course, modify
//   | these values as needed.
//   |
//   | Class name: .min-w-{size}
//   | CSS property: min-width
//   |
//   */

//   minWidth: {
//     '0': '0',
//     'full': '100%',
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Minimum height                      https://tailwindcss.com/docs/min-height
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your minimum height utility sizes. These can
//   | be percentage based, pixels, rems, or any other units. We provide a
//   | few common use-cases by default. You can, of course, modify these
//   | values as needed.
//   |
//   | Class name: .min-h-{size}
//   | CSS property: min-height
//   |
//   */

//   minHeight: {
//     '0': '0',
//     'full': '100%',
//     'screen': '100vh',
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Maximum width                        https://tailwindcss.com/docs/max-width
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your maximum width utility sizes. These can
//   | be percentage based, pixels, rems, or any other units. By default
//   | we provide a sensible rem based scale and a "full width" size,
//   | which is basically a reset utility. You can, of course,
//   | modify these values as needed.
//   |
//   | Class name: .max-w-{size}
//   | CSS property: max-width
//   |
//   */

//   maxWidth: {
//     'xs': '20rem',
//     'sm': '30rem',
//     'md': '40rem',
//     'lg': '50rem',
//     'xl': '60rem',
//     '2xl': '70rem',
//     '3xl': '80rem',
//     '4xl': '90rem',
//     '5xl': '100rem',
//     'full': '100%',
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Maximum height                      https://tailwindcss.com/docs/max-height
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your maximum height utility sizes. These can
//   | be percentage based, pixels, rems, or any other units. We provide a
//   | couple common use-cases by default. You can, of course, modify
//   | these values as needed.
//   |
//   | Class name: .max-h-{size}
//   | CSS property: max-height
//   |
//   */

//   maxHeight: {
//     'full': '100%',
//     'screen': '100vh',
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Padding                                https://tailwindcss.com/docs/padding
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your padding utility sizes. These can be
//   | percentage based, pixels, rems, or any other units. By default we
//   | provide a sensible rem based numeric scale plus a couple other
//   | common use-cases like "1px". You can, of course, modify these
//   | values as needed.
//   |
//   | Class name: .p{side?}-{size}
//   | CSS property: padding
//   |
//   */

//   padding: {
//     'px': '1px',
//     '0': '0',
//     '1': '0.25rem',
//     '2': '0.5rem',
//     '3': '0.75rem',
//     '4': '1rem',
//     '5': '1.25rem',
//     '6': '1.5rem',
//     '8': '2rem',
//     '10': '2.5rem',
//     '45': '2.8125rem',
//     '12': '3rem',
//     '16': '4rem',
//     '20': '5rem',
//     '90': '5.625rem',
//     '24': '6rem',
//     '32': '8rem',
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Margin                                  https://tailwindcss.com/docs/margin
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your margin utility sizes. These can be
//   | percentage based, pixels, rems, or any other units. By default we
//   | provide a sensible rem based numeric scale plus a couple other
//   | common use-cases like "1px". You can, of course, modify these
//   | values as needed.
//   |
//   | Class name: .m{side?}-{size}
//   | CSS property: margin
//   |
//   */

//   margin: {
//     'auto': 'auto',
//     'px': '1px',
//     '0': '0',
//     '1': '0.25rem',
//     '2': '0.5rem',
//     '3': '0.75rem',
//     '4': '1rem',
//     '5': '1.25rem',
//     '6': '1.5rem',
//     '8': '2rem',
//     '10': '2.5rem',
//     '12': '3rem',
//     '16': '4rem',
//     '20': '5rem',
//     '24': '6rem',
//     '32': '8rem',
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Negative margin                https://tailwindcss.com/docs/negative-margin
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your negative margin utility sizes. These can
//   | be percentage based, pixels, rems, or any other units. By default we
//   | provide matching values to the padding scale since these utilities
//   | generally get used together. You can, of course, modify these
//   | values as needed.
//   |
//   | Class name: .-m{side?}-{size}
//   | CSS property: margin
//   |
//   */

//   negativeMargin: {
//     'px': '1px',
//     '0': '0',
//     '1': '0.25rem',
//     '2': '0.5rem',
//     '3': '0.75rem',
//     '4': '1rem',
//     '5': '1.25rem',
//     '6': '1.5rem',
//     '8': '2rem',
//     '10': '2.5rem',
//     '12': '3rem',
//     '16': '4rem',
//     '20': '5rem',
//     '24': '6rem',
//     '32': '8rem',
//     '48': '16rem',
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Shadows                                https://tailwindcss.com/docs/shadows
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your shadow utilities. As you can see from
//   | the defaults we provide, it's possible to apply multiple shadows
//   | per utility using comma separation.
//   |
//   | If a `default` shadow is provided, it will be made available as the non-
//   | suffixed `.shadow` utility.
//   |
//   | Class name: .shadow-{size?}
//   | CSS property: box-shadow
//   |
//   */

//   shadows: {
//     default: '0 2px 4px 0 rgba(0,0,0,0.10)',
//     'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
//     'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
//     'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
//     'outline': '0 0 0 3px rgba(52,144,220,0.5)',
//     'none': 'none',
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Z-index                                https://tailwindcss.com/docs/z-index
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your z-index utility values. By default we
//   | provide a sensible numeric scale. You can, of course, modify these
//   | values as needed.
//   |
//   | Class name: .z-{index}
//   | CSS property: z-index
//   |
//   */

//   zIndex: {
//     'auto': 'auto',
//     '0': 0,
//     '10': 10,
//     '20': 20,
//     '30': 30,
//     '40': 40,
//     '50': 50,
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Opacity                                https://tailwindcss.com/docs/opacity
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your opacity utility values. By default we
//   | provide a sensible numeric scale. You can, of course, modify these
//   | values as needed.
//   |
//   | Class name: .opacity-{name}
//   | CSS property: opacity
//   |
//   */

//   opacity: {
//     '0': '0',
//     '25': '.25',
//     '50': '.5',
//     '75': '.75',
//     '100': '1',
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | SVG fill                                   https://tailwindcss.com/docs/svg
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your SVG fill colors. By default we just provide
//   | `fill-current` which sets the fill to the current text color. This lets you
//   | specify a fill color using existing text color utilities and helps keep the
//   | generated CSS file size down.
//   |
//   | Class name: .fill-{name}
//   | CSS property: fill
//   |
//   */

//   svgFill: {
//     'current': 'currentColor',
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | SVG stroke                                 https://tailwindcss.com/docs/svg
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you define your SVG stroke colors. By default we just provide
//   | `stroke-current` which sets the stroke to the current text color. This lets
//   | you specify a stroke color using existing text color utilities and helps
//   | keep the generated CSS file size down.
//   |
//   | Class name: .stroke-{name}
//   | CSS property: stroke
//   |
//   */

//   svgStroke: {
//     'current': 'currentColor',
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Modules                  https://tailwindcss.com/docs/configuration#modules
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you control which modules are generated and what variants are
//   | generated for each of those modules.
//   |
//   | Currently supported variants:
//   |   - responsive
//   |   - hover
//   |   - focus
//   |   - focus-within
//   |   - active
//   |   - group-hover
//   |
//   | To disable a module completely, use `false` instead of an array.
//   |
//   */

//   modules: {
//     appearance: ['responsive'],
//     backgroundAttachment: ['responsive'],
//     backgroundColors: ['responsive', 'hover', 'focus', 'active'],
//     backgroundPosition: ['responsive'],
//     backgroundRepeat: ['responsive'],
//     backgroundSize: ['responsive'],
//     borderCollapse: [],
//     borderColors: ['responsive', 'hover', 'focus'],
//     borderRadius: ['responsive'],
//     borderStyle: ['responsive'],
//     borderWidths: ['responsive'],
//     cursor: ['responsive'],
//     display: ['responsive'],
//     flexbox: ['responsive'],
//     float: ['responsive'],
//     fonts: ['responsive'],
//     fontWeights: ['responsive', 'hover', 'focus'],
//     height: ['responsive'],
//     leading: ['responsive'],
//     lists: ['responsive'],
//     margin: ['responsive'],
//     maxHeight: ['responsive'],
//     maxWidth: ['responsive'],
//     minHeight: ['responsive'],
//     minWidth: ['responsive'],
//     negativeMargin: ['responsive'],
//     objectFit: false,
//     objectPosition: false,
//     opacity: ['responsive', 'hover'],
//     outline: ['focus'],
//     overflow: ['responsive'],
//     padding: ['responsive'],
//     pointerEvents: ['responsive'],
//     position: ['responsive'],
//     resize: ['responsive'],
//     shadows: ['responsive', 'hover', 'focus'],
//     svgFill: [],
//     svgStroke: [],
//     tableLayout: ['responsive'],
//     textAlign: ['responsive'],
//     textColors: ['responsive', 'hover', 'focus'],
//     textSizes: ['responsive'],
//     textStyle: ['responsive', 'hover', 'focus'],
//     tracking: ['responsive'],
//     userSelect: ['responsive'],
//     verticalAlign: ['responsive'],
//     visibility: ['responsive'],
//     whitespace: ['responsive'],
//     width: ['responsive'],
//     zIndex: ['responsive'],
//   },


//   /*
//   |-----------------------------------------------------------------------------
//   | Plugins                                https://tailwindcss.com/docs/plugins
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you can register any plugins you'd like to use in your
//   | project. Tailwind's built-in `container` plugin is enabled by default to
//   | give you a Bootstrap-style responsive container component out of the box.
//   |
//   | Be sure to view the complete plugin documentation to learn more about how
//   | the plugin system works.
//   |
//   */

//   plugins: [
//     require('tailwindcss/plugins/container')({
//       center: true
//       // padding: '1rem',
//     })
//   ],


//   /*
//   |-----------------------------------------------------------------------------
//   | Advanced Options         https://tailwindcss.com/docs/configuration#options
//   |-----------------------------------------------------------------------------
//   |
//   | Here is where you can tweak advanced configuration options. We recommend
//   | leaving these options alone unless you absolutely need to change them.
//   |
//   */

//   options: {
//     prefix: '',
//     important: false,
//     separator: ':',
//   },

// }
