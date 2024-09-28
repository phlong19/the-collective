import { getProfileDocRef, profileCollection } from "../firebase/collection";
import { fetchCollection, fetchDocument } from "./common";
import { Profile } from "../model/model";

export async function getProfiles() {
  const { data, error } = await fetchCollection<Profile>(profileCollection);

  if (error) {
    throw new Error(error);
  }

  return data;
}

export async function getProfile(id: string) {
  const docRef = getProfileDocRef(id);
  const { data, error } = await fetchDocument<Profile>(docRef);

  if (error) {
    throw new Error(error);
  }

  return data;
}
