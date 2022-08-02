<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { IloginForm } from '@/types';
import { loginByUsername } from '@/api/user';
const userInfo = reactive<IloginForm>({
  username: '',
  password: '',
});
// 账号密码登录
const loginHandle = async () => {
  const data = await loginByUsername(userInfo);
  // 对登录信息进行本地缓存
};
</script>
