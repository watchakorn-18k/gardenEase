import { account } from '$lib/services/client';
import type { Users } from '$lib/entities/users';
import { insertUser } from '$lib/repositories/users';
import { goto } from '$app/navigation';
import { base } from '$app/paths';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function login(email: string, password: string) {
	try {
		const response = await account.createEmailPasswordSession(email, password);
		// console.log('Login success', response);
		return response;
	} catch (error) {
		// console.error('Login failed', error);
		return error;
	}
}

export async function createAccount(email: string, password: string, name: string) {
	try {
		const response = await account.create('unique()', email, password, name);
		console.log('Account created successfully:', response);
		const userData: Users = {
			user_id: response.$id || 'test_1234',
			name: name,
			email: email,
			phone: '',
			image_url: ''
		};
		if (await insertUser(userData)) {
			console.log('User data inserted successfully');
		}
		return 'response'; // ส่งคืนข้อมูลผู้ใช้ที่สร้างเสร็จแล้ว
	} catch (error) {
		console.error('Failed to create account:', error);
		return error;
	}
}

export async function checkLoginStatus() {
	try {
		const user = await account.get(); // ตรวจสอบข้อมูลบัญชีผู้ใช้
		// console.log('User is logged in:', user); // แสดงข้อมูลของผู้ใช้ที่เข้าสู่ระบบ
		return { status: true, data: user };
	} catch (error) {
		// if (error.code === 401) {
		// 	console.log('User is not logged in'); // ผู้ใช้ยังไม่ได้เข้าสู่ระบบ
		// } else {
		// 	// console.error('Error checking login status:', error);
		// }
		return { status: false, data: error };
	}
}

export async function logout(): Promise<boolean> {
	try {
		// ลบเซสชันปัจจุบัน
		await account.deleteSession('current');
		console.log('Logout successful');
		return true;
	} catch (error) {
		console.error('Error during logout:', error);
		return false;
	}
}

export async function forgotPassword(email: string) {
	const promise = account.createRecovery(email, `${BASE_URL}/account/reset-password`);

	promise.then(function (response) {
		console.log(response); // Success
	}, function (error) {
		console.log(error); // Failure
	});
}

export async function resetPassword(userID: string, secret: string, password: string) {
	const promise = account.updateRecovery(
		userID,
		secret,
		password
	);

	promise.then(function (response) {
		return true
	}, function (error) {
		return false
	});
}