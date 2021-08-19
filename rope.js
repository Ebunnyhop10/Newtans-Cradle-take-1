class rope{
	constructor(pointA,pointB,bodyA,bodyB,con){
		this.pointA=pointA
		this.pointB=pointB

		
	
	}
	//create rope constraint here
	con = Matter.Constraint.create({
		pointA:bodyA,
		pointB:bodyB,
		lenth:100,
		stiffness:0.2
	})	
	

    //create display() here 
}
show();{
	
	strokeWeight(2);
	stroke(255);
	line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
	line(bodyA.position.x,bodyA.position.y,bodyB.position.x,bodyB.position.y);
	
  


}
