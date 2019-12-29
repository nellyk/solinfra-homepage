module.exports = {
  siteTitle: 'Solinfra - Solving Your Infrastructure',
  metadata: {
    keywords: 'infrastructure, IT, cloud, cloud-native, open-source, kubernetes, k8s, rancher, reliable, scalable, resilient, self-healing',
    description: 'We blueprint and manage the ideal infrastructure to make your service run efficiently, with resilience and scalablity in mind. Let us solve your infrastructure today!',
    twitterUsername: '@solinfra',
    language: 'EN',
    subject: 'Providing IT and Cloud Infrastructure Solutions',
    copyright: 'Solinfra'
  },
  companyName: 'Solinfra',
  manifestName: 'Solinfra - Solving your infrastructure',
  manifestShortName: 'Solinfra', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#fff',
  manifestThemeColor: '#34d12e',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: null,
  heading: 'solinfra',
  subHeading: '... building the clouds of tomorrow, today',

  // about
  about: {
    title: 'The solution to infrastructure',
    body: `
            Whether you're a start-up with the foresight of appropriately preparing
            for your infrastructure needs or
            an already established organization looking to upgrade your legacy IT
            infrastructure, we're here for you.
            Our experienced team will blueprint and manage the ideal
            infrastructure to make your service run efficiently, with resilience and
            scalablity in mind.
`

  },
  // projects
  projects: [
    {
      title: 'Balancing NoOps and DevOps',
      body: `
              Streamlining as much of your infrastructure effectively is our goal
              and to achieve this we take the best of both worlds from
              NoOps and DevOps.
              NoOps being the ideal of moving towards a frictionless software
              deployment by automating and abstracting infrastructure, 
              up to the point of serverless.
              Abstracting out too much hurts performance and reliablity. 
              We'll provide you with
              frictionlessness whilst you retain control of your infrastructure.
            `

    },
    {
      title: 'Open-Source',
      body: `
              We proudly utilize open-source projects to the fullest extent
              possible in our solutions.
              What open-source entails for you as a client is an assurance
              of continued quality and transparency. No trying to sell you
              on proprietary software shrouded in NDAs and mystery and no vendor
              lock-ins from us.
              Additionally, you are free to re-tailor parts as your needs
              change over time, no dealing with lawyers, only building.
            `

    },
    {
      title: 'Cloud-Native',
      body: `
              Our solutions are built on the cloud-native philosophy. Adopting it
              allows your organization to become highly efficient while keeping your
              developers happy. Have a look through our own repositories that are
              built this way. We also believe that cloud-native should not entail
              locking you to a specific cloud provider, or even any at all unlike 
              others. The solution you are provided is agnostic, and gives you
              the ultimate fleixibility of choosing cloud providers as you please.
            `

    },
    {
      title: 'Self-Healing',
      body: `
              Time is money. Likewise, any downtime of your service is
              a significant cost to you both in terms of lost opportunity and
              potential loss of trust. This is why our solutions are
              based on the principles of self-healing and redundancy, where
              your service is hosted amongst multiple cloud instances. If one 
              goes down, another is ready to take its place, while the downed
              instance is replaced.
            `

    }
  ],
  // social
  socialLinks: [
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/solinfra'
    },
    {
      icon: 'fa-medium',
      name: 'Medium',
      url: 'https://medium.com/@solinfra'
    },
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/solinfra'
    }
  ],
  email: 'contact@solinfra.io',
  address: 'Suite 1801 - 1 Yonge Street, Toronto, Canada, M5E 1W7'
}
