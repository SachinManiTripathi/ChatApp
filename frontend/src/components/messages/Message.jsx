import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`} style={{marginBottom:'1rem'}}>
    <div className="flex content-center">
			<div className='chat-image avatar mr-12'>
				<div className='w-10 rounded-full' 
              style={{width:'40px',height:'40px',marginRight:'1rem'}}>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div 
        className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2 self-center` }
        style={{paddingTop:'0.5rem'}}>{message.message}</div>
    </div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
	);
};
export default Message;