
const app = new Vue({

  el:'#root',
  data:{
    toAddTaskName:'',
    addAble:true,
    tasks:[
      {
        taskName: 'Svegliarsi',
        done:false,
      },
      {
        taskName: 'Mangiare',
        done:true,
      },
      {
        taskName: 'Lavarsi i denti',
        done:false,
      },
      {
        taskName: 'Studiare',
        done:false,
      },
      {
        taskName: 'Dormire',
        done:false,
      },

  ]
  },
  methods:{
    removeTask(index){
      this.tasks.splice(index,1)
      console.log('rimosso');
    },
    addTask(){
      if(this.toAddTaskName.length>2){
        this.addAble=true;
        this.tasks.push({
          taskName:this.toAddTaskName,
          done:false,
        });
        this.toAddTaskName=''
      }else{
        this.addAble=false;
        setTimeout(()=>{
          this.addAble=true;
        },3000)
        
      }
      
    },
    addCompleted(index){
      this.tasks[index].done=!this.tasks[index].done
      console.log('ticked');
      
    },

  },


})
