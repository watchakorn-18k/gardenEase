import { databases } from '$lib/services/client';
import type { Plants } from '$lib/entities/plants';

const PLANTS_COLLECTION = import.meta.env.VITE_PLANTS_COLLECTION;
const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
// ดึงข้อมูลทั้งหมดจาก collection plants
export async function getPlants(): Promise<Plants[]> {
	try {
		const response = await databases.listDocuments(DATABASE_ID, PLANTS_COLLECTION);

		// ตรวจสอบให้แน่ใจว่า response.documents เป็น Record<string, any>[]
		const plants: Plants[] = response.documents.map((doc) => ({
			plant_id: doc.$id,
			name: doc.name,
			description: doc.description,
			grow_time: doc.grow_time,
			water_needed: doc.water_needed,
			sunlight: doc.sunlight,
			soil_type: doc.soil_type,
			image_url: doc.image_url
		}));

		return plants; // ส่งคืน array ของ Plant
	} catch (error) {
		console.error('Error fetching plants:', error);
		throw error; // โยนข้อผิดพลาดออกไป
	}
}
