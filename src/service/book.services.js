import { db } from "../firebase-config";

import{
    collection,
    getDocs,
    getDoc,
    updateDoc,
    deleteDoc,
    doc,
    addDoc,
} from "firebase/firestore"

const bookCollectionRef = collection(db, "books");
class BookDataServices {
  addBooks = (newBook) => {
    return addDoc(bookCollectionRef, newBook);
  };

  updateBook = (id, updatedBook) => {
    const bookDoc = doc(db, "books", id);
    return updateDoc(bookDoc, updatedBook);
  };

  deleteBook = (id) => {
    const bookDoc = doc(db, "books", id);
    return deleteDoc(bookDoc);
  };

  getAllBooks = () => {
    return getDocs(bookCollectionRef);
  };

  getBook = (id) => {
    const bookDoc = doc(db, "books", id);
    return getDoc(bookDoc);
  };
}

export default new BookDataServices();