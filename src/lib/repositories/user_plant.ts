import { databases } from '$lib/services/client';
import type { UserPlant } from '$lib/entities/plants';
import { Query } from 'appwrite';

const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;

export async function getUserPlants(user_id: string): Promise<UserPlant[]> {

    try {

        const response = await databases.listDocuments(DATABASE_ID, "6701248b00162efa6fd3", [
            Query.equal('user_id', user_id)
        ]);
        console.log("response", response)
        // ตรวจสอบให้แน่ใจว่า response.documents เป็น Record<string, any>[]
        const userPlants: UserPlant[] = response.documents.map(({
            $collectionId,
            $databaseId,
            $id,
            $permissions,
            $updatedAt,
            $createdAt,
            ...doc }) => ({
                ...doc, // ใช้ $id ของเอกสาร
            }));

        return userPlants; // ส่งคืน array ของ UserPlants
    } catch (error) {
        console.error('Error fetching user plants:', error);
        throw error; // โยนข้อผิดพลาดออกไป
    }
}