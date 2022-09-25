import { defineStore } from 'pinia'
import w from './anime.json';

function getRandomImage() {
  return w[Math.floor(Math.random() * w.length)];

}
export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
      {
        image: getRandomImage(),
        title: 'gopay-api',
        description: "Excepteur sint occaecat cupidatat non proident",
        technologies: ['PHP', 'Wrapper'],
        github_url: 'https://github.com/namdevel/gopay-api',
        opensource: true,
      },
      {
        image: getRandomImage(),
        title: 'ovoid-API',
        description: "Excepteur sint occaecat cupidatat non proident",
        technologies: ['PHP', 'Wrapper'],
        github_url: 'https://github.com/namdevel/ovoid-API',
        opensource: true,
      },
      {
        image: getRandomImage(),
        title: 'tixid-API',
        description: "Excepteur sint occaecat cupidatat non proident",
        technologies: ['PHP', 'Wrapper'],
        opensource: true,
        github_url: "https://github.com/namdevel/tixid-API"
      },
      {
        image: getRandomImage(),
        title: 'cek-resi',
        description: "Excepteur sint occaecat cupidatat non proident",
        technologies: ['PHP', 'Wrapper'],
        opensource: true,
        github_url: "https://github.com/namdevel/cek-resi"
      },
      {
        image: getRandomImage(),
        title: 'cek-nik',
        description: "Excepteur sint occaecat cupidatat non proident",
        technologies: ['PHP', 'Wrapper'],
        opensource: true,
        github_url: "https://github.com/namdevel/cek-nik"
      },
      {
        image: getRandomImage(),
        title: 'SSLKiller',
        description: "Excepteur sint occaecat cupidatat non proident",
        technologies: ['Objective-C++'],
        opensource: true,
        github_url: "https://github.com/namdevel/SSLKiller"
      },
      {
        image: getRandomImage(),
        title: 'jsid.dev',
        description: "Excepteur sint occaecat cupidatat non proident",
        technologies: ['JS'],
        opensource: true,
        github_url: "https://github.com/namdevel/jsid.dev"
      },
      {
        image: getRandomImage(),
        title: 'rust-parallel',
        description: "Excepteur sint occaecat cupidatat non proident",
        technologies: ['Rust'],
        opensource: true,
        github_url: "https://github.com/namdevel/rust-parallel"
      },
      {
        image: getRandomImage(),
        title: 'my-pertamina',
        description: "Excepteur sint occaecat cupidatat non proident",
        technologies: ['Objective-C++'],
        opensource: true,
        github_url: "https://github.com/namdevel/my-pertamina"
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
