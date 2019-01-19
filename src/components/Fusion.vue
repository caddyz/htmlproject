<template>
    <div id="fusion">
        <div style="height: 1em"></div>
        <timeline>
            <timeline-title><span class="fusionTitle">我的时间轴</span></timeline-title>
            <span v-for="(item,index) of timeIncident" :key="index">
                <timeline-item v-if="(index+1)%3==0" font-color="#9dd8e0" bg-color="#9dd8e0">
                    <span class="fusionContent">{{item.fTime}}&nbsp;&nbsp;:&nbsp;&nbsp;{{item.fContent}}</span>
                </timeline-item>
                <timeline/>
                <timeline-item v-if="(index+1)%3==1" font-color="#FFB5A1" bg-color="#FFB5A1">
                    <span class="fusionContent">{{item.fTime}}&nbsp;&nbsp;:&nbsp;&nbsp;{{item.fContent}}</span>
                </timeline-item>
                <timeline/>
                <timeline-item v-if="(index+1)%3==2" font-color="#4cb4e7" bg-color="#4cb4e7">
                    <span class="fusionContent">{{item.fTime}}&nbsp;&nbsp;:&nbsp;&nbsp;{{item.fContent}}</span>
                </timeline-item>
                <timeline/>
            </span>
        </timeline>
    </div>
</template>

<script>

    import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
    export default {
        name: "Fusion",
        components: {
            Timeline,
            TimelineItem,
            TimelineTitle
        },
        data(){
            return {
                timeIncident:[
                    {fTime:"2048.2.1 12:85:98",fContent:"你开启了XX之旅！"},
                    {fTime:"2048.2.1 12:85:98",fContent:"你开启了XX之旅！"},
                    {fTime:"2048.2.1 12:85:98",fContent:"你开启了XX之旅！"},
                    {fTime:"2048.2.1 12:85:98",fContent:"你开启了XX之旅！"},
                    {fTime:"2048.2.1 12:85:98",fContent:"你开启了XX之旅！"},
                    {fTime:"2048.2.1 12:85:98",fContent:"你开启了XX之旅！"},
                ],
            }
        }
    }
</script>

<style scoped>
    #fusion{
        width: 50%;
        margin: 0 auto;
        background-color: white;
    }
    .fusionTitle,.fusionContent{
        font-family: "仿宋";
    }
    .fusionTitle{
        font-size: 24px;
    }
    .fusionContent{
        font-size: 18px;
    }
</style>