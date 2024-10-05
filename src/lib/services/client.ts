import { Client, Account, Databases, Storage } from 'appwrite';

const client = new Client();
const HOST_APPWRITE = import.meta.env.VITE_HOST_APPWRITE;
const PROJECT_APPWRITE = import.meta.env.VITE_PROJECT_APPWRITE;
client.setEndpoint(HOST_APPWRITE).setProject(PROJECT_APPWRITE);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
