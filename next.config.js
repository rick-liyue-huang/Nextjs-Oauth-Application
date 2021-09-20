
const config = {
  distDir: 'dest',
  generateEtags: true,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2
  },
  pageExtensions: ['jsx', 'js'],

};


module.exports = {
  reactStrictMode: true,
}
