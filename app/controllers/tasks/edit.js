import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editTask: function(id) {
      let title = this.get('model.title'); 
      let description = this.get('model.description'); 
      let date = this.get('model.date'); 

      // update Task
      this.store.findRecord('task', id).then(function(task) {
        task.set('title', title); 
        task.set("description", description); 
        task.set("date", new Date(date)); 

              // Save to firebase
        task.save(); 
         
        self.transitionTo('tasks'); 
      });



    }
  }
});
