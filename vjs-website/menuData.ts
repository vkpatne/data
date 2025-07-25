export interface MenuItem {
  id: string
  title: string
  submenu: {
    title: string
    titletag: string
  }[]
}

export const menuData: MenuItem[] = [
  {
    id: 'technology',
    title: 'Technology',
    submenu: [
      { title: 'Frontend', titletag: 'frontend' },
      { title: 'Backend', titletag: 'backend' },
      { title: 'Java', titletag: 'java' },
      { title: 'Python', titletag: 'python' },
      { title: 'AI/ML', titletag: 'ai-ml' },
    ]
  },
  {
    id: 'articles',
    title: 'Articles',
    submenu: [
      { title: 'OOPs', titletag: 'oops' },
      { title: 'LLM', titletag: 'llm' }
    ]
  },
  {
    id: 'projects',
    title: 'Projects',
    submenu: [
      { title: 'AI/ML', titletag: 'ai-ml' },
      { title: 'Travel Planner', titletag: 'travelPlan' },
    ]
  },
  {
    id: 'demo',
    title: 'Demo',
    submenu: [
      { title: 'Web Apps', titletag: 'web' },
      { title: 'Mobile Apps', titletag: 'mobile' },
      { title: 'APIs', titletag: 'api' }
    ]
  }
]