export const Component = {
    Button: [
        {
            name: 'Glowing',
            href: "/button/glowing",
            title: "Glowing Button",
            description: "A simple button component with Glowing background color.",
            installCommand: "vastraui add @vastra/glowing",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Button/GlowingButton.tsx",
            packageName: "@vastra/glowing",
            filePath: "components/CustomComponent/Button/GlowingButton.tsx",
            showcasePath: "components/ComponentShowcase/Button/GlowingButton.tsx",
            PropsDetails: [ { name: "children", type: "React.ReactNode", description: "The content to be rendered inside the button.", default: "null" }, { name: "className", type: "string", description: "Custom className for additional styling.", default: "''" }, { name: "onClick", type: "() => void", description: "Click handler for the button.", default: "undefined" }, { name: "width", type: "string | number", description: "Width of the button.", default: "'auto'" }, { name: "height", type: "string | number", description: "Height of the button.", default: "'auto'" }, { name: "glowFromColor", type: "string", description: "Start color of the gradient in HSL format.", default: "'344, 54%, 46%'" }, { name: "glowToColor", type: "string", description: "End color of the gradient in HSL format.", default: "'27, 88%, 64%'" }, { name: "glowSize", type: "number", description: "Size of the glow effect in em units.", default: "7" }, { name: "glowBlur", type: "number", description: "Blur amount for the glow in em units.", default: "3" }, { name: "glowOpacity", type: "number", description: "Maximum opacity of the glow effect.", default: "0.75" }, { name: "fontSize", type: "number", description: "Font size in rem + vmin.", default: "1" }, { name: "showWireframeToggle", type: "boolean", description: "Show wireframe toggle option.", default: "false" } ]
        },
        {
            name: 'Gradient',
            href: "/button/gradient",
            title: "Gradient Button",
            description: "A simple button component with gradient background color.",
            installCommand: "vastraui add @vastra/gradient",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Button/GradientButton.tsx",
            packageName: "@vastra/gradient",
            filePath: "components/CustomComponent/Button/GradientButton.tsx",
            showcasePath: "components/ComponentShowcase/Button/GradientButton.tsx",
            PropsDetails : [
                {
                  name: "className",
                  type: "string",
                  description: "Custom className for additional styling.",
                  default: "''",
                },
                {
                  name: "size",
                  type: "'default' | 'sm' | 'lg' | 'xl'",
                  description: "Defines the size of the button.",
                  default: "'default'",
                },
                {
                  name: "gradient",
                  type: "'blue' | 'purple' | 'green' | 'red' | 'orange' | 'yellow' | 'custom' | 'neonBlue' | 'neonPurple' | 'neonGreen' | 'neonRed' | 'neonOrange' | 'neonYellow'",
                  description: "Specifies the gradient style of the button.",
                  default: "'neonBlue'",
                },
                {
                  name: "customGradient",
                  type: "string",
                  description: "Custom CSS for gradient if gradient type is 'custom'.",
                  default: "undefined",
                },
                {
                  name: "animate",
                  type: "boolean",
                  description: "Enables animation effects on hover and tap.",
                  default: "true",
                },
                {
                  name: "children",
                  type: "React.ReactNode",
                  description: "The content to be rendered inside the button.",
                  default: "undefined",
                },
                {
                  name: "ref",
                  type: "React.Ref<HTMLButtonElement>",
                  description: "Forwarded reference to the button element.",
                  default: "undefined",
                },
                {
                  name: "...props",
                  type: "ButtonHTMLAttributes<HTMLButtonElement>",
                  description: "Additional properties passed to the button element.",
                  default: "undefined",
                },
              ]
        },
        {
            name: 'Rainbow',
            href: "/button/rainbow",
            title: "Rainbow Button",
            description: "A simple button component with rainbow background color.",
            installCommand: "vastraui add @vastra/rainbow",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Button/RainbowButton.tsx",
            packageName: "@vastra/rainbow",
            filePath: "components/CustomComponent/Button/RainbowButton.tsx",
            showcasePath: "components/ComponentShowcase/Button/RainbowButton.tsx",
            PropsDetails : [
                {
                  name: 'children',
                  type: 'ReactNode',
                  description: 'The content inside the button, typically text or other React components.',
                  default: 'undefined',
                },
                {
                  name: 'onClick',
                  type: '() => void',
                  description: 'Callback function triggered when the button is clicked.',
                  default: 'undefined',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  description: 'Disables the button if set to `true`.',
                  default: 'false',
                },
                {
                  name: 'className',
                  type: 'string',
                  description: 'Additional CSS classes to style the button.',
                  default: 'undefined',
                },
                {
                  name: '...props',
                  type: 'ButtonHTMLAttributes<HTMLButtonElement>',
                  description: 'Additional properties passed to the button element.',
                  default: 'undefined',
                },
              ]
              
        },
        {
            name: 'Radial',
            href: "/button/radial",
            title: "Radial Button",
            description: "A simple button component with Radial effect.",
            installCommand: "vastraui add @vastra/radial",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Button/RadialButton.tsx",
            packageName: "@vastra/radial",
            filePath: "components/CustomComponent/Button/RadialButton.tsx",
            showcasePath: "components/ComponentShowcase/Button/RadialButton.tsx"
        },
        {
            name: 'Shimmer',
            href: "/button/shimmer",
            title: "Shimmer Button",
            description: "A simple button component with shimmer effect.",
            installCommand: "vastraui add @vastra/shimmer",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Button/ShimmerButton.tsx",
            packageName: "@vastra/shimmer",
            filePath: "components/CustomComponent/Button/ShimmerButton.tsx",
            showcasePath: "components/ComponentShowcase/Button/ShimmerButton.tsx",
            PropsDetails : [
                {
                  name: 'children',
                  type: 'React.ReactNode',
                  description: 'Text or content inside the button',
                  default: "'Shimmer Button'"
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  description: 'Determines if the button is disabled',
                  default: 'false'
                },
                {
                  name: 'onClick',
                  type: '() => void',
                  description: 'Click event handler function',
                  default: 'undefined'
                },
                {
                  name: 'initialEffect',
                  type: 'AnimationEffect',
                  description: 'Initial animation effect for the button',
                  default: "'spin'"
                },
                {
                  name: 'className',
                  type: 'string',
                  description: 'Additional CSS classes for the button',
                  default: "''"
                }
              ]
        }
    ],
    Background: [
        {
            name: 'Star Falling',
            href: "/background/starfalling",
            title: "Star Falling Background",
            description: "A simple background component with Starfalling effect.",
            installCommand: "vastraui add @vastra/starfalling",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Background/StarFalling.tsx",
            packageName: "@vastra/starfalling",
            filePath: "components/CustomComponent/Background/StarFalling.tsx",
            showcasePath: "components/ComponentShowcase/Background/StarFalling.tsx"
        },
        {
            name: 'Parallax Stars',
            href: "/background/parallaxstars",
            title: "ParallaxStars Background",
            description: "A simple background component with Parallax Stars effect.",
            installCommand: "vastraui add @vastra/parallaxstars",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Background/ParallaxStars.tsx",
            packageName: "@vastra/parallaxstars",
            filePath: "components/CustomComponent/Background/ParallaxStars.tsx",
            showcasePath: "components/ComponentShowcase/Background/ParallaxStars.tsx"
        },
        {
            name: 'Particles',
            href: "/background/particles",
            title: "Particles Background",
            description: "A simple background component with particles effect.",
            installCommand: "vastraui add @vastra/particles",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Background/Particles.tsx",
            packageName: "@vastra/particles",
            filePath: "components/CustomComponent/Background/Particles.tsx",
            showcasePath: "components/ComponentShowcase/Background/Particles.tsx"
        }
    ],
    Card: [
        {
            name: 'Card Border',
            href: "/card/borderanimation",
            title: "Card Border Animation",
            description: "A card component with border animation effect.",
            installCommand: "vastraui add @vastra/borderanimation",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Cards/BorderAnimationCard.tsx",
            packageName: "@vastra/borderanimation",
            filePath: "components/CustomComponent/Cards/BorderAnimationCard.tsx",
            showcasePath: "components/ComponentShowcase/Card/BorderAnimationCard.tsx",
            PropsDetails: [
                {
                  name: 'children',
                  type: 'React.ReactNode',
                  description: 'Content to be rendered inside the card',
                  default: 'undefined'
                },
                {
                  name: 'width',
                  type: 'string',
                  description: 'Width of the card component',
                  default: "'190px'"
                },
                {
                  name: 'height',
                  type: 'string', 
                  description: 'Height of the card component',
                  default: "'254px'"
                }
              
            ]
        }
    ],
    Input: [
        {
            name: 'Input Gradient',
            href: "/input/gradientborder",
            title: "Input Gradient Animation",
            description: "An input component with gradient border animation.",
            installCommand: "vastraui add @vastra/gradientborder",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Input/GradientInput.tsx",
            packageName: "@vastra/gradientborder",
            filePath: "components/CustomComponent/Input/GradientInput.tsx",
            showcasePath: "components/ComponentShowcase/Input/GradientInput.tsx",
            PropsDetails: [
              {
                name: 'placeholder',
                type: 'string',
                description: 'Placeholder text for the input field',
                default: "'Search...'"
              },
              {
                name: 'inputName',
                type: 'string', 
                description: 'Name attribute for the input element',
                default: "'text'"
              },
              {
                name: 'className',
                type: 'string',
                description: 'Additional CSS classes for the component',
                default: "''"
              },
              {
                name: 'value',
                type: 'string',
                description: 'Controlled input value',
                default: 'undefined'
              },
              {
                name: 'onChange',
                type: '(e: React.ChangeEvent<HTMLInputElement>) => void',
                description: 'Change event handler for the input',
                default: 'undefined'
              }
            ]
            
        }
    ],
    Pattern: [
        {
            name: 'Plus',
            href: "/pattern/plus",
            title: "Plus Pattern",
            description: "A pattern component with Plus design.",
            installCommand: "vastraui add @vastra/plus",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Pattern/Plus.tsx",
            packageName: "@vastra/plus",
            filePath: "components/CustomComponent/Pattern/Plus.tsx",
            showcasePath: "components/ComponentShowcase/Pattern/Plus.tsx"
        },
        {
            name: 'Dot',
            href: "/pattern/dot",
            title: "Dot Pattern",
            description: "A pattern component with dot design.",
            installCommand: "vastraui add @vastra/dot",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Pattern/Dot.tsx",
            packageName: "@vastra/dot",
            filePath: "components/CustomComponent/Pattern/Dot.tsx",
            showcasePath: "components/ComponentShowcase/Pattern/Dot.tsx",
            PropsDetails : [
              {
                name: 'dotColor',
                type: 'string',
                description: 'Color of the dots in the background pattern',
                default: "'white'"
              },
              {
                name: 'backgroundColor',
                type: 'string',
                description: 'Background color behind the dot pattern',
                default: "'black'"
              },
              {
                name: 'dotSize',
                type: 'string',
                description: 'Size of individual dots in the pattern',
                default: "'1px'"
              },
              {
                name: 'dotSpace',
                type: 'string',
                description: 'Spacing between dots in the background',
                default: "'22px'"
              },
              {
                name: 'children',
                type: 'React.ReactNode',
                description: 'Content to be rendered inside the dot pattern background',
                default: 'undefined'
              }
            ]
            
        },
        {
            name: 'Mastodon',
            href: "/pattern/mastodon",
            title: "Mastodon Pattern",
            description: "A pattern component with line design.",
            installCommand: "vastraui add @vastra/mastodon",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Pattern/Mastodon.tsx",
            packageName: "@vastra/mastodon",
            filePath: "components/CustomComponent/Pattern/Mastodon.tsx",
            showcasePath: "components/ComponentShowcase/Pattern/Mastodon.tsx"
        }
    ],
    Text: [
        {
            name: "Gradient",
            href: "/text/gradient",
            title: "Gradient Text Animation",
            description: "A text component with gradient animation.",
            installCommand: "vastraui add @vastra/gradient",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Text/GradientText.tsx",
            packageName: "@vastra/gradient",
            filePath: "components/CustomComponent/Text/GradientText.tsx",
            showcasePath: "components/ComponentShowcase/Text/GradientText.tsx",
            PropsDetails: [
  {
    name: 'title',
    type: 'string',
    description: 'Text to be displayed with aurora effect',
    default: "'the beautiful aurora'"
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes for the component',
    default: 'undefined'
  },
  {
    name: 'style',
    type: 'React.CSSProperties',
    description: 'Inline styles to be applied to the component',
    default: 'undefined'
  }
]
        },
        {
            name: "Morph",
            href: "/text/morph",
            title: "Morph Text Animation",
            description: "A text component with outline animation.",
            installCommand: "vastraui add @vastra/morph",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Text/MorphText.tsx",
            packageName: "@vastra/morph",
            filePath: "components/CustomComponent/Text/MorphText.tsx",
            showcasePath: "components/ComponentShowcase/Text/MorphText.tsx",
            PropsDetails: [
              {
                name: 'texts',
                type: 'string[]',
                description: 'Array of text strings to morph between',
                default: 'undefined'
              },
              {
                name: 'morphTime',
                type: 'number',
                description: 'Duration of text morphing animation in seconds',
                default: '2'
              },
              {
                name: 'cooldownTime',
                type: 'number',
                description: 'Duration between text morphing animations in seconds',
                default: '1.5'
              },
              {
                name: 'fontSize',
                type: 'string',
                description: 'Font size for the morphing text',
                default: "'80pt'"
              },
              {
                name: 'fontFamily',
                type: 'string',
                description: 'Font family for the morphing text',
                default: "'Raleway, sans-serif'"
              }
            ]
        },
        {
            name: "Neon",
            href: "/text/neon",
            title: "Neon Text Animation",
            description: "A text component with Neon Text animation.",
            installCommand: "vastraui add @vastra/neon",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Text/NeonText.tsx",
            packageName: "@vastra/neon",
            filePath: "components/CustomComponent/Text/NeonText.tsx",
            showcasePath: "components/ComponentShowcase/Text/NeonText.tsx",
            PropsDetails: [
              {
                name: 'text',
                type: 'string',
                description: 'Text to be rendered with neon effect',
                default: 'undefined'
              }
            ]
        }
    ],
    Other: [
        {
            name: "Date",
            href: "/other/datepicker",
            title: "Date Picker",
            description: "A date picker component.",
            installCommand: "vastraui add @vastra/datepicker",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Other/DatePicker.tsx",
            packageName: "@vastra/datepicker",
            filePath: "components/CustomComponent/Other/DatePicker.tsx",
            showcasePath: "components/ComponentShowcase/Other/DatePicker.tsx",
            PropsDetails: [
              {
                name: 'onDateSelect',
                type: '(date: Date) => void',
                description: 'Callback function triggered when a date is selected',
                default: 'undefined',
                required: true
              },
              {
                name: 'className',
                type: 'string',
                description: 'Additional CSS classes to apply to the date picker',
                default: "''",
                required: false
              },
              {
                name: 'theme',
                type: "'light' | 'dark'",
                description: 'Color theme of the date picker',
                default: "'light'",
                required: false
              }
            ]
            
        },
        {
            name: "Form",
            href: "/other/form",
            title: "Form",
            description: "A form component.",
            installCommand: "vastraui add @vastra/form",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Other/Form.tsx",
            packageName: "@vastra/form",
            filePath: "components/CustomComponent/Other/Form.tsx",
            showcasePath: "components/ComponentShowcase/Other/Form.tsx",
            PropsDetails: [
              {
                name: 'mode',
                type: "'day' | 'night'",
                description: 'Color mode for the registration form',
                default: "'night'"
              },
              {
                name: 'accentColor',
                type: 'string',
                description: 'Primary accent color for the form elements',
                default: "'#00bfff'"
              },
              {
                name: 'backgroundColor',
                type: 'string',
                description: 'Background color of the entire form container',
                default: 'undefined'
              },
              {
                name: 'formBackgroundColor',
                type: 'string',
                description: 'Background color of the form section',
                default: 'undefined'
              },
              {
                name: 'inputBackgroundColor',
                type: 'string',
                description: 'Background color of input fields',
                default: 'undefined'
              },
              {
                name: 'textColor',
                type: 'string',
                description: 'Color of the text in the form',
                default: 'undefined'
              },
              {
                name: 'placeholderColor',
                type: 'string',
                description: 'Color of placeholder text in input fields',
                default: 'undefined'
              },
              {
                name: 'borderColor',
                type: 'string',
                description: 'Color of input field borders',
                default: 'undefined'
              },
              {
                name: 'buttonHoverColor',
                type: 'string',
                description: 'Color of button on hover state',
                default: 'undefined'
              },
              {
                name: 'title',
                type: 'string',
                description: 'Title text for the registration form',
                default: "'Register'"
              },
              {
                name: 'subtitle',
                type: 'string',
                description: 'Subtitle text for the registration form',
                default: "'Signup now and get full access to our app.'"
              },
              {
                name: 'submitButtonText',
                type: 'string',
                description: 'Text displayed on the submit button',
                default: "'Submit'"
              },
              {
                name: 'signInText',
                type: 'string',
                description: 'Text preceding the sign-in link',
                default: "'Already have an account?'"
              },
              {
                name: 'signInLinkText',
                type: 'string',
                description: 'Text for the sign-in link',
                default: "'Sign in'"
              },
              {
                name: 'signInHref',
                type: 'string',
                description: 'URL/path for the sign-in link',
                default: "'#'"
              },
              {
                name: 'onSubmit',
                type: '(formData: FormData) => void',
                description: 'Callback function triggered on form submission',
                default: 'undefined'
              }
            ]
            
        },
        {
            name: "Gliderradio",
            href: "/other/gliderradio",
            title: "Glider Radio",
            description: "A glider radio component.",
            installCommand: "vastraui add @vastra/gliderradio",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Other/GliderRadio.tsx",
            packageName: "@vastra/gliderradio",
            filePath: "components/CustomComponent/Other/GliderRadio.tsx",
            showcasePath: "components/ComponentShowcase/Other/GliderRadio.tsx",
            PropsDetails: [
              {
                name: 'options',
                type: 'Option[]',
                description: 'Array of radio button options',
                default: 'undefined',
                required: true
              },
              {
                name: 'initialSelectedId',
                type: 'string',
                description: 'ID of the initially selected radio button option',
                default: 'options[0].id',
                required: false
              },
              {
                name: 'onSelect',
                type: '(id: string) => void',
                description: 'Callback function triggered when a radio button is selected',
                default: 'undefined',
                required: true
              }
            ]
        },
        {
            name: "PathAnimation",
            href: "/other/path",
            title: "Path Animation",
            description: "A path animation component.",
            installCommand: "vastraui add @vastra/path",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Other/PathTrace.tsx",
            packageName: "@vastra/path",
            filePath: "components/CustomComponent/Other/PathTrace.tsx",
            showcasePath: "components/ComponentShowcase/Other/PathTrace.tsx"
        },
        {
            name: "ProgressBar",
            href: "/other/progressbar",
            title: "Progress Bar",
            description: "A progress bar component.",
            installCommand: "vastraui add @vastra/progressbar",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Other/ProgressBar.tsx",
            packageName: "@vastra/progressbar",
            filePath: "components/CustomComponent/Other/ProgressBar.tsx",
            showcasePath: "components/ComponentShowcase/Other/ProgressBar.tsx",
            PropsDetails: [
              {
                name: 'value',
                type: 'number',
                description: 'Progress value of the circular progress bar',
                default: '10'
              },
              {
                name: 'size',
                type: 'number', 
                description: 'Diameter of the circular progress bar',
                default: '200'
              },
              {
                name: 'strokeWidth',
                type: 'number',
                description: 'Width of the progress bar stroke',
                default: '16'
              },
              {
                name: 'gradientStart',
                type: 'string',
                description: 'Starting color of the gradient progress bar',
                default: "'#60efff'"
              },
              {
                name: 'gradientEnd',
                type: 'string',
                description: 'Ending color of the gradient progress bar',
                default: "'#00ff87'"
              },
              {
                name: 'duration',
                type: 'number',
                description: 'Animation duration for progress bar',
                default: '2'
              },
              {
                name: 'glowColor',
                type: 'string',
                description: 'Color of the glow effect around progress bar',
                default: "'#60efff'"
              },
              {
                name: 'glowIntensity',
                type: 'number',
                description: 'Intensity of the glow effect',
                default: '8'
              },
              {
                name: 'backgroundColor',
                type: 'string',
                description: 'Background color of the progress bar',
                default: "'#000000'"
              },
              {
                name: 'fontColor',
                type: 'string',
                description: 'Color of the text/percentage display',
                default: "'#ffffff'"
              }
            ]
            
        },
        {
            name: "Ripple",
            href: "/other/ripple",
            title: "Ripple Animation",
            description: "A ripple animation component.",
            installCommand: "vastraui add @vastra/ripple",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Other/Ripple.tsx",
            packageName: "@vastra/ripple",
            filePath: "components/CustomComponent/Other/Ripple.tsx",
            showcasePath: "components/ComponentShowcase/Other/Ripple.tsx"
        },
        {
            name: "StarRating",
            href: "/other/starrating",
            title: "Star Rating Animation",
            description: "A star rating animation component.",
            installCommand: "vastraui add @vastra/starrating",
            sourceUrl: "https://raw.githubusercontent.com/vikashkhati007/vastraui/refs/heads/main/components/CustomComponent/Other/StarRating.tsx",
            packageName: "@vastra/starrating",
            filePath: "components/CustomComponent/Other/StarRating.tsx",
            showcasePath: "components/ComponentShowcase/Other/StarRating.tsx",
            PropsDetails: [
              {
                name: 'onChange',
                type: '(rating: number) => void',
                description: 'Callback function triggered when rating changes',
                default: 'undefined',
                required: false
              },
              {
                name: 'defaultValue',
                type: 'number',
                description: 'Initial rating value',
                default: '0'
              },
              {
                name: 'size',
                type: 'number',
                description: 'Size of each star in pixels',
                default: '30'
              },
              {
                name: 'color',
                type: 'string',
                description: 'Default color of stars',
                default: "'#666'"
              },
              {
                name: 'hoverColor',
                type: 'string',
                description: 'Color of stars on hover',
                default: "'#ff9e0b'"
              }
            ]
            
        }
    ]
}
