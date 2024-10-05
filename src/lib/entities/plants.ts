export type Plants = {
	plant_id: string; // UUID รหัสผัก (Primary Key)
	name: string; // ชื่อผัก
	description: string; // รายละเอียดการปลูก
	grow_time: number; // ระยะเวลาการเจริญเติบโต (วัน)
	water_needed: number; // ความถี่ในการรดน้ำ (ต่อวัน)
	sunlight: string; // ปริมาณแสงที่ต้องการ
	soil_type: string; // ประเภทของดินที่เหมาะสม
	image_url: string; // ลิงก์รูปภาพของผัก
};
