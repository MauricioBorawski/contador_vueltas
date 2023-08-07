import { FirebaseError } from "./types";

export function isFirebaseError(error: any): error is FirebaseError {
  return (
    error && typeof error.code === "string" && typeof error.message === "string"
  );
}

