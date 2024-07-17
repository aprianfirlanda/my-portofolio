export const navItems = [
  {
    link: '#home',
    name: 'Home'
  },
  {
    link: '#skills',
    name: 'Skills'
  },
  {
    link: '#portfolio',
    name: 'Portfolio'
  },
  {
    link: '#blog',
    name: 'Blog'
  }
]

export const skills = [
  {
    id: 'fe',
    name: 'Front-End Design',
    data: [
      {
        imgSrc: '/icons/angular.svg',
        title: 'Angular'
      },
      {
        imgSrc: '/icons/next-js.svg',
        title: 'Next.js'
      },
      {
        imgSrc: '/icons/react-js.svg',
        title: 'React.js'
      }
    ]
  },
  {
    id: 'be',
    name: 'Back-End Development',
    data: [
      {
        imgSrc: '/icons/spring-boot.svg',
        title: 'Spring Boot'
      },
      {
        imgSrc: '/icons/node-js.svg',
        title: 'Node.js'
      },
      {
        imgSrc: '/icons/golang.svg',
        title: 'Go-Lang'
      }
    ]
  },
  {
    id: 'db',
    name: 'Database',
    data: [
      {
        imgSrc: '/icons/oracle.svg',
        title: 'Oracle'
      },
      {
        imgSrc: '/icons/postgresql.svg',
        title: 'PostgreSQL'
      },
      {
        imgSrc: '/icons/redis.svg',
        title: 'Redis'
      },
      {
        imgSrc: '/icons/kafka.svg',
        title: 'Kafka'
      },
      {
        imgSrc: '/icons/rabbit-mq.svg',
        title: 'RabbitMQ'
      },
      {
        imgSrc: '/icons/elasticsearch.svg',
        title: 'ElasticSearch'
      }
    ]
  },
  {
    id: 'devops',
    name: 'DevOps & Tools',
    data: [
      {
        imgSrc: '/icons/gitlab.svg',
        title: 'GitLab'
      },
      {
        imgSrc: '/icons/docker.svg',
        title: 'Docker'
      },
      {
        imgSrc: '/icons/kubernetes.svg',
        title: 'Kubernetes'
      }
    ]
  }
]

export const blogs = [
  {
    id: 1,
    imgSrc: '/images/blogs/spring-boot.png',
    title: 'Spring Boot with Testcontainers',
    synopsis:
      "Testcontainers is a Java library that provides lightweight, disposable instances of databases, message brokers, and other services running in Docker containers. It's particularly useful for integration testing because it allows you to:"
  }
]
