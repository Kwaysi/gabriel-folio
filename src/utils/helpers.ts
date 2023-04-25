import { Record } from "pocketbase";
import { NEXT_PUBLIC_BASE_URL } from "./constants";

export const getFileURL = (record: Record, filename: string) => {
	return `${NEXT_PUBLIC_BASE_URL}/api/files/${record.collectionName}/${record.id}/${filename}`;
};
