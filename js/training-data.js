var treeData = [
  {
    "name": "Smruti Ranjan",
    "parent": null,
    "children": [
      {
        "name": "Skills",
        "parent": null,
        "_children": [
          {
            "name": "Team Management",
            "parent": "null",
            "details": ["Proficient in leading and managing cross-functional teams to achieve project goals and meet deadlines.",
              "Experienced in task delegation, performance monitoring, and providing constructive feedback to enhance productivity.",
              "Successfully implemented strategies to improve team efficiency and morale in fast-paced and dynamic environments.",
              "Strong ability to manage resources, prioritize tasks, and maintain alignment with organizational objectives."
            ],
            "data": ["Agile Methodology", "Scrum", "Jira", "Confluence", "Sprint Planning", "Project Management"],
            "images": ["images/agile.png", "images/jira.png", "images/projectManagement.jpg"]
          },
          {
            "name": "Full Stack Web Development",
            "parent": "Skills",
            "details": ["Proficient in designing, developing, and deploying scalable web applications using modern frontend and backend technologies.",
              "Skilled in frontend technologies like HTML5, CSS3, JavaScript, TypeScript, React, and Redux to build responsive and user-friendly interfaces.",
              "Experienced in backend development using Node.js, Express.js, and RESTful APIs for robust server-side logic and data handling.",
              "Adept at working with databases such as PostgreSQL, MySQL, and MongoDB, with experience in schema design and query optimization.",
              "Familiar with cloud platforms like AWS, Azure, and Google Cloud for deploying and managing web applications.",
              "Knowledge of CI/CD pipelines and DevOps practices for seamless deployment and continuous integration.",
              "Experienced in using testing tools like Jest, Cypress, React test library and Postman to ensure quality and reliability of applications."
            ],
            "data": ["HTML5", "CSS3", "TypeScript", "React.js", "Express.js", "PostgreSQL", "MySQL", "MongoDB", "Docker", "GraphQL", "Jest", "Cypress"],
            "images": ["images/react.svg", "images/node.png","images/postgresql.png", "images/docker.png"]
          },
          {
            "name": "Mobile App Development",
            "parent": "null",
            "details": ["Proficient in developing feature-rich, high-performance mobile applications for both Android and iOS platforms.",
              "Experienced in cross-platform frameworks such as React Native and Ionic for building applications with shared codebases.",
              "Proficient in integrating RESTful APIs, GraphQL, and third-party SDKs for enhanced app functionality."
            ],
            "data": ["React Native", "Ionic", "Material-UI", "Cordova", "Android", "iOS"],
            "images": ["images/android.webp", "images/ios.webp","images/reactNative.svg", "images/ionic.png", "images/material.png"]
          },
          {
            "name": "DevOps",
            "parent": "null",
            "details": ["Proficient in automating and streamlining software delivery pipelines using tools GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD).",
              "Experienced in containerization technologies such as Docker and orchestration tools like Kubernetes to deploy and manage scalable, fault-tolerant applications.",
              "Hands-on experience with cloud platforms, including AWS (EC2, S3, RDS, Lambda)",
              "Expertise in monitoring and logging tools like Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana), and Datadog to ensure system reliability and performance."
            ],
            "data": ["GitHub Action", "Docker", "Kubernetes"],
            "images": ["images/githubaction.png", "images/docker.png", "images/kubernetes.webp"]
          },
          {
            "name": "Testing",
            "parent": "null",
            "details": ["Unit Testing: Experienced in writing and maintaining unit tests using Jest and React Testing Library to ensure individual components and functions meet the expected behavior. Skilled in implementing test-driven development (TDD) practices for robust and maintainable code.",
              "Integration Testing: Proficient in performing end-to-end integration testing with Cypress and Playwright, validating seamless interactions between various application modules and workflows. Familiar with scripting and automating browser-based tests to ensure cross-browser compatibility and reliability.",
              "API Testing: Skilled in testing RESTful APIs and GraphQL endpoints using Postman, including designing test collections, validating responses, and automating test scripts. Adept at using Postman for performance benchmarking and monitoring API reliability."
            ],
            "data": ["Jest", "React Test Library", "Cypress", "Playwright", "Postman"],
            "images": ["images/jest.png", "images/cypress.webp", "images/postman.png"]
          }
        ]
      },
      {
        "name": "Experience",
        "parent": "null",
        "_children": [
          {
            "name": "GlobalLogic Private Limited (Consultant)",
            "duration": "Feb 2021 – May 2024",
            "link": "https://www.globallogic.com/",
            "details": ["Managed and led an 8 members cross-functional team, contributing to all stages of the product lifecycle",
              "Spearheaded application architecture and design, leading to significant performance improvements.",
              "Implemented WOPI integration for seamless MS Word integration within the application.",
              "Integrated Static Code Analysis using SonarQube into the CI pipeline, enhancing code quality.",
              "Established Unit Testing and Integration Testing within the CI pipeline, reducing regression cycles and ensuring stable releases every two sprints.",
              "Set up a Monorepo for frontend applications using Turborepo, improving codebase management."
            ],  
            "parent": null,
            "data": ["Team Lead", "Sprint Planning", "Project Architect", "Project Delivery"],
            "images": ["images/globallogic.png"]
          },
          {
            "name": "L&T Technology Services (Sr. Software Developer)",
            "duration": "Feb 2019- Feb 2021",
            "link": "https://www.ltts.com/",
            "details": ["Led the development of a cross-platform mobile application for an IoT project, optimizing it for both online and offline modes with Bluetooth communication.",
              "Architected and developed the entire application as a full-stack developer, focusing on scalability and maintainability.",
              "Developed a 3D visualization application for the oil and gas industry, allowing users to view and interact with pipeline deposit data using zoom, rotate, and slice features.",
              "Utilized WebGL and Three.js for creating a 3D rendering engine to visualize internal pipeline depositions.",
            ],
            "parent": "null",
            "data": ["Cross platform mobile application", "IoT", "Bluetooth communication", "Full stack development", "AR/VR technology", "3D visualization", "WebGL", "Three.js"],
            "images": ["images/lnt.png"]
          },
          {
            "name": "Zool Technology (Software Engineer)",
            "duration": "June 2015- Jan 2019",
            "link": "https://zool.in/",
            "details": ["Developed and maintained responsive web applications, ensuring compatibility across various browsers and devices",
              "Crafted dynamic user interfaces using HTML, CSS, and JavaScript.",
              "Integrated third-party APIs and libraries to extend website functionality and enhance user experience."],
            "parent": "null",
            "data": ["Responsive web applications", "API integration"],
            "images": ["images/zool.webp"]
          }
        ]
      },
      {
        "name": "Projects",
        "_children": [
          {
            "name": "Diligent Minutes(Web App)",
            "duration": "March 2024 - Present",
            "link": "https://www.diligent.com/features/boards/boards-minutes",
            "details": ["Developed a real-time collaboration feature for a meeting minutes application, leveraging socket connections for event capturing with CKEditor backend.",
              "Enhanced editor functionality by adding tools such as pen, highlighter, link insertion, and list creation.",
              "Created a Node.js microservice to convert HTML documents into Word format templates.",
              "Implemented a feature to export meeting minutes to PDF format using docx library."
            ],  
            "parent": null,
            "data": ["React", "Redux", "Storybook", "Material UI", "Node.js", "AG Grid", "DOCX", "WOPI integration", "Turborepo", "Jest", "React Testing Library", "Cypress", "Accessibility"],
            "images": ["images/minutes-app1.webp", "images/minutes-app2.webp","images/minutes-app3.webp", "images/minutes-app4.webp", "images/minutes-app5.webp"]
          },
          {
            "name": "Dometic Interact(IoT App)",
            "duration": "Nov 2019 - Oct 2020",
            "link": "https://play.google.com/store/apps/details?id=com.dometicapp&pli=1",
            "details": ["The project focuses on creating a mobile application designed to empower users with remote control and monitoring capabilities for various caravan appliances, including AC, heater, lights, and fans. The application offers three distinct communication modes: Bluetooth, Wi-Fi, and Cloud.",
              "Bluetooth: When in close proximity to the caravan, users can conveniently control appliances using Bluetooth.",
              "Wi-Fi: For remote control and monitoring from a distance, the application utilizes Wi-Fi connectivity, enabling users to manage appliances securely and efficiently.",
              "Cloud: The cloud communication mode allows users to access and control their caravan's appliances from anywhere, providing seamless remote management and monitoring."
            ],
            "parent": null,
            "data": ["React Native", "Redux", "AWS IOT", "AWS Serverless", "ESP32 Microcontroller", "Bluetooth", "Wi-Fi"],
            "images": ["images/dometic1.jpeg", "images/dometic2.jpeg"]
          },
          {
            "name": "InnerView (3D Pipeline Visualization)",
            "duration": "Mar 2019 - Oct 2020",
            "link": null,
            "details": ["This project developed for Halliburton client",
              "Halliburton Client's main focus on oil and gas industry. I created a dynamic solution to view the deposition inside the oil pipe in 3D view. In this application user will get complete 3D view of the pipe along with interaction support like zooming, slicing, rotating and moving inside the pipe.",
              "Utilized WebGL and Three.js for creating a 3D rendering engine to visualize internal pipeline depositions."
            ],
            "parent": null,
            "data": ["WebGL", "Three.js", "Angular"],
            "images": ["images/innerView1.jpeg", "images/innerView2.jpeg", "images/innerView3.jpeg", "images/innerView4.jpeg"]
          },
          {
            "name": "One Airtel (Web App)",
            "duration": "Jan 2022",
            "link": "https://www.airtel.in/airtel-black/",
            "details": ["Developed a cross-platform mobile application for Airtel Black, a premium service offering from Airtel.",
            ],
            "parent": null,
            "data": ["React", "Redux", "TypeScript", "HTML", "CSS"],
          },
        ]
      },
      {
        "name": "Education",
        "parent": null,
        "_children": [
          {
            "name": "Master of Technology (MTech), Big Data and Blockchain Development",
            "parent": "null",
            "duration": "Indian Institute of Technology, Patna",
            "details": ["Specializing in Big Data analytics and Blockchain technologies, focusing on advanced computing and secure data management.",
              "Coursework includes Distributed Systems, Cryptography, Machine Learning, and Decentralized Applications (DApps)",
              "Working on projects related to blockchain scalability, smart contract optimization, and big data processing frameworks.",
              "Actively engaging in research and development of innovative solutions in blockchain and data-driven systems."
            ],
            "data": ["Distributed Systems","Cryptography","Machine Learning","Decentralized Applications (DApps)"],
            "images": ["images/iitp.jpeg"]
          },
          {
            "name": "Bachelor of Technology (B.Tech), Computer Science",
            "parent": "null",
            "duration": "Biju Patnaik University of Technology ( Mar 2010 - Apr 2014 )",
            "details": ["Gained comprehensive knowledge in computer science principles, programming languages, algorithms, and software development.",
              "Completed coursework in Data Structures, Operating Systems, Computer Networks, and Database Management Systems.",
              "Participated in hands-on projects that enhanced problem-solving and technical skills.",
              "Actively involved in coding competitions and technical seminars during the program."
            ],
            "data": ["Data Structures", "Operating Systems", "Computer Networks", "Database Management Systems"],
            "images": ["images/bput.png"]
          },
          {
            "name": "Intermediate, Science",
            "parent": "null",
            "duration": "Council of Higher Secondary Education, Odisha (Mar 2008 - Apr 2010)",
            "details": "Focused on foundational studies in Physics, Chemistry, Mathematics, and Biology.",
            "data": ["Physics", "Chemistry", "Mathematics", "Biology"],
            "images": ["images/chse.jpeg"]
          },
          {
            "name": "High School",
            "parent": "null",
            "duration": "Board of Secondary Education, Odisha ( Mar 2005 - Aar 2008)",
            "data": ["Mathematics, Science"],
            "images": ["images/bse.png"]
          }
        ]
      },
      {
        "name": "Contact Me",
        "parent": null,
        "details": ["Mobile/WhatsApp : +91 7204995711", 
          "Email : ER.SSRM@GMAIL.COM",
          "LinkdIn: https://www.linkedin.com/in/erssrm", 
          "GitHub:  https://github.com/erssrm", 
          "Location: Bhubaneswar, Odisha, India"
        ],
        "images": ["images/self.jpeg"]
      }
    ]
  }
];
