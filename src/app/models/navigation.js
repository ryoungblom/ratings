export const navigation = {
  brand:      'reactDirectorAdmin',
  leftLinks:  [],
  rightLinks: [
    {
      label:      'Home',
      link:       '/',
      view:       'home',
      isRouteBtn: true
    },
    {
      label:      'About',
      link:       '/about',
      view:       'about',
      isRouteBtn: true
    }
  ],
  sideMenu: [
    // group menu #1
    {
      id: 1,
      group: 'Admin',
      menus: [
        {
          name: 'Analysts',
          linkTo: '/admin/analysts',
          faIconName: 'fa-user-circle-o'
        },
        {
          name: 'Round Cycles',
          linkTo: '/admin/cycles',
          faIconName: 'fa-columns'
        }
      ]
    },

    // group menu #2
    {
      id: 2,
      group: 'Analyst',
      menus: [
        {
          name: 'Dashboard',
          linkTo: '/',
          faIconName: 'fa-eye'
        },
        {
          name: 'Availability',
          linkTo: '/Dashboard/availability',
          faIconName: 'fa-eye'
        },
        {
          name: 'Survey',
          linkTo: '/Analyst/survey',
          faIconName: 'fa-eye'
        }
      ]
    },
    // group menu #3
    {
      id: 3,
      group: 'Info',
      menus: [
        {
          name: 'General preview',
          linkTo: '/general',
          faIconName: 'fa-eye'
        },
        {
          name: 'Tokens',
          linkTo: '/general/tokens',
          faIconName: 'fa-columns'
        },
        {
          name: 'Rules',
          linkTo: '/general/rules',
          faIconName: 'fa-columns'
        },
        { 
          name: 'About',
          linkTo: '/general/about',
          faIconName: 'fa-info'
        }
      ]
    },
    // group menu #4
    {
      id: 4,
      group: 'Tests1',
      menus: [
        {
          name: 'Upload briefs',
          linkTo: '/fileUpload',
          faIconName: 'fa-file'
        },
        {
          name: 'Dashboard Demo',
          linkTo: '/Dashboard/home',
          faIconName: 'fa-eye'
        },
        {
          name: 'Basic Elements preview',
          linkTo: '/basicElements',
          faIconName: 'fa-eye'
        },
        {
          name: 'Simple tables preview',
          linkTo: '/simpleTables',
          faIconName: 'fa-eye'
        },
        {
          name: 'StatsCard',
          linkTo: '/Dashboard/statsCard',
          faIconName: 'fa-check-square-o'
        },
        {
          name: 'EarningGraph',
          linkTo: '/Dashboard/earningGraph',
          faIconName: 'fa-area-chart'
        },
        {
          name: 'Notifications',
          linkTo: '/Dashboard/notifications',
          faIconName: 'fa-bell'
        },
        {
          name: 'Work progress',
          linkTo: '/Dashboard/workProgress',
          faIconName: 'fa-briefcase'
        },
        {
          name: 'Twitter feed',
          linkTo: '/Dashboard/twitterFeed',
          faIconName: 'fa-twitter'
        },
        {
          name: 'Team Mates',
          linkTo: '/Dashboard/teamMates',
          faIconName: 'fa-user'
        },
        {
          name: 'Todo list',
          linkTo: '/Dashboard/todoList',
          faIconName: 'fa-check'
        }
      ]
    },
    // group menu #5
    {
      id: 5,
      group: 'Tests2',
      menus: [
         {
          name: 'Breadcrumb',
          linkTo: '/general/breadcrumb',
          faIconName: 'fa-bars'
        },
        {
          name: 'Stat',
          linkTo: '/general/stat',
          faIconName: 'fa-bar-chart'
        },
        {
          name: 'Basic progress bars',
          linkTo: '/general/basicProgressBars',
          faIconName: 'fa-tasks'
        },
        {
          name: 'Tab panels',
          linkTo: '/general/tabPanels',
          faIconName: 'fa-columns'
        },
        {
          name: 'Striped progress bar',
          linkTo: '/general/stripedProgressBars',
          faIconName: 'fa-tasks'
        },
        {
          name: 'Alerts',
          linkTo: '/general/alerts',
          faIconName: 'fa-exclamation-triangle'
        },
        {
          name: 'Pagination',
          linkTo: '/general/pagination',
          faIconName: 'fa-sort'
        },
        {
          name: 'Default buttons',
          linkTo: '/general/defaultButtons',
          faIconName: 'fa-hand-o-up'
        }
      ]
    },
        // group menu #6
    {
      id: 6,
      group: 'GridTests',
      menus: [
         {
          name: 'Simple',
          linkTo: '/grid/simple',
          faIconName: 'fa-bars'
        },
        {
          name: 'CustomPager',
          linkTo: '/grid/customPager',
          faIconName: 'fa-bar-chart'
        },
        {
          name: 'Cycles',
          linkTo: '/admin/cycles',
          faIconName: 'fa-bar-chart'
        }
      ]
    }
  ]
};
