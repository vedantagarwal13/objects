class hammer{

    constructor(x,y,width,height) {
     
       var optionshammer={
        'restitution':0.8,
        'friction':1 ,
            'density':1
       }
    
      this.body=Bodies.rectangle(x,y,width,height,optionshammer);
    
      this.width=width;
      this.height=height;
    
    
      World.add(world,this.body);
    
    
    }
    
     display(){
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.body.angle;
        push();
         
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
        fill("green");
        rect(0,0,this.width,this.height);
        pop();
     }
    
    
    
    
    }
     
    
    
    
    
    
    
    
    
    
    
    
    