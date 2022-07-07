import express from 'express'
import { Alarms } from "../Data/Data_Base"

const Read = async (_req:express.Request, res:express.Response) => {
    const Data = await Alarms.findAll()
    return (res.json(Data))
}
const Add = (req:express.Request, res:express.Response) => {
    const Data = req.body
    if (Data.time === '') return (res.status(400).json({ error: 'empty string' }))
    if (!Data.time.includes(':')) return (res.status(400).json({ error: 'error time' }))
    if (Data.time.length !== 5) return (res.status(400).json({ error: 'error time' }))
    Alarms.create({
        time: Data.time
    })
        .then(() => Read(req, res))
        .catch((error) => {
            return (res.status(400).json({ error: error.errors[0].message }))
        })
}
const Delete = (req:express.Request, res:express.Response) => {
    const Data = req.body
    Alarms.destroy({
        where: {
            id: Data.id
        }
    })
        .then(() => Read(req, res))
        .catch(() => {
            return (res.status(400).json({ error: 'id no found' }))
        })
}

export { Read, Add, Delete }