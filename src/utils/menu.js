import {
	MdHome,
	MdAccountCircle,
	MdArticle,
	MdMusicNote,
	MdStar,
	MdCircleNotifications,
	MdSettings,
} from 'react-icons/md';

export default [
	{
		id: 1,
		title: 'Home',
		path: '/home',
		icon: (props) => <MdHome size={24} {...props} />,
	},
	{
		id: 2,
		title: 'Profile',
		path: '/profile',
		icon: (props) => <MdAccountCircle size={24} {...props} />,
	},
	{
		id: 3,
		title: 'My To Dos',
		path: 'todos',
		icon: (props) => <MdArticle size={24} {...props} />,
	},
	{
		id: 4,
		title: 'My Collections',
		path: 'collection',
		icon: (props) => <MdMusicNote size={24} {...props} />,
	},
	{
		id: 5,
		title: 'Whats Poppin',
		path: 'whatspopin',
		icon: (props) => <MdStar size={24} {...props} />,
	},
	{
		id: 6,
		title: 'Notifications',
		path: 'notifications',
		bottom: true,
		icon: (props) => <MdCircleNotifications size={24} {...props} />,
	},
	{
		id: 7,
		title: 'Configurations',
		path: 'configurations',
		bottom: true,
		icon: (props) => <MdSettings size={24} {...props} />,
	},
];
