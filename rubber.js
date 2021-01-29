class rubber{

    constructor(x,y,radius) {
     
       var optionsrubber={
        'restitution':0.3,
        'friction':4 ,
      'density':1
       }
    
      this.body=Bodies.circle(x,y,radius,optionsrubber);
    
      
    
    
      World.add(world,this.body);
    
    
    }
    
     display(){
        var pos=this.body.position
        var angle=this.body.angle;
        push();
         
        translate(pos.x,pos.y);
        rotate(angle);
        ellipse(0,0,this.r,this.r);
        fill("pink");
        
        pop();
     }
    
    
    
    
    }
     
    
    
    
    
    