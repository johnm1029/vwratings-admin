export default [
  {
    name: 'cabinet.dashboard',
    path: 'dashboard',
    component: () => import('@/views/Dashboard'),
    meta: {title: 'Admin'}
  },
  {
    name: 'cabinet.users',
    path: 'users',
    component: () => import('@/views/users/List'),
    meta: {title: 'Users'}
  },
  {
    name: 'cabinet.avis',
    path: 'avis',
    component: () => import('@/views/avis/List'),
    meta: {title: 'Avis'}
  },
  {
    name: 'cabinet.messages',
    path: 'messages',
    component: () => import('@/views/messages/List'),
    meta: {title: 'Messages'}
  },
  {
    name: 'cabinet.ads.campaigns',
    path: 'campaigns',
    component: () => import('@/views/ads/Index'),
    meta: {title: 'Ads Campagins'}
  },
  {
    name: 'cabinet.avis.comments',
    path: 'avis-comments',
    component: () => import('@/views/avis/Comments'),
    meta: {title: 'Avis Comments'}
  },
  {
    name: 'cabinet.avis.ratings',
    path: 'avis-ratings',
    component: () => import('@/views/avis/Ratings'),
    meta: {title: 'Avis Ratings'}
  },
  {
    name: 'cabinet.parties',
    path: 'parties',
    component: () => import('@/views/parties/List'),
    meta: {title: 'Parties'}
  },
  {
    name: 'cabinet.parties.comments',
    path: 'parties/comments',
    component: () => import('@/views/parties/Comments'),
    meta: {title: 'PartiesComments'}
  },
  {
    name: 'cabinet.parties.ratings',
    path: 'parties/ratings',
    component: () => import('@/views/parties/Ratings'),
    meta: {title: 'Parties Ratings'}
  },
]