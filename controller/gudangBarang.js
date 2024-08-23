import db from "../Config/Connection.js"

const getBarang = async(req,res) => {
    const sql = "SELECT * FROM barang"
    
    db.query(sql,(error,result)=> {
        if(error)
        {
            res.status(400)
            res.send(error)
        }
        res.json(result)
    })
}

const getBarangById = async(req,res) => {
    const id = req.query.id
    const sql = `SELECT * FROM barang WHERE id =${id}`

    db.query(sql,(error,result) => {
        if(error)
        {
            res.status(400)
            res.send(error)
        }
        res.status(200)
        res.json(result)
    })
}

const createBarang = async(req,res) => {
    const {nama_barang,kategori_barang,jumlah} = req.body
    const sql = `INSERT INTO barang (nama_barang,kategori_barang,jumlah) VALUES (?,?,?)`

    db.query(sql,[nama_barang,kategori_barang,jumlah],(error,result) => {
        if(error)
        {
            return res.status(500).json({message:"gagal create data", error:error})
        }
        res.status(201).json({message:"berhasil insert data",result:result })

    })
}

const deleteBarang = async(req,res) => {
    const id = req.query.id
    const sql = `DELETE FROM barang WHERE id = ${id} `

    db.query(sql,[id],(error,result) => {
        if(error)
            {
                res.status(400)
                res.send(error)
            }
            res.status(201)
        res.json("data berhasil dihapus")
    })
}

const updateBarang= async(req,res) => {
    const id = req.query.id

    const {nama_barang, kategori_barang, jumlah} = req.body
    if(nama_barang || kategori_barang || jumlah){
        const sql = `UPDATE barang SET nama_barang = "${nama_barang}", kategori_barang = "${kategori_barang}, jumlah = ${jumlah}" WHERE id = ${id};`
        db.query(sql,(error,result) => {
            if (error)
                res.status(400).send(error.message)

            res.json(result)
        }) 
    }else{
        res.send("isi body")
    }
}

export {getBarang,getBarangById,updateBarang,deleteBarang,createBarang}