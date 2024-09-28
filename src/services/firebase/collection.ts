import { collection, doc } from "firebase/firestore";
import { firestore } from "./firebase";

enum Collection {
  Profile = "profile",
}

export const profileCollection = collection(firestore, Collection.Profile);

export function getProfileDocRef(id: string) {
  return doc(firestore, Collection.Profile, id);
}
