const Photon = require('@generated/photon')

new Photon().roles
  .create({
    data: {
      role: 'DEFAULT',
    },
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => process.exit())
