<template>
  <div calss="about">
      <br>
      <badge :count="donee">
        <a href="#" class="done">可修改</a>
    </badge>
      <badge :count="doneee">
        <a href="#" class="done">已保存</a>
    </badge>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name:"About",
    data(){
        return{
            donee:0,
            doneee:0
        }
    },
    created:
    function(){
        axios.get('http://121.4.183.85:3055/todolist').then((g)=>{
            for(let i of g.data.data){
                if(i.status ==false){
                    this.donee++
                }else if(i.status == true){
                    this.doneee++
                }
            }
        })
    }
}
</script>

<style>
.about{
    float: left;
}
.done{
    width: 100px;
    height: 50px;
    font-size: 25px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
}

</style>