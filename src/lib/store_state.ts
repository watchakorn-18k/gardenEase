import { writable } from 'svelte/store';
import type { Users } from '$lib/entities/users';

// สร้าง store ที่แชร์ข้อมูลระหว่าง components
export const statusLogon = writable(false); // ค่าที่จะแชร์
export const userData = writable<Users>(); // ค่าที่จะแชร์
