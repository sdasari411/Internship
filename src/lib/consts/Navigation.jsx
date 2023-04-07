import {
	GrBladesHorizontal,
	GrDownload,
	GrUser,
	GrUserNew,
	GrTable,
	GrTableAdd,
	GrSettingsOption,
	GrHelp,
} from 'react-icons/gr'

export const DASHBOARD_SIDEBAR_LINKS = [
	
	{
		key: 'Pooja details',
		label: 'Pooja details',
		path: '/Pooja details',
		icon: <GrBladesHorizontal />
	},
	{
		key: 'Special pooja updates',
		label: 'Special pooja updates',
		path: '/Special pooja updates',
		icon: <GrDownload />
	},
	{
		key: 'Devotees details',
		label: 'Devotees details',
		path: '/Devotees details',
		icon: <GrUser />
	},
	{
		key: 'Devotees outstanding details',
		label: 'Devotees outstanding details',
		path: '/Devotees outstanding details',
		icon: <GrUserNew />
	},
	{
		key: 'Upcoming poojas',
		label: 'Upcoming poojas',
		path: '/Upcoming poojas',
		icon: <GrTable />
	},
	{
		key: 'Upcoming events update',
		label: 'Upcoming events update',
		path: '/Upcoming events update',
		icon: <GrTableAdd />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <GrSettingsOption />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <GrHelp />
	}
]
 
export const DASHBOARD_DETAILS_LINKS = [

	{
		key: 'Pooja Bookings',
		label: 'Pooja Bookings',
		path: '/Pooja Booking',
		
	},

	{
		key: 'Stock Details',
		label: 'Stock Details',
		path: '/Stock Details',
		
	},

	{
		key: 'Total Income',
		label: 'Total Income',
		path: '/Total Income',
		
	},

	{
		key: 'Total Expens',
		label: 'Total Expens',
		path: '/Total Expens',
		
	}
]