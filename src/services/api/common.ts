import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { errors } from "../../constants/message";

export async function fetchCollection<T>(
  collection: CollectionReference<DocumentData, DocumentData>,
): Promise<{ data?: T[]; error?: string }> {
  try {
    const querySnapshot = await getDocs(collection);
    const documents: T[] = [];

    querySnapshot.forEach((doc) =>
      documents.push({ id: doc.id, ...doc.data() } as T),
    );

    return { data: documents };
  } catch (error) {
    if (error instanceof Error) {
      return { error: `${errors.document.fetchError}: ${error.message}` };
    } else {
      return { error: errors.common.unknown };
    }
  }
}

export async function fetchDocument<T>(
  docRef: DocumentReference<DocumentData, DocumentData>,
): Promise<{ data?: T; error?: string }> {
  try {
    const querySnapshot = await getDoc(docRef);

    if (!querySnapshot.exists()) {
      return { error: errors.document.notExist };
    }

    return { data: { id: querySnapshot.id, ...querySnapshot.data() } as T };
  } catch (error) {
    if (error instanceof Error) {
      return { error: errors.document.fetchError + error.message };
    } else {
      return { error: errors.common.unknown };
    }
  }
}
