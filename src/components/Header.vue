<template>
    <header class="header">
        <div class="headerWrap">
            <div class="headerInner">
                <h1 class="logo">
                    <a href="/" class="home_link"><span class="blind">naver careers</span></a>
                </h1>
                <div class="menuBox menu_left">
                    <!-- :class="{on: active}" -->
                    <ul class="menu" :class="{active:isActive}" >
                        <li class="menuList" 
                            v-for="(item, index) in menu" :key=" `menu-${index}`"
                            @mouseenter="isActive = !isActive"
                            @mouseout="isActive = !isActive"
                            >
                            <!-- @mouseenter="mouseOver" -->
                            <router-link class="menuItem" :to="`${item.link}`" 
                            ><span>{{item.text}}</span></router-link>
                            <!-- 하위카테고리 -->
                            <div class="menuBox submenuBox" v-if="item.submenu">
                                <!-- v-for="(item, index) in menu.submenu" :key="index" -->
                                <ul class="menu submenu" >
                                    <li class="menuList subList">
                                        <router-link  class="menuItem subItem" :to="`${item.link}`">{{item.submenu}}</router-link>
                                    </li>
                                </ul>
                            </div> 
                        </li>
                    </ul>
                </div>      
                <div class="menuBox menu_right">
                    <ul class="menu">
                        <li class="menuList">
                            <a href="" class="menuItem link_jobs">
                                <span>Jobs</span>
                            </a>
                        </li>
                        <li class="menuList">
                            <a href="" class="menuItem link_login">
                                <span>Login</span>   
                            </a>
                        </li>
                        <li class="menuList">
                            <a href="" class="menuItem link_faq">
                                <span>FAQ</span>   
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'Header',
    data(){ 
        return { 
            isActive: false,
            active:false,
            // open: false,
            menu: [
                {
                    id: 0,
                    text: "Teams",
                    category : "teams",
                    link: "/",
                    submenu: "sub",
                        // {
                        // text: "sub",
                        // link: "#none"
                        // },
                },
                {
                    id: 1,
                    text: "People",
                    category : "people",
                    link: "/people"
                },
                {
                    id: 2,
                    text: "Benefits",
                    category : "benefits",
                    link: "/AboutView"
                },
                {
                    id: 3,
                    text: "Culture",
                    category : "culture",
                    link: "/AboutView"
                },
                {
                    id: 4,
                    text: "Value",
                    category : "value",
                    link: "/AboutView"
                }
            ],
        }
    },
    methods: {
        mouseOver() {
            this.active = !this.active;
        },
    },
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/mixins";
@include tablet{
}
.header{
    position: relative;
    overflow: hidden;
    min-width: 1229px;
    padding-top: 64px;
    margin: 0 auto;
    height: auto;
    min-height: 100%;
    box-sizing: border-box;
    .headerWrap{
        background-color: #fff;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
        .headerInner{
            position: static;
            display: flex;
            height: 64px;
            max-width: 1920px;
            width: 100%;
            box-sizing: border-box;
            padding: 0 104px 0 98px;
            margin: 0 auto;
            .logo{
                display: flex;
                align-items: center;
                .home_link{
                    background: url('../assets/img/logo.png') no-repeat ;
                    background-size: 328px 205px;
                    background-position: -105px 0px;
                    width: 223px;
                    height: 35px;
                }
            }
            .menuBox{
                display: flex;
                align-items: center;
                margin-left: 29px;
                .menu{
                    display: flex;
                    align-items: stretch;
                    flex-direction: row;
                   
                    .menuList{
                        display: flex;
                        align-items: center;
                        .menuItem{
                            display: block;
                            padding: 0 10px;
                            font-size: 17px;
                            font-weight: bold;
                            line-height: 32px;
                            letter-spacing: -0.36px;
                            color: #000;
                                span{
                                    position: relative;
                                } 
                        }
                        .menuItem:hover{
                            span::before{
                                content: "";
                                position: absolute;
                                left: 0;
                                right: 0;
                                bottom: 0;
                                height: 1px;
                                background-color: #000; 
                            }
                        }
                        .submenuBox {
                            display: none;
                        }
                    }
                    // &.active {
                    //     .submenuBox {
                    //         display: block;
                    //     }
                    // }
                }
                &.menu_left{
                    .menu{
                        .menuList{
                            position: relative;
                            display: flex;
                            .submenuBox{
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 182px;
                                background-color: rgba(255, 255, 255, 0.98);
                                z-index: -1;
                                margin: 0;
                                    .submenu{
                                        margin: 15px 0;
                                        .subList{
                                            display: block;
                                            .subItem{
                                                padding: 3px 13px;
                                            }
                                        }
                                        
                                    }
                            }
                         
                        }
                    }
                }
                &.menu_right{
                    display: flex;
                    margin-left: auto;
                } 
            }   
        }
                
    }
}
</style>
    