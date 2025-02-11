// firebase.js

// Importa a função necessária para inicializar o Firebase
import { initializeApp } from "firebase/app";

// Aqui vão as credenciais do seu projeto Firebase (pegue do console do Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyCOWIr7VVTzC69-HuDilzCEx_DQ2A4jlME",
  authDomain: "dropbox-e142e.firebaseapp.com",
  projectId: "dropbox-e142e",
  storageBucket: "dropbox-e142e.firebasestorage.app",
  messagingSenderId: "197884100258",
  appId: "1:197884100258:web:deca5f2c3f73642ba021fb"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta a instância do Firebase para ser usada em outras partes do código
export default app;
