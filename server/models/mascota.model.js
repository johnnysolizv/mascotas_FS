const mongoose = require("mongoose");

const MascotaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre es requerido"],
      minlength: [3, "El nombre debe tener al menos 3 caracteres"],
    },
    raza: {
      type: String,
      required: [true, "La Raza es requerida"],
    },
    age: {
      type: Number,
      min: [0, "No puede ser menor a 0 años"],
      max: [120, "No puede tener mas de 120 años"],
    },
    color: {
        type: String,
        required: [true, "El color"],
      },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'El usuario es requerido']
    }
  },
  { timestamps: true }
);
MascotaSchema.virtual('user', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id'
});

MascotaSchema.set('toObject', { virtuals: true });
MascotaSchema.set('toJSON', { virtuals: true });

const Mascota = mongoose.model("Mascota", MascotaSchema, "mascotas");

module.exports = Mascota;
