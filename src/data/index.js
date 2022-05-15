
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, query, where, collection, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDdDjunNA8pZm9Q0GCkGQHhCUxCi_-pS_I",
  authDomain: "proyecto-react-espinosa.firebaseapp.com",
  projectId: "proyecto-react-espinosa",
  storageBucket: "proyecto-react-espinosa.appspot.com",
  messagingSenderId: "524962610483",
  appId: "1:524962610483:web:c904b37d914c8d3a0e9246"
};

const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app)

export default firestoreDB

// 1 obtener todos los items

// async/await es el sugar syntax de las promises, LEER>
export async function  getAllItems(){
    //obtener la referencia a la coleccion de items
    const miColec = collection(firestoreDB, 'items')
    // obtener los items
    //getDocs(miColec).then(result => console.log(result))
    // el await seria equivalente el then
    const productSnap = await getDocs(miColec)

    return productSnap.docs.map(doc => {
        return{
        ...doc.data(),
        id: doc.id
        }
    })
    }

    // 2 obtener todos los items de una categoria
    export async function getItemsByCategory(categoryId){
    //obtenemos la referencia a la colleccion de los items
    const miColec = collection(firestoreDB, 'items')
    //query unas solicitud especifica a la base de datos. 
    const queryProduct = query(miColec, where('category','==', categoryId))
    const productSnap = await getDocs(queryProduct)

    return productSnap.docs.map(doc => {
        return{
        ...doc.data(),
        id: doc.id
        }
    })

}

// 3 obtener un solo item segun el ID para pasar el Item Detail

export async function getItem(id){
    const miColec = collection(firestoreDB, 'items')
    //solicitar la referenia a un documento con doc
    const productRef = doc(miColec, id)
    const productSnap = await getDoc(productRef)

        return{
        ...productSnap.data(),
        id: productSnap.id
        }
}
