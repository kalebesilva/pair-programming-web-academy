import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';

export const collections: { games?: mongoDB.Collection } = {}