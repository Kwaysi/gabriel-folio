export const getFileURL = (record: any, filename: string) => {
	return `https://gbadmin.creosis.com/api/files/${record.collectionName}/${record.id}/${filename}`;
};
