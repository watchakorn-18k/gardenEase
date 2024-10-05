import { databases } from '$lib/services/client';
import type { Plants } from '$lib/entities/plants';
import { Query } from 'appwrite';

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

export async function getPlant(plant_id: string): Promise<Plants | null> {
	try {
		const response = await databases.listDocuments(DATABASE_ID, PLANTS_COLLECTION, [
			Query.equal('plant_id', plant_id)
		]);

		// ตรวจสอบว่ามีเอกสารใน response.documents
		if (response.documents.length === 0) {
			console.log(`No plant found with plant_id: ${plant_id}`);
			return null; // คืนค่า null หากไม่พบผลไม้
		}

		const plantData = response.documents[0]; // เข้าถึงเอกสารตัวแรก
		const plant: Plants = {
			plant_id: plantData.$id, // ใช้ $id ของเอกสาร
			name: plantData.name,
			description: plantData.description,
			grow_time: plantData.grow_time,
			water_needed: plantData.water_needed,
			sunlight: plantData.sunlight,
			soil_type: plantData.soil_type,
			image_url: plantData.image_url
		};

		return plant;
	} catch (error) {
		console.error('Error fetching plant:', error);
		throw error; // โยนข้อผิดพลาดออกไป
	}
}