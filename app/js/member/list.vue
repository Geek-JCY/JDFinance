<template lang="html">
    <Panel :class="$style.panel" title="我的">
        <section :class="$style.content">
            <div v-for="item in items" :class="$style.item" :key="item.img">
                <img :src="item.img" alt="">
                <span>{{ item.title }}</span>
                <em>{{ item.aim }}</em>
            </div>
        </section>
    </Panel>
</template>

<script type='text/ecmascript-6'>
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
    },
    data() {
        return {
            items: [{
                img: "//img12.360buyimg.com/jrpmobile/jfs/t8971/199/1863233880/2035/56d04776/59cb5fbdNa7c682c3.png?width=70&height=70",
                title: "我的资产",
                aim: "查看全部资产 >",
            }, {
                img: "//img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70",
                title: "我的优惠券",
                aim: "查看全部 >",
            }, {
                img: "//img12.360buyimg.com/jrpmobile/jfs/t10264/48/2521964269/2177/cb479501/59f945edNc1197b64.png?width=90&height=90",
                title: "我的金币",
                aim: "赚金币兑好物 >",
            }, {
                img: "//img12.360buyimg.com/jrpmobile/jfs/t12115/250/469950434/3906/ad97c994/5a0bdf3aN22efb724.png?width=90&height=90",
                title: "我的金条",
                aim: "查看额度 >",
            },
            {
                img: "//img12.360buyimg.com/jrpmobile/jfs/t9244/132/2364556535/1134/334cd5d9/59cb612dN5b974dc5.png?width=70&height=70",
                title: "我的借钱",
                aim: "查看全部产品 >",
            },
            {
                img: "//img12.360buyimg.com/jrpmobile/jfs/t9121/110/2300703915/1348/91af205c/59cb613bN1e749e58.png?width=70&height=70",
                title: "我的白条",
                aim: "去提额 >",
            }, {
                img: "//img12.360buyimg.com/jrpmobile/jfs/t9649/171/293125950/1453/4cf0cc2/59cb6162N9c71da0f.png?width=70&height=70",
                title: "我的众筹",
                aim: "查订单/物流 >",
            }, {
                img: "//img12.360buyimg.com/jrpmobile/jfs/t8014/149/2344686222/2102/341ff316/59cb616bN3e1bd87d.png?width=70&height=70",
                title: "我的保障",
                aim: "全方位保障 >",
            }],
        }
    },
}
</script>

<style lang='scss' module>
    @import "../../css/element.scss";
    .panel {
        @include panel;
        >h4 {
            display: none;
        }
        .content {
            @include list;
            .item {
                @include list(row);
                width: 100%;
                height: 112px;
                line-height: 112px;
                align-items: center;
                position: relative;
                box-sizing: border-box;
                &:after {
                    position: absolute;
                    bottom: 0;
                    display: block;
                    width: 100%;
                    height: 1px;
                    content: " ";
                    background: #eee;
                    transform: scaleY(.5);
                    margin-left: 112px;
                }
                &:last-child:after {
                    background: #fff;
                }
                img {
                    width: 48px;
                    height: 48px;
                    margin: 32px;
                }
                span {
                    font-size: 32px;
                    color: #333;
                }
                em {
                    position: absolute;
                    right: 32px;
                    font-size: 28px;
                    color: #999;
                }
            }
        }
    }

</style>
