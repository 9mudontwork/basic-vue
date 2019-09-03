# basic-vue

>ฝึกเขียน vuejs\
>vuejs 2 vuex vue-router firebase\
>พยายามหาข้อมูลต่าง ๆ แล้วเขียนเก็บไว้เป็นตัวอย่าง ยังไม่เสร็จ\

**กำลังทำ**
* login logout register
* form validate

**ที่จะทำ**
* ระบบสมาชิก ข้อมูลสมาชิก
* แก้ไขข้อมูลสมาชิก
* อัพโหลดรูป แก้ไขรูป สมาชิก
* ระบบจัดการสมาชิก admin user

---

# จะ comment มั่วๆ ทุกๆอย่าง กันลืมไว้ข้างล่าง

**Vuex หรือ ตัวจัดการ Store**

vuex เป็นตัวกลางใช้สำหรับการจัดการ สถานะทุกๆอย่างที่เกิดขึ้นในแอพเรา\
ดูได้จาก Doc https://vuex.vuejs.org/guide/

state เหมาะกับการเก็บพวกตัวแปร\
mutations เอาไว้เขียนแก้ไขค่าใน state\
action อย่าใช้เปลี่ยนแปลง state เหมาะกับส่งข้อมูลไปให้ mutations ให้มันแก้ไขแทน\
getters ใช้สำหรับดึงข้อมูล state\

ส่วน modules นั้น จะใช้เวลาเราอยากจัดระเบียบ store เวลามีหลายๆอย่าง เผื่อซ้ำกัน\

หลังจากเกิด action ใดๆแล้ว ต้องเรียกใช้ mutations เพื่อเซ็ตค่า state ให้ใช้คำสั่ง commit ฟังก์ชั่นในนั้น แล้วโยน paylaod เข้าไป\
ดูได้จาก Doc https://vuex.vuejs.org/api/#vuex-store-instance-methods\