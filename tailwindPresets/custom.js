module.exports = {
    
    theme: {
      extend: {
          colors:{
            blue: {
                roundCircle:'#ECF3FF',
              },
            textColor:{
                default:'#0c0b52',
            }  
          },
          
          zIndex: {
            60: '60',
            70: '70',
            80: '80',
            90: '90',
            100: '100',
          },
          maxWidth: {
            'desktop-layouts':'1280px'
          },
          fontFamily:{
             roboto:['Roboto', 'sans-serif']
          }
      },
      
    },
    plugins: [
      require('@tailwindcss/forms',),
      require('@tailwindcss/typography')
      
    ],
  }