function fibonacci(num) {
// your code here
let Series = [];

	for (let index = 0; index < num; index++) {
		if(index == 0){
			Series(index) = 0;
		}else if(index == 1){
			Series(index) = 1;
		} else {
		    Series(index)= series(index-1) + Series(index-2 );
		}
		
	} 
	return series; 


	
}





module.exports = fibonacci;
