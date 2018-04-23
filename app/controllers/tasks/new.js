import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addTask: function() {
      let title = this.get('title'); 
      let description = this.get('description'); 
      let date = this.get('date'); 

      // Create New Task
      let newTask = this.store.createRecord('task', {
        title: title, 
        description: description, 
        date: new Date(date)
      }); 

      // Save to firebase
      newTask.save(); 

      // Clear Form
      this.setProperties({
        title: '', 
        description: '', 
        date: ''
      }); 
    }
  }
});
