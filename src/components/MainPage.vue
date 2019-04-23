<template>
    <div class="container">
        <el-container style="height:100%">
            <el-aside width="200px">
                    <el-col style="margin-right: 50px">
                        <el-menu
                                default-active="2"
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @select="select"
                                background-color="#283443"
                                text-color="#fff"
                                active-text-color="#ffd04b">
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>导航一</span>
                                </template>
                                <el-menu-item-group>

                                    <el-menu-item index="1-1">选项1</el-menu-item>
                                    <el-menu-item index="1-2">选项2</el-menu-item>
                                    <el-menu-item index="1-3">选项3</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-menu-item index="2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">导航二</span>
                            </el-menu-item>
                            <el-menu-item index="3">
                                <i class="el-icon-document"></i>
                                <span slot="title">导航三</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <i class="el-icon-setting"></i>
                                <span slot="title">导航四</span>
                            </el-menu-item>
                            <el-menu-item index="5">
                                <i class="el-icon-setting"></i>
                                <span slot="title">导航五</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>

</template>

<script>
    export default {
        name: "MainPage",
        data(){
            return {

            }
        },
        methods : {
            toLogin : function () {
                // this.$router.push({path:'/Login'});
            },
            handleOpen : function (key, keyPath){
                console.log(key, keyPath);
            },
            select :function (key) {
                console.log(key)
            }
        }
    }

</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
    background-color: #42b983;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #283443;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body > .el-container {
    margin-bottom: 40px;
    height: 100%;
}


</style>