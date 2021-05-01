const mongoose = require('mongoose')
const Schema = mongoose.Schema

const penjualanikanSchema = new Schema({
   	    ikan:{
        type: String
        },
        hargaJual:{
            type: String
        },

	    jenisIkan:{
        type: String
        },
        hargaModal : {
            type: String
        },
	    tanggalPenjualan : {
             type: String
        }
})
module.exports =mongoose.model('penjualanikan',penjualanikanSchema)