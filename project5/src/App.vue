<template>
    <div  >
        <div class="zheng">
        <div>
            <div class="title">ToDoList</div>
            <router-link to='/home' tag="Button" replace>首页</router-link>
						<router-link to='/about' tag="Button" >About</router-link>
						<br>
			      <router-view></router-view>
        </div>

        

          
        </div>
  </div>
</template>

<script>
export default {
  name: 'App',
            data(){
              return{
								
							}
						}
}
</script>

<style>
/* .zheng {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-template-rows: 50px 50px;
} */
</style>
