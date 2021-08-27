const { db } = require('./db')
const PORT = process.env.PORT || 3000
const app = require('./app')
const runSeed = require('../script/seed');

const init = async () => {
  try {
    if(process.env.SEED === 'true'){
      await runSeed();
    }
    else {
      await db.sync()
    }
    // start listening (and create a 'server' object representing our server)
    app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))
  } catch (ex) {
    console.log(ex)
  }
}

init()
