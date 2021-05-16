window.onload = function(){
    //initialization of the canvas
    var selectStringId = "";
    var canvas;
    var ctx;
    var refreshTime = 100;
    var baseLength = 100;
    var isInitialized = false;
    var strokeWidth = 2
    var wL= 1;
    var c = "#000000";
    
    initCanvas();
    
    function initCanvas(){
        canvas = document.createElement("canvas");
        canvas.width = 800;
        canvas.height = 800;
        document.getElementById("container").appendChild(canvas);
        ctx = canvas.getContext('2d');
        isInitialized = true;
        refreshCanvas();
    }
    
    function refreshCanvas(){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        draw();
        //setTimeout(refreshCanvas, refreshTime);
    }

    function draw(){
         
        
        //Some tests before combining data for the fractal drawing...

        //********test rotation master for two different objects******************/

        for(var i = 0; i< 36;i++){
           //set new point on the canvas
            var x = 0;
            var y = 0;
            var length = 100;
            var angle = 0;
            //filter the map of points
            var p2=[800-length - i*21,800-length - i*36];
            
            //define new lines from those points
            
            line_2 = new Line(p2,2*length  - i*4,1,angle +i*19, '#0000ff');
            
            //set external rotation center point        
            var centerPoint = [400,800];

            //draw lines on a loop process using the pivot object class
            for(var j =60-i*5; j>-270 + i*10; j = j-2){
                angleMaster = j;
                var pivot = new pivotMaster(centerPoint, angleMaster);
                var new_p2 = pivot.setCenterPoint(p2);
                p2 = new_p2;
                line_2.setColor(ctx);
                line_2.render(ctx);
                new Line(new_p2, 2*length - i*4, 1 ,angle +j*19).render(ctx);
            } 
        }
        
        /*************************END TEST ROTATION MASTER********************/
        /*************************TEST FIBONACCI LINE OVER ROTATION******************/
        lines = [];
        for(var k = 0; k<360; k = k+3){
            fbLine = new FibonacciLine([400,400], 600, [50,50],0 + k);
              
            fbLine.rotatePattern([50,50],0 + k);

            //fbLine.display();

            lines.push(new Line(fbLine.pA,fbLine.lA, wL, fbLine.angleA, c));     
            lines.push(new Line(fbLine.pB,fbLine.lB, wL, fbLine.angleB, c));
            lines.push(new Line(fbLine.pC,fbLine.lC, wL, fbLine.angleC, c));
            lines.push(new Line(fbLine.pD,fbLine.lD, wL, fbLine.angleD, c));
            lines.push(new Line(fbLine.pE,fbLine.lE, wL, fbLine.angleE, c));

            fbLine0 = new FibonacciLine([400,400], 600, [750,50],60 + k);

            fbLine0.rotatePattern([750,50],60 + k);

            //fbLine0.display();

            lines.push(new Line(fbLine0.pA,fbLine0.lA, wL, fbLine0.angleA, c));     
            lines.push(new Line(fbLine0.pB,fbLine0.lB, wL, fbLine0.angleB, c));
            lines.push(new Line(fbLine0.pC,fbLine0.lC, wL, fbLine0.angleC, c));
            lines.push(new Line(fbLine0.pD,fbLine0.lD, wL, fbLine0.angleD, c));
            lines.push(new Line(fbLine0.pE,fbLine0.lE, wL, fbLine0.angleE, c));


            fbLine1 = new FibonacciLine([400,400], 600, [50,750],60 + k);

            fbLine1.rotatePattern([50,750],60 + k);

            //fbLine0.display();

            lines.push(new Line(fbLine1.pA,fbLine1.lA, wL, fbLine1.angleA, c));     
            lines.push(new Line(fbLine1.pB,fbLine1.lB, wL, fbLine1.angleB, c));
            lines.push(new Line(fbLine1.pC,fbLine1.lC, wL, fbLine1.angleC, c));
            lines.push(new Line(fbLine1.pD,fbLine1.lD, wL, fbLine1.angleD, c));
            lines.push(new Line(fbLine1.pE,fbLine1.lE, wL, fbLine1.angleE, c));
            
            
            fbLine2 = new FibonacciLine([400,400], 600, [750,750],60 + k);

            fbLine2.rotatePattern([750,750],60 + k);

            //fbLine0.display();

            lines.push(new Line(fbLine2.pA,fbLine2.lA, wL, fbLine2.angleA, c));     
            lines.push(new Line(fbLine2.pB,fbLine2.lB, wL, fbLine2.angleB, c));
            lines.push(new Line(fbLine2.pC,fbLine2.lC, wL, fbLine2.angleC, c));
            lines.push(new Line(fbLine2.pD,fbLine2.lD, wL, fbLine2.angleD, c));
            lines.push(new Line(fbLine2.pE,fbLine2.lE, wL, fbLine2.angleE, c));
            
            fbLine3 = new FibonacciLine([400,400], 600, [750,750],60 + k);

            fbLine3.rotatePattern([400,200],60 + k);

            //fbLine0.display();

            lines.push(new Line(fbLine3.pA,fbLine3.lA, wL, fbLine3.angleA, c));     
            lines.push(new Line(fbLine3.pB,fbLine3.lB, wL, fbLine3.angleB, c));
            lines.push(new Line(fbLine3.pC,fbLine3.lC, wL, fbLine3.angleC, c));
            lines.push(new Line(fbLine3.pD,fbLine3.lD, wL, fbLine3.angleD, c));
            lines.push(new Line(fbLine3.pE,fbLine3.lE, wL, fbLine3.angleE, c));
            
            fbLine4 = new FibonacciLine([400,400], 600, [400,600],60 + k);

            fbLine4.rotatePattern([400,600],60 + k);

            //fbLine0.display();

            lines.push(new Line(fbLine4.pA,fbLine4.lA, wL, fbLine4.angleA, c));     
            lines.push(new Line(fbLine4.pB,fbLine4.lB, wL, fbLine4.angleB, c));
            lines.push(new Line(fbLine4.pC,fbLine4.lC, wL, fbLine4.angleC, c));
            lines.push(new Line(fbLine4.pD,fbLine4.lD, wL, fbLine4.angleD, c));
            lines.push(new Line(fbLine4.pE,fbLine4.lE, wL, fbLine4.angleE, c));
            for(var i =0; i<lines.length; i++){
                lines[i].setColor(ctx);
                lines[i].render(ctx);
            }
        }
        /*************************END TEST ROTATION FIBONACCI LINES*****************/      
    }
    //Pivot objet to perform custom rotations    
    function pivotMaster(centerPoint, angle){
        this.cX = centerPoint[0];
        this.cY = centerPoint[1];
        this.angle = angle;
        
        this.Distance = function(point){
            var distance = 0;
            if(point[0] == this.cX && point[1] == this.cY){
                distance = 0;
            }else{
                distance = Math.sqrt(Math.pow(point[0] - this.cX,2) + Math.pow(point[1] - this.cY,2));
            }
            return distance;
        }
        
        this.setCenterPoint = function(point){
            return [this.cX + this.Distance(point)*Math.cos(angle*Math.PI/180), this.cY + this.Distance(point)*Math.sin(angle*Math.PI/180)];
        }
        this.updateCenterPoint = function(newPoint){
            point[0] = newPoint[0];
            point[1] = newPoint[1];
        }
        
    }
    //Line object to trace with more flexibility
    function Line(centerPoint, length, width = 1, angle = 0, color){
        
        this.x = centerPoint[0];
        this.y = centerPoint[1];
        this.length = length;
        this.angle = angle;
        this.width = width;
        this.color = color;

        
        this.getP2 = function(){
            return [this.x + Math.cos(this.angle*(Math.PI/180))*this.length,
                    this.y + Math.sin(this.angle*(Math.PI/180))*this.length]
        }
 
        this.render = function(ctx){
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(-this.angle*Math.PI/180);
            ctx.translate(-this.x, -this.y);
            ctx.fillRect(this.x,this.y,this.length,this.width);
            ctx.restore();
        }

        this.originCenter = function(centerPoint, angle){
            var pivot = new pivotMaster(centerPoint, angle);
            var old_p = [this.x, this.y];
            var new_p = pivot.setCenterPoint(old_p);
            return new_p;
        }
        this.renderFromOrigin = function(ctx,centerPoint, angle){
            ctx.save();
            ctx.translate(this.originCenter(centerPoint,angle)[0], this.originCenter(centerPoint,angle)[1]);
            ctx.rotate(-this.angle*Math.PI/180);
            ctx.translate(-this.originCenter(centerPoint,angle)[0], -this.originCenter(centerPoint,angle)[1]);
            ctx.fillRect(this.x,this.y,this.length,this.width);
            ctx.restore();
        }
        
        this.setColor = function(ctx){
            ctx.fillStyle = this.color;
        }
    }
    //Pattern of multiple lines connected with constraints.
    function FibonacciLine(localCenter, globalLength, globalCenter, globalAngle) {
        
        this.startX = localCenter[0];
        this.startY = localCenter[1];
        this.length = globalLength;
        this.Ox = globalCenter[0];
        this.Oy = globalCenter[1];
        this.GAngle = globalAngle;
        this.pivot = new pivotMaster([this.Ox, this.Oy], this.GAngle);

        this.display = function() {
            ctx.save();
            if(this.GAngle == 0){
                ctx.translate(this.startX, this.startY);
                ctx.rotate(-this.angle*Math.PI/180);
                ctx.translate(-this.startX, -this.startY);
            }else{
                this.rotatePattern([this.startX,this.startY],this.GAngle);
                ctx.translate(this.startX, this.startY);
                ctx.rotate(-this.GAngle*Math.PI/180);
                ctx.translate(-this.startX, -this.startY);
                this.loadDefaultCenters();
            }
            ctx.fillRect(this.startX,this.startY,this.length, 1);
            ctx.restore();
        }
        
        this.translate = function(translateToPoint){
            var translated_pA = [this.pA[0] + translateToPoint[0], this.pA[1] + translateToPoint[1]];
            var translated_pB = [this.pB[0] + translateToPoint[0], this.pB[1] + translateToPoint[1]];
            var translated_pC = [this.pC[0] + translateToPoint[0], this.pC[1] + translateToPoint[1]];
            var translated_pD = [this.pD[0] + translateToPoint[0], this.pD[1] + translateToPoint[1]];
            var translated_pE = [this.pE[0] + translateToPoint[0], this.pE[1] + translateToPoint[1]];
            
            this.pA = translated_pA;
            this.pB = translated_pB;
            this.pC = translated_pC;
            this.pD = translated_pD;
            this.pE = translated_pE;
        }
        
        this.resize = function(newSizeFactor){
            var resized_pA = [this.pA[0]*newSizeFactor/this.length, this.pA[1]*newSizeFactor/this.length];
            var resized_lA = this.lA*newSizeFactor/this.length;
            
            var resized_pB = [this.pB[0]*newSizeFactor/this.length, this.pB[1]*newSizeFactor/this.length];
            var resized_lB = this.lB*newSizeFactor/this.length;
            
            var resized_pC = [this.pC[0]*newSizeFactor/this.length, this.pC[1]*newSizeFactor/this.length];
            var resized_lC = this.lC*newSizeFactor/this.length;
            
            var resized_pD = [this.pD[0]*newSizeFactor/this.length, this.pD[1]*newSizeFactor/this.length];
            var resized_lD = this.lD*newSizeFactor/this.length;
            
            var resized_pE = [this.pE[0]*newSizeFactor/this.length, this.pE[1]*newSizeFactor/this.length];
            var resized_lE = this.lE*newSizeFactor/this.length;
            
            this.pA = resized_pA;
            this.lA = resized_lA;
            this.pB = resized_pB;
            this.lB = resized_lB;
            this.pC = resized_pC;
            this.lC = resized_lC;
            this.pD = resized_pD;
            this.lD = resized_lD;
            this.pE = resized_pE;
            this.lE = resized_lE;
        }
                
        this.rotatePattern = function(center, angle){
            [this.Ox, this.Oy] = center;
            this.GAngle = angle;
            
            //save values
            var old_pA = this.pA;
            var old_pB = this.pB;
            var old_pC = this.pC;
            var old_pD = this.pD;
            var old_pE = this.pE;
            
            //initialize new center points on the pattern
            var new_pA = this.pivot.setCenterPoint(old_pA);            
            var new_pB = this.pivot.setCenterPoint(old_pA);
            var new_pC = this.pivot.setCenterPoint(old_pA);
            var new_pD = this.pivot.setCenterPoint(old_pA);
            var new_pE = this.pivot.setCenterPoint(old_pA);
            
            //continuously translate new pivot point 
            //angles corrigés manuellement sans calcul en étendant simplement l'expression avec une valeur de tilt numérique en degré convertie en radians.
            
            //set new point A
            var new_pA = center;
            //set new point B
            var new_pB = [center[0] + this.lA*Math.cos(-angle*Math.PI/180), center[1] + this.lA*Math.sin(-angle*Math.PI/180)];
            //set new point C
            var new_pC = [center[0] + (Math.sqrt(Math.pow(old_pC[0] - old_pA[0],2) + Math.pow(old_pC[1] - old_pA[0],2)))*Math.cos((8.5-angle)*Math.PI/180), center[1] + (Math.sqrt(Math.pow(old_pC[0] - old_pA[0],2) + Math.pow(old_pC[1] - old_pA[0],2)))*Math.sin((8.5-angle)*Math.PI/180)];
            //set new point D
            var new_pD = [center[0] + (Math.sqrt(Math.pow(old_pD[0] - old_pA[0],2) + Math.pow(old_pD[1] - old_pA[0],2)))*Math.cos((14.3-angle)*Math.PI/180), center[1] + (Math.sqrt(Math.pow(old_pD[0] - old_pA[0],2) + Math.pow(old_pD[1] - old_pA[0],2)))*Math.sin((14.3-angle)*Math.PI/180)];
            //set new point E
            var new_pE = [center[0] + (Math.sqrt(Math.pow(old_pE[0] - old_pA[0],2) + Math.pow(old_pE[1] - old_pA[0],2)))*Math.cos((12.1-angle)*Math.PI/180), center[1] + (Math.sqrt(Math.pow(old_pE[0] - old_pA[0],2) + Math.pow(old_pE[1] - old_pA[0],2)))*Math.sin((12.1-angle)*Math.PI/180)];

            //set new center point rotation
            this.pA = new_pA;
            this.pB = new_pB;
            this.pC = new_pC;
            this.pD = new_pD;
            this.pE = new_pE;
        }
        
        this.loadDefaultCenters = function(){
            this.pA = [this.startX ,this.startY];
            this.pB = [this.startX +this.length/3 , this.startY];
            this.pC = [this.startX + this.length/2,this.startY + this.length*Math.tan(24*Math.PI/180)/6];
            this.pD = [this.startX + this.length*((1/3) + (1/6) + (1/9)) , this.startY + (this.length*Math.tan(24*Math.PI/180)/6) + (this.length*Math.tan(36*Math.PI/180)/9)];
            this.pE = [this.startX + 2*this.length/3 , this.startY + (this.length*Math.tan(24*Math.PI/180)/6) + (this.length*Math.tan(36*Math.PI/180)/9)];
        }
        
        //set all data base pattern without rotation no rescaling factor
        this.pA = [this.startX ,this.startY];
        this.lA = this.length/3;
        this.angleA = this.GAngle;
        
        this.pB = [this.startX +this.length/3 , this.startY];
        this.lB = this.length/(6*Math.cos(24*Math.PI/180));
        this.angleB = this.GAngle-24
        
        this.pC = [this.startX + this.length/2,this.startY + this.length*Math.tan(24*Math.PI/180)/6];
        this.lC = this.length/(9*Math.cos(36*Math.PI/180));
        this.angleC = this.GAngle -36;
        
        this.pD = [this.startX + this.length*((1/3) + (1/6) + (1/9)) , this.startY + (this.length*Math.tan(24*Math.PI/180)/6) + (this.length*Math.tan(36*Math.PI/180)/9)];
        this.lD = this.length/9;
        this.angleD = this.GAngle;
        //correctifs ajoutés manuellement pour l'angle et la longueur.
        this.pE = [this.startX + this.length*((1/3) + (1/6) + (2/9)), this.startY + (this.length*Math.tan(24*Math.PI/180)/6) + (this.length*Math.tan(36*Math.PI/180)/9)];
        this.lE = (Math.sqrt(Math.pow(this.length - this.pE[0],2) + Math.pow(this.pA[1] - this.pE[1],2))) - 60;
        this.angleE = this.GAngle+ Math.atan(3*(this.lB*Math.sin(24*Math.PI/180) + this.lC*Math.sin(36*Math.PI/180))/this.length)*180/Math.PI+4;
    }

         
}
