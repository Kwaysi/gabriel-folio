import PocketBase from "pocketbase";
import { NEXT_PUBLIC_BASE_URL } from "./constants";

export const pocketbase = new PocketBase(NEXT_PUBLIC_BASE_URL);
