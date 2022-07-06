import { Rules } from "../Data/Data_Base"

const Read = async(_req, res) => {
    const Data = await Rules.findAll()
    return(res.json(Data))
}
const Add = (req, res)=> {
    const Data = req.body
    Rules.create({
        name: Data.name
    })
    .then(() => Read(req,res))
    .catch((error) => {
        return (res.status(400).json({error:error.errors[0].message}))
    })
}
const Delete = (req,res) => {
    const Data = req.body
    Rules.destroy({
        where:{
            id: Data.id
        }
    })
    .then(() => Read(req,res))
    .catch(() => {
        return (res.status(400).json({error:'id no found'}))
    })
}

export { Read, Add, Delete}