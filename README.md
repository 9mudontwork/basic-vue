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

### Vuex หรือ ตัวจัดการ Store

vuex เป็นตัวกลางใช้สำหรับการจัดการ สถานะทุกๆอย่างที่เกิดขึ้นในแอพเรา\
ดูได้จาก Doc https://vuex.vuejs.org/guide/

state เหมาะกับการเก็บพวกตัวแปร\
mutations เอาไว้เขียนแก้ไขค่าใน state\
action อย่าใช้เปลี่ยนแปลง state เหมาะกับส่งข้อมูลไปให้ mutations ให้มันแก้ไขแทน\
getters ใช้สำหรับดึงข้อมูล state\

ส่วน modules นั้น จะใช้เวลาเราอยากจัดระเบียบ store เวลามีหลายๆอย่าง เผื่อซ้ำกัน\

หลังจากเกิด action ใดๆแล้ว ต้องเรียกใช้ mutations เพื่อเซ็ตค่า state ให้ใช้คำสั่ง commit ฟังก์ชั่นในนั้น แล้วโยน paylaod เข้าไป\
ดูได้จาก Doc https://vuex.vuejs.org/api/#vuex-store-instance-methods\



### vue-router หรือ ตัวจัดการ เพจ url

beforeEnter คือการตั้ง Guard เฉพาะในแต่ละ route ดู Doc ได้ที่ https://router.vuejs.org/guide/advanced/navigation-guards.html#per-route-guard\

Props แต่ละอย่างดูได้ที่ Doc https://router.vuejs.org/api/#router-view-props\
meta fields ดูได้จาก Doc https://router.vuejs.org/guide/advanced/meta.html\

linkActiveClass ตั้งค่าสำ css เป็นค่า active สำหรับ link ที่เปิดอยู่\
จาก Doc https://router.vuejs.org/api/#active-class\

path * คือ ทุกๆ url ที่ไม่ได้เซ็ต path เอาไว้ จะถูก redirect ไป / หรือ หน้าแรก\

ส่วนนี้คือส่วนปกป้องเพจที่เราต้องการ เรียกว่า Global Guards ดูจาก Doc https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards\
ในทีนี้เรากำหนดว่าจะต้อง login จาก firebase ในโปรเจคเราก่อน ถึงจะไปเพจต่อไปที่กำหนดไว้ได้\
to คือ route object เพจต่อไปที่เราต้องการจะเปิด\
from เพจก่อนหน้าที่เปิด หรือ ปัจจุบัน\
next เป็นฟังก์ชั่นที่จะต้องเรียกใช้หลังเสร็จทุกอย่าง เพื่อเปิดเพจที่ต้องการ หรือจะ custom เองก็ได้\

to.matched.some คือ ใช้ some ลูป route object ที่เราจะกำลังจะเปิดทั้งหมด เพื่อดึงค่า meta ที่เราต้องการมาเช็ค (route object จะถูกบันทึกใน record)\
ตัวอย่างดูได้จาก https://router.vuejs.org/guide/advanced/meta.html#route-meta-fields\
firebase current user จาก Doc https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user\
```js
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const user = firebase.auth().currentUser;
  if (requiresAuth && !user) {
    next("/signin");
  }
  next();
});
```