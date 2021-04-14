<template>
  <div v-bind:class="{'qianfu':qianan,'shenfu':shenen}">
      <div id="app">
      <div>
          <br>
          <Input  v-model="text" placeholder="add some list" clearable style="width:300px" @keyup.enter.native="add"/>
            <Button @click="add">add</Button>
            <Button @click="change()">换肤</Button>
      </div>
      <br>
      <table>
       <thead>
                <tr>
                    <th style="width:100px">Id</th>
                    <th style="width:150px">Name</th>
                    <th style="width:300px">operation</th>
                </tr>
                <tr v-for="(item,index) in list" :key="item.id">
                    <td>{{index+1}}</td>
                    <td v-show="!item.showw">{{item.name}}</td>
                    <td v-show="item.showw" >
                        <Input v-model="item.name"/>
                    </td>
                    <td>
                        <Button @click="del1(index)">删除</Button>
                        <Button @click="mix(index)">修改</Button>
                        <Button @click="put(index)">保存</Button>

                    </td>

                </tr>
            </thead>
        </table>
        <br>
        <br>
        <table> 
            <thead>
                <tr>
                    <th style="width:100px">Id</th>
                    <!-- <th></th> -->
                    <th style="width:150px">Name</th>
                    <!-- <th></th> -->
                    <th style="width:300px">operation</th>
                </tr>
                <tr v-for="(item,index) in listed" :key="item.id">
                    <td>{{index+1}}</td>
                    <td>{{item.name}}</td>
                    <td>
                        <Button @click="del2(index)">删除</Button>
                        <Button @click="back(index)">操作</Button>

                    </td>

                </tr>
            </thead>
        </table>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
            data(){
              return{
                showw:false,
                shenen:false,
                qianan:true,
                text:'',
                list: [],
                listed: [],
                }
            },
            methods:{
                add(){
                    // console.log(1)
                  axios.post("http://121.4.183.85:3055/todolist",{
                    name: this.text,
                    status:false,
                  })
                  .then((g) =>{
                    //   console.log(g.data.data)
                    this.list.push({
                      name: g.data.data.name,
                      showw: false,
                      id: g.data.data.id,
                      status: false,
                    })
                  });
                  this.text = ""
                      console.log(1)

                },
                del1(index){
                    // console.log(this.list[index].id)
                    axios.delete('http://121.4.183.85:3055/todolist/'+this.list[index].id)
                    // .then((g) =>{
                    //     console.log(g.data)
                    // })
                    this.list.splice(index,1)
                    // localStorage.setItem("all",JSON.stringify(this.list))

                },
                del2(index){
                    axios.delete('http://121.4.183.85:3055/todolist/'+this.listed[index].id);
                    this.listed.splice(index,1)

                },
                put(index){
                    axios.put('http://121.4.183.85:3055/todolist',{
                      id: this.list[index].id,
                      name: this.list[index].name,
                      status: true,
                    });
                    this.listed.push(this.list[index])
                    this.list.splice(index,1)
                },
                back(index){
                    axios.put("http://121.4.183.85:3055/todolist",{
                      id: this.listed[index].id,
                      name: this.listed[index].name,
                      status: false,
                    });
                    console.log(1)
                    this.list.push(this.listed[index])
                    this.listed.splice(index,1)
                   
                },
                mix(index){
                    // console.log(1)
                    // if(this.list[index].showw == true){
                        axios.put("http://121.4.183.85:3055/todolist",{
                            id: this.list[index].id,
                            name: this.list[index].name,
                            status: false,
                        });
                    console.log(2)
                        this.showw=true
                        this.list.splice(index,1,{
                            name:this.list[index].name,
                            showw:!this.list[index].showw,
                            id:this.list[index].id,
                            status: this.list[index].status,
                        })
                        // }
                    
                    console.log(this.list[index].name)
                  

                },
                change() {
                    this.qianan = !this.qianan;
                    this.shenen = !this.shenen;
      }

            
            },
            created:
                function(){

                   axios.get('http://121.4.183.85:3055/todolist').then((g) => {
                     for(let i of g.data.data ){
                       if(i.status == true){
                         this.listed.push(i);
                       }else{
                         this.list.push(i)
                       }
                     }
                    // console.log(this.list[0])
                   });

            },
            updated:
            function(){
                // this.showw=false
                localStorage.setItem("all",JSON.stringify(this.list))
                localStorage.setItem("hao",JSON.stringify(this.listed))
                
            }
}
</script>


<style>
#app{
            height: 700px;
            width: 90vw;
            position: relative;
        }
        .title{
            font-size: 50px;
        }
        .zheng{
            position: absolute;
            top: 10px;
            left: 50px;
            /* float: left; */
        }
        .qianfu{
            background-color: rgba(111, 128, 175, 0.4);
        }
        .shenfu{
            background-color:  rgba(111, 128, 175, 0.8);
        }
        input[type="button"]{
            background-color: rgba(110, 125, 161, 0.8);
            border: none;
        }
        table {
    border-collapse: collapse;
    width: 80%;
    font-size: 18px;
    text-align: center;
}
/* table,tr{
    width: 30%;
} */
th{
    height:70px;
    border: 1px solid rgba(110, 125, 161, 1.0);

}
table, td,tr {
    border: 1px solid rgba(110, 125, 161, 1.0);
    height: 50px;

}
</style>