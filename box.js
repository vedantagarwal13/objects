class box{

    constructor(x,y,width,height) {
     
       var optionsbox={
        'restitution':0.8,
        'friction':1 ,
            'density':1
       }
    
      this.body=Bodies.rectangle(x,y,width,height,optionsbox);
    
      this.width=width;
      this.height=height;
    
    
      World.add(world,this.body);
    
    
    }
    
     display(){
        var pos=this.body.position
        var angle=this.body.angle;
        push();
         
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop();
     }
    
    
    
    
    }
     
    
    
    
    
    
    
    