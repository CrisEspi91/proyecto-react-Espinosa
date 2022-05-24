
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, query, where, collection, getDocs, setDoc, Timestamp, addDoc} from "firebase/firestore";


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

export async function createBuyOrder(orderData){
    const buyTimestamp = Timestamp.now()
    const orderWhithDate = {
        ...orderData, 
        date: buyTimestamp
    }

        const miColec = collection(firestoreDB, 'buyOrders')

        const orderDoc = await addDoc(miColec, orderWhithDate)
    console.log('ordenlista con id', orderDoc.id)

}



// abajo exportamos una base de datos a FIREBASE
// export async function dataToFirebase() {
//     const products = [{
//         "title": "RTX 3090",
//         "precio": 1080.99,
//         'category': 'Intel',
//         'stock': 1,
//         "img": "https://m.media-amazon.com/images/I/81-GWj0nEkL._AC_SL1500_.jpg"
//       }, {
//         "title": "RX 6900",
//         "precio": 3000,
//         'category': 'AMD',
//         'stock': 9,
//         "img": "https://m.media-amazon.com/images/I/81c3PiQLBUL._AC_SX450_.jpg"
//       }, {
//         "title": "RTX 3080 ti",
//         "precio": 2800,
//         'category': 'Intel',
//         'stock': 6,
//         "img": "https://m.media-amazon.com/images/I/81TzR9+1IXL._AC_SL1500_.jpg"
//       }, {
//         "title": "RX 6800",
//         "precio": 1222,
//         'category': 'AMD',
//         'stock': 3,
//         "img": "https://m.media-amazon.com/images/I/71ZmRXZcnXS._AC_SL1500_.jpg"
//       }]

//       // remplazar "cities" por el nombre de la coleccion
//       const miColeccion = collection(firestoreDB, 'items');  
      
//     products.forEach((item) => {     
//         const newDoc = doc(miColeccion)
 
//         setDoc(newDoc, item).then(() => {
//           console.log("Document written with ID: ", newDoc.id)})
//         .catch(err => {
//             console.error("Error adding document: ", err);
//         });
//     });
// }
