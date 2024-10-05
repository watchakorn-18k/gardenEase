import { databases } from '$lib/services/client';
import type { Users } from '$lib/entities/users';
import { ID, Query } from 'appwrite';

const USERS_COLLECTION = import.meta.env.VITE_PLANTS_COLLECTION;
const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;

// ดึงข้อมูลทั้งหมดจาก collection users
export async function insertUser(user: Users): Promise<boolean> {
	try {
		console.log('user.user_id', user.user_id); // แสดง user_id เพื่อตรวจสอบ

		if (!user.user_id) {
			throw new Error('user_id is required');
		}
		await databases.createDocument(DATABASE_ID, USERS_COLLECTION, ID.unique(), user);
		return true;
	} catch (error) {
		console.error('Error inserting user:', error);
		return false;
	}
}

export async function getUser(user_id: string): Promise<Users | null> {
	try {
		const response = await databases.listDocuments(DATABASE_ID, USERS_COLLECTION, [
			Query.equal('user_id', user_id)
		]);

		// ตรวจสอบว่ามีเอกสารใน response.documents
		if (response.documents.length === 0) {
			console.log(`No user found with user_id: ${user_id}`);
			return null; // คืนค่า null หากไม่พบผู้ใช้
		}

		const userData = response.documents[0]; // เข้าถึงเอกสารตัวแรก
		const user: Users = {
			user_id: userData.user_id, // ใช้ $id ของเอกสาร
			name: userData.name,
			email: userData.email,
			phone: userData.phone,
			image_url: userData.image_url
		};

		return user;
	} catch (error) {
		console.error('Error fetching user:', error);
		throw error; // โยนข้อผิดพลาดออกไป
	}
}
