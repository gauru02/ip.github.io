import {useState} from "react";
import axios from "axios";
function IpApp()

{
	const[msg ,setMsg] =useState("");
	const getQuote = (event)=>{
		event.preventDefault();
		let a1="https://ipinfo.io/1.38.142.168";
		let a2="?token=" +"b38e70c429acaa";
		let urladd=a1+a2;
		axios.get(urladd)
		.then(res=>{
		console.log(res.data);
		let city = res.data.city;
		let state = res.data.region;
		let loc = res.data.loc;
		let ans = " city=" +city + " state= " +state+" location = " +loc;
		setMsg(ans);
		})
		.catch(err=>console.log(err))

}


return(

		<div>
			<center>
				<h1>Ip Info App </h1>
				<form onSubmit={getQuote}>
					<input type = "submit"value = "Get info" />
				</form>
				<h1>{msg}</h1>
			</center>
		</div>

	);
}
export default IpApp;

