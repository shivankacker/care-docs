import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  careSideBar: [
    {
      type: 'category',
      label: 'Care',
      items: [
        {
          type: 'autogenerated',
          dirName: 'care',
        },
        {
          type: 'link',
          label: 'Contributor\'s Guide',
          href: '/docs/contributing',
        },
      ],
    }
  ],
  leaderboardSideBar : [
    {
      type: 'category',
      label: 'Leaderboard',
      items: [{ type: 'autogenerated', dirName: 'leaderboard' }],
    }
  ],
  ayushmaSideBar: [
    {
      type: 'category',
      label: 'Ayushma',
      items: [{ type: 'autogenerated', dirName: 'ayushma' }],
    }
  ],
  devopsSideBar: [
    {
      type: 'category',
      label: 'DevOps',
      items: [{ type: 'autogenerated', dirName: 'devops' }],
    },
  ],
  contributorsSideBar: [
    {
      type: 'category',
      label: 'Contributing',
      items: [{ type: 'autogenerated', dirName: 'contributing' }],
    },
  ],
};

export default sidebars;
