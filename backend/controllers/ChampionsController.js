import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createChampion = (req, res) => {
    let champion = req.body;
    prisma.champion.create({
        data: {
            name: champion.name,
            type: champion.type,
        },
    })
    .then((champion) => {
        res.json(champion);
    })
    .catch((error) => {
        res.json({error: error.message});
    });
};



const getChampions = (req, res) => {
    prisma.champion.findMany()
    .then((champions) => {
        res.json(champions);
    })
    .catch((error) => {
        res.json({error: error.message});
    });
}



const getSingleChampion = (req, res) => {
    let id = Number(req.params.id);

    prisma.champion.findUnique({
        where: {
            id: parseInt(id),
        },
    })
    .then((champion) => {
        res.json(champion);
    })
    .catch((error) => {
        res.json({error: error.message});
    });
}




const updateChampion = (req, res) => {
    let id = Number(req.params.id);
    let champion = req.body;

    prisma.champion.update({
        where: {
            id: id,
        },
        data: {
            name: champion.name,
            type: champion.type,
        },
    })
    .then(champion => {
        res.json(champion);
    })
    .catch(error => {
        res.json({error: error.message});
    });
}


const deleteChampion = (req, res) => {
    let id = Number(req.params.id);

    prisma.champion.delete({
        where: {
            id: id,
        },
    })
    .then(champion => {
        res.json(champion);
    })
    .catch(error => {
        res.json({error: error.message});
    });
}






export { createChampion, getChampions, getSingleChampion, updateChampion, deleteChampion };