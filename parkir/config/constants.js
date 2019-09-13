export const MENU = [
  {
    name: 'Dashboard',
    path: '/in',
    index: '0',
    submenu: []
  },
  {
    name: 'Building Management',
    path: '#',
    index: '1',
    submenu: [
      {
        name: 'Building',
        path: '/in/buildings',
        index: '1-0'
      },
      {
        name: 'Slot',
        path: '/in/slots',
        index: '1-1'
      }
    ]
  },
  {
    name: 'History',
    path: '#',
    index: '2',
    submenu: [
      {
        name: 'Transaction',
        path: '/in/transactions',
        index: '2-0'
      },
      {
        name: 'Statistic',
        path: '/in/stats',
        index: '2-1'
      }
    ]
  }
]
