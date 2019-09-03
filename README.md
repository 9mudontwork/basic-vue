# basic-vue

>ฝึกเขียน vuejs <br>
>vuejs 2 vuex vue-router firebase <br>
>พยายามหาข้อมูลต่าง ๆ แล้วเขียนเก็บไว้เป็นตัวอย่าง ยังไม่เสร็จ <br>

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

vuex เป็นตัวกลางใช้สำหรับการจัดการ สถานะทุกๆอย่างที่เกิดขึ้นในแอพเรา <br>
ดูได้จาก Doc https://vuex.vuejs.org/guide/

state เหมาะกับการเก็บพวกตัวแปร <br>
mutations เอาไว้เขียนแก้ไขค่าใน state <br>
action อย่าใช้เปลี่ยนแปลง state เหมาะกับส่งข้อมูลไปให้ mutations ให้มันแก้ไขแทน <br>
getters ใช้สำหรับดึงข้อมูล state <br>

ส่วน modules นั้น จะใช้เวลาเราอยากจัดระเบียบ store เวลามีหลายๆอย่าง เผื่อซ้ำกัน <br>

หลังจากเกิด action ใดๆแล้ว ต้องเรียกใช้ mutations เพื่อเซ็ตค่า state ให้ใช้คำสั่ง commit ฟังก์ชั่นในนั้น แล้วโยน paylaod เข้าไป <br>
ดูได้จาก Doc https://vuex.vuejs.org/api/#vuex-store-instance-methods <br>



### vue-router หรือ ตัวจัดการ เพจ url

beforeEnter คือการตั้ง Guard เฉพาะในแต่ละ route ดู Doc ได้ที่ https://router.vuejs.org/guide/advanced/navigation-guards.html#per-route-guard <br>

Props แต่ละอย่างดูได้ที่ Doc https://router.vuejs.org/api/#router-view-props <br>
meta fields ดูได้จาก Doc https://router.vuejs.org/guide/advanced/meta.html <br>

linkActiveClass ตั้งค่าสำ css เป็นค่า active สำหรับ link ที่เปิดอยู่ <br>
จาก Doc https://router.vuejs.org/api/#active-class <br>

path * คือ ทุกๆ url ที่ไม่ได้เซ็ต path เอาไว้ จะถูก redirect ไป / หรือ หน้าแรก <br>

ส่วนนี้คือส่วนปกป้องเพจที่เราต้องการ เรียกว่า Global Guards ดูจาก Doc https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards <br>
ในทีนี้เรากำหนดว่าจะต้อง login จาก firebase ในโปรเจคเราก่อน ถึงจะไปเพจต่อไปที่กำหนดไว้ได้ <br>
to คือ route object เพจต่อไปที่เราต้องการจะเปิด <br>
from เพจก่อนหน้าที่เปิด หรือ ปัจจุบัน <br>
next เป็นฟังก์ชั่นที่จะต้องเรียกใช้หลังเสร็จทุกอย่าง เพื่อเปิดเพจที่ต้องการ หรือจะ custom เองก็ได้ <br>

to.matched.some คือ ใช้ some ลูป route object ที่เราจะกำลังจะเปิดทั้งหมด เพื่อดึงค่า meta ที่เราต้องการมาเช็ค (route object จะถูกบันทึกใน record) <br>
ตัวอย่างดูได้จาก https://router.vuejs.org/guide/advanced/meta.html#route-meta-fields <br>
firebase current user จาก Doc https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user <br>
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