import mongoose from 'mongoose'

const personaSchema = mongoose.Schema({
  name: String,
  description: String,
})

export default mongoose.model('personas', personaSchema)