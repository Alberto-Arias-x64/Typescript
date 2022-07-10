import express from 'express'
import { Daily_Routine } from "../Data/Data_Base"

const Read = async (_req: express.Request, res: express.Response) => {
    const Data = await Daily_Routine.findAll()
    return (res.json(Data))
}
const Add = (req: express.Request, res: express.Response) => {
    const Data = req.body
    if (Data.name === '') return (res.status(400).json({ error: 'empty string' }))
    Daily_Routine.create({
        name: Data.name,
        time_init: Data.start,
        time_end: Data.end,
    })
        .then(() => Read(req, res))
        .catch((error) => {
            return (res.status(400).json({ error: error.errors[0].message }))
        })
}
const Delete = (req: express.Request, res: express.Response) => {
    const Data = req.body
    Daily_Routine.destroy({
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