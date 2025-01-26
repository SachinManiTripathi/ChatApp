import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div>
		<div>
			<h1 style={{color:'rgb(59 130 246',fontWeight:'700',fontSize:'2rem',position:'relative',left:'15rem',paddingBottom:'2rem'}}>ChatApp</h1>
		</div>
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			<MessageContainer />
		</div>
		</div>
	);
};
export default Home;