<template>
    <div class="container">
        <div class="login">
            <h1 style="color:#ffffff">系统登录</h1>
            <div class="styleAcount">
                <el-input
                        placeholder="请输入账户名称"
                        prefix-icon="el-icon-phone"
                        v-model="acount">
                </el-input>
            </div>
            <div class="stylePwd">
                <el-input
                        placeholder="请输入密码"
                        prefix-icon="el-icon-view"
                        v-model="password"
                        show-password>
                </el-input>
            </div>
            <div class="styleBtn">
                <el-button type= "primary" style="width:30%;margin-bottom:30px;" @click="toMainPage">登录</el-button>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Login",

        data() {
            return {
                acount : "",
                password:""
            }

        },
        methods:{
          toMainPage : function () {
              this.$router.push({path:'/MainPage'});
              console.log("路由")
          }
        }

    }
</script>

<style scoped>
    .container{
        width: 100%;
        height: 100%;
        background-color:#283443;
        position: relative;
    }

    .login {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);


    }
    .styleAcount{
        width: 30%;
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .stylePwd{
        width: 30%;
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .styleBtn{
        width: 100%;
        margin-top:40px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }





</style>