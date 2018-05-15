import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import Ious from "../ious/index.vue"
import Raise from "../raise/index.vue"
import Member from "../member/index.vue"
import Download from "../special/download.vue"
import "../../css/reset.scss"
import "../../css/global.scss"

Vue.use(Router)

export default new Router({
    routes: [{
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/money",
        name: "money",
        component: Money,
    },
    {
        path: "/ious",
        name: "ious",
        component: Ious,
    },
    {
        path: "/raise",
        name: "raise",
        component: Raise,
    },
    {
        path: "/member",
        name: "member",
        component: Member,
    },
    {
        path: "/download",
        name: "download",
        component: Download,
    },
    ],
})
