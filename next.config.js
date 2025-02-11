/** @type {import('next').NextConfig} */

module.exports = {  
  async redirects() {
    return [   
      {
        source: '/term',
        destination: '/',
        permanent: true
      }    
    ]
  }
}
