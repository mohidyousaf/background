var list= [
	"hello",
	"bye",
	"with you",
	"i am alone",
	{
		call : function(){
			consoloe.log("hello obj here ");
		}
		             
	},
];

// list[4].call();




list.forEach(function(i){
	console.log(i);
})



// for (var i=0 ; i< list.length ; i++){
// 	console.log(list[i]);
// }