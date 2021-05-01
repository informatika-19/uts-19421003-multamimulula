const  penjualanikanModel = require('../model/penjualanikan')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) =>{
    penjualanikanModel.create(data)
    .then(() => resolve({
        status: true,
        pesan: 'Berhasil menginput penjualan ikan'
    })).catch(() => reject({
        status: false,
        pesan: 'gagal menginput penjualan ikan'
    }))
})

exports.showAllData = () =>
new Promise((resolve, reject) =>{
    penjualanikanModel.find()
        .then(result => {
            resolve({
                status : true,
                pesan : 'Berhasil menampilkan semua data penjualan ikan',
                data : result
            })
        }).catch(() => reject({
            status : false,
            pesan : 'Gagal menampilkan semua data penjualan ikan',
            data : []
        }))
})

exports.showDataById = (id) =>
new Promise((resolve, reject) =>{
   penjualanikanModel.findOne({
        _id: objectId(id)
    }).then(result =>{
        resolve({
            status : true,
            pesan : 'Berhasil menampilkan semua id penjualan ikan',
            data : result
        })  
    }).catch(() => reject({
        status : false,
        pesan : 'Gagal menampilkan semua id penjualan ikan',
        data : null
    }))
})

exports.update = (id, data) =>
new Promise((resolve, reject) =>{
    penjualanikanModel.updateOne({
        _id: objectId(id)
    }, data).then(() => resolve({
        status: true,
        pesan: 'Berhasil mengubah data penjualan ikan'
    })).catch(() => reject({
        status: false,
        pesan: 'gagal mengubah data penjualan ikan'
    }))
})

exports.delete = (id) =>
new Promise((resolve, reject) =>{
    penjualanikanModel.deleteOne({
        _id : objectId(id)
    }).then(() => resolve({
        status: true,
        pesan: 'Berhasil menghapus data penjualan ikan'
    })).catch(() =>({
        status: false,
        pesan: 'Gagal Menghapus data penjualan ikan'
    }))
})
