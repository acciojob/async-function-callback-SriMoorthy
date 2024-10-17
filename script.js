const url = "https://jsonplaceholder.typicode.com/posts/1";
let out = document.getElementById('output');


//your JS code here. If required.
async function callback(){
	let res = await fetch(url);
	let data = await res.json()
	return new Promise((resolve)=>{
		resolve(out.innerHTML = data.title)
	})
}
