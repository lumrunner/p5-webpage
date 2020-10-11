function food () {
  this.x = floor(random(width/scl)) * scl;
    this.y = floor(random(height/scl)) * scl;
  
  
  this.newLocation = function() {
    this.x = floor(random(width/scl)) * scl;
    this.y = floor(random(height/scl)) * scl;
  }
  
  this.show = function() {
    rect(this.x, this.y, scl, scl);
  }
}