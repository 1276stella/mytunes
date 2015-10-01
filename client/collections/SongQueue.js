// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(this.models.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      console.log('this', this);
      this.at(0).dequeue();
      if(this.models.length === 1) {
        this.playFirst();
      }     
    }, this);

    this.on('dequeue', function(song) {
      this.remove(song);
    }, this);
  },
  
  // initialize: function(params){
    // this.modal.on('add', function(song){
  //     if()
  //   }),


  //   add: function(song) {

  //   },



    playFirst: function(){
      this.at(0).play();      
    }

  
});