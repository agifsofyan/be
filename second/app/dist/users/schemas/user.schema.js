"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    nama: { type: String },
    hobi: { type: String },
    alamat: { type: String },
    nomor_telp: { type: Number },
}, {
    collection: 'users',
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});
//# sourceMappingURL=user.schema.js.map