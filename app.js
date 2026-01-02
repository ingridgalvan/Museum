AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],

  init: function () {
   
    console.log('ok collider check');
    var debugtxt = document.querySelector('a-text');
    var thunksound = document.querySelector('#thunk');
    
    this.el.addEventListener('raycaster-intersection', function (e) {
      //-- get selected object
      this.selectedObj = e.detail.els[0];
      debugtxt.setAttribute('value', 'Player hit something!');
    });
    
    this.el.addEventListener('raycaster-intersection-cleared', function (e) {
      //-- get selected object
      this.selectedObj = null;
      
    });
    
      
    //-- trigger button pressed
    this.el.addEventListener('triggerdown', function (e) {
        //debugtxt.setAttribute('value', 'Trigger button pressed');
      
        if(!this.selectedObj) return;
      
        debugtxt.setAttribute('value', this.selectedObj.id);
        this.selectedObj.parentNode.removeChild(this.selectedObj);
        thunksound.play();
      
    });
  },
  
  
});