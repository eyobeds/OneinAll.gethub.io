function x(a){
			alert(a);
		}
		function con(){
			var s=confirm("do you need continue?");
			if(s==true){
				alert("you can continu");
			}
			else{
				alert("abort the progress!")
			}
		}
		function pro(){
			var w=prompt("enter name","here it is the name");
			alert("your name is "+ w);
		}
		function over(){
			alert("mouse is over the parag");
		}
		function out(){
			alert("mouse is out of the parag");
		}
		function val(){
		if(document.fo.q.value==""){
			alert("you miss the name");
			return false;
		}
		if(document.fo.w.value.length<5){
			alert("insert more than 5 char");
			return false;
		}
		if(document.fo.a.value<15){
			alert("u should enter more than 15");
			return false;
		}
		}
		