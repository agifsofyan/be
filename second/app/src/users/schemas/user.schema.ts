import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    nama: { type: String },
    hobi: { type: String },
    alamat: { type: String },
    nomor_telp: { type: Number },
},{ 
	collection: 'users',
	versionKey: false,
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});
