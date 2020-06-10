const mongoose = require('mongoose')
mongoose.Promise = global.Promise // usando api de promise to prórprio nodeJS
// module.exports = mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = mongoose.connect('mongodb+srv://todo:teste123@todo-t3zzv.mongodb.net/<todo>?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB is connected')
  })
  .catch((err) => {
    throw err
  })

