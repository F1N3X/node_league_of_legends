import fs from 'fs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    const championsData = JSON.parse(fs.readFileSync('champions.json', 'utf-8'));

    for (const champion of championsData) {
      await prisma.champion.create({
        data: {
          name: champion.name,
          type: champion.type
        }
      });
    }

    console.log('Données envoyées avec succès !');
  } catch (error) {
    console.error("Erreur lors de l'envoi de données :", {error : error.message});
  } finally {
    // Fermez la connexion à la base de données
    await prisma.$disconnect();
  }
}

// Appel de la fonction seed pour démarrer le processus de semis
seed();