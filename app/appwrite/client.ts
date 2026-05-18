import { Account, Client, Databases ,Storage } from "appwrite";
export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECGT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_iD,
  usersCollectionId: import.meta.env.VITE_APPWRITE_USERS_iD,
  tripsCollectionId: import.meta.env.VITE_APPWRITE_TRIPS_iD,
  apiKey: import.meta.env.VITE_APPWRITE_API_KEY,
  apiEndpoint: import.meta.env.VITE_APPWRITE_API_ENDPOINT,
};

const client=new Client()
.setEndpoint(appwriteConfig.apiEndpoint())
.setProject(appwriteConfig.projectId)

const account=new Account(client);
const database=new Databases(client);
const storage=new Storage(client);


export {client,account,database,storage}