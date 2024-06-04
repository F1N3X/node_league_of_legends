import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const signup = async (req, res) => {
    const { email, pseudo, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    prisma.user.create({
        where: {
            email: email,
            pseudo: pseudo,
            password: hashedPassword,
        },
    })
    // .then((user) => {
    //     const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET, {expiresIn: "2h"});

    //     res.json({token: token});
    // })
    // .catch((error) => {
    //     res.json({error: error.message});
    // });
};



const login = async (req, res) => {
    const { email, password } = req.body;

    prisma.user.findUnique({
        where: {
            email: email,
        },
    })
    
    if (!user) {
        res.json({error: "Utilisateur non trouvé"});
    }

    const checkedPassword = await bcrypt.compare(password, user.password);

    if (!checkedPassword) {
        res.json({error: "Mot de passe incorrect"});
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET, {expiresIn: "2h"});

    res.json({token: token});

};

export { signup, login };