import { defineStore } from 'pinia'
export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
      {
        image: "/images/projects/oss.webp",
        title: 'gopay-api',
        description: "[Gojek] Gopay Api PHP Class (Un-Official)",
        technologies: ['PHP', 'Wrapper'],
        github_url: 'https://github.com/namdevel/gopay-api',
        opensource: true,
      },
      {
        image: "/images/projects/oss.webp",
        title: 'ovoid-API',
        description: "OVO Api PHP Class [Unofficial]",
        technologies: ['PHP', 'Wrapper'],
        github_url: 'https://github.com/namdevel/ovoid-API',
        opensource: true,
      },
      {
        image: "/images/projects/oss.webp",
        title: 'tixid-API',
        description: "TIX ID Api PHP Class (Un-Official)",
        technologies: ['PHP', 'Wrapper'],
        opensource: true,
        github_url: "https://github.com/namdevel/tixid-API"
      },


      {
        image: "/images/projects/ph.png",
        title: 'Pornhub Engineer',
        description: "Lorem ipsum dolor sit amet",
        technologies: ['PHP', 'Java'],
        opensource: false,
      },
      {
        image: "/images/projects/ph.png",
        title: 'Pornhub Engineer',
        description: "Lorem ipsum dolor sit amet",
        technologies: ['PHP', 'Java'],
        opensource: false,
      },
      {
        image: "/images/projects/ph.png",
        title: 'Pornhub Engineer',
        description: "Lorem ipsum dolor sit amet",
        technologies: ['PHP', 'Java'],
        opensource: false,
      },
      {
        image: "/images/projects/ph.png",
        title: 'Pornhub Engineer',
        description: "Lorem ipsum dolor sit amet",
        technologies: ['PHP', 'Java'],
        opensource: false,
      },
      {
        image: "/images/projects/ph.png",
        title: 'Pornhub Engineer',
        description: "Lorem ipsum dolor sit amet",
        technologies: ['PHP', 'Java'],
        opensource: false,
      },
    ]
  })
})
