//your JS code here. If required.
let para = document.getElementById('output');

const promise1 = () => {
	return new Promise((res) =>{
		setTimeout(()=>{
			res([1,2,3,4]);
		},3000);
	});
};

promise1().then((arr) => {
	let evenArr = arr.filter((ele) => {
		return (ele % 2 === 0);
	});
	
	setTimeout(()=>{
		para.textContent = evenArr;
	},1000);
	return evenArr;
}).then((arr) => {
	let doubleArr = arr.map((ele) => {
		return 2*ele;
	});

	setTimeout(() => {
		para.textContent = doubleArr;
	},3000);
});



