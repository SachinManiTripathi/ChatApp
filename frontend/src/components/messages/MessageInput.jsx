import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";

const MessageInput = () => {
	const [message,setMessage] = useState("");
	const {loading, sendMessage} = useSendMessage();

    const handleSubmit = async(e) =>{
		e.preventDefault();
		if(!message) return;
		await sendMessage(message);
		setMessage("");
	}
	return (
		<form className='px-4 my-3' onSubmit={handleSubmit}>
			<div className='w-full'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
					value={message}
					onChange={(e)=>setMessage(e.target.value)}
				/>
		    	<button type='submit' style={{position:'absolute',right:'2rem',bottom:'1.5rem'}}>
				{loading? <div className="loading loading-spinner"></div> : <BsSend /> }	
		    </button>
			</div>
           
		</form>
	);
};
export default MessageInput;