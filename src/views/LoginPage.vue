<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import axios from 'axios'

const ruleFormRef = ref<FormInstance>()
const validatePassUserName = (rule: any, value: any, callback: any) => {
    if (value === '') {
    callback(new Error('ユーザー名を入力してください'))
    } else {
    if (ruleForm.userName !== '') {
        if (!ruleFormRef.value) return
        ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
    }
}

const validatePassMailAddress = (rule: any, value: any, callback: any) => {
    if (value === '') {
    callback(new Error('メールアドレスが正しくありません'))
    } else {
    if (ruleForm.mailAddress !== '') {
        if (!ruleFormRef.value) return
        ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
    }
}

const validatePassPassword = (rule: any, value: any, callback: any) => {
    if (value === '') {
    callback(new Error('パスワードが入力されていません'))
    } else {
    if (ruleForm.password !== '') {
        if (!ruleFormRef.value) return
        ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
    }
}

const ruleForm = reactive({
    userName: '',
    mailAddress: '',
    password: '',
})

const rules = reactive({
    userName: [{ validator: validatePassUserName, trigger: 'blur' }],
    mailAddress: [{ validator: validatePassMailAddress, trigger: 'blur' }],
    password: [{ validator: validatePassPassword, trigger: 'blur' }],
})
//リセット
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const createUser = () => {
    axios
    .post("http://localhost/api/user_masters", {
        user_name: ruleForm.userName,
        mail_address: ruleForm.mailAddress,
        password: ruleForm.password,
    })
    .then(() => console.log("create user"))
    .catch((error) => console.log(error));
};

const checkData = () => {
    if(ruleForm.userName === "" || ruleForm.mailAddress === "" || ruleForm.password === "") {
        alert("未入力の項目があります");
        return false;
    } else {
        return createUser();
    }
};
</script>

<template>
  <div class="login-wrapper">
    <div class="login-container">
        <h1>ログイン</h1>
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">

            <el-form-item label="ユーザー名" prop="userName">
              <el-input v-model="ruleForm.userName" type="text" autocomplete="off" />
            </el-form-item>

            <el-form-item label="メールアドレス" prop="mailAddress">
              <el-input v-model="ruleForm.mailAddress" type="email" autocomplete="off"/>
            </el-form-item>

            <el-form-item label="パスワード" prop="password">
              <el-input v-model="ruleForm.password" type="password" />
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="checkData">サインイン</el-button>
              <el-button @click="resetForm(ruleFormRef)">リセット</el-button>
            </el-form-item>

        </el-form>
    </div>
  </div>
</template>

<style>
.login-container {
  width: 400px;
  margin: 50px auto;
  padding: 50px;
  box-shadow: 0 1rem 2rem hsl(0 0% 0% / 20%);
  text-align: center;
}

.login-container h1 {
    padding-bottom: 20px;
}
</style>