Var Singleton = function(){
Var object = {};

Return {
	getobject:  function(){
					If (object){
						Return object;
			}
Else{
Return new object;
}
}
}();

myObject = Singleton.getObject;
