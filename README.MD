# City One Blood Donation Network : This app serves as a vital tool to bridge the gap between blood donors and those in need, promoting a robust and efficient blood donation ecosystem
## Inspiration

My team teammate Christine and I are  adult volunteers of St. John Ambulance Kenya, our division, which is the basic unit of the order is called city one.

The adult volunteers form a core part of our timely and effective response to disasters, wherever in the country they may be. Their high level of discipline and commitment ensures St John is always at the forefront of caring for our  community.

The mission of the Order of St. John is to prevent and relieve sickness and injury and to act to enhance health and well being of people of all races and creeds anywhere in the world

Offering First Aid and emergency care at accidents and incidents, offering professional and life-saving pre-hospital care in these difficult times. 

Beyond that, the volunteers give community and hospital service, First Aid cover at national and public events as well as caring for the sick in the communities where they live through our Community Health programme.

As volunteers we build the city One Network app to revolutionize blood donation in Kenya by connecting donors and recipients seamlessly, ensuring that life-saving blood is always available when and where it is needed the most. Together with the Ministry of Health and St. John Ambulance Services volunteers, this app empowers communities to save lives and contribute to a healthier Kenya.

To convince St. John Ambulance and the Ministry of Health in Kenya to use the City One Blood Donation Network app regularly and potentially acquire it, we'll knew we needed to focus on demonstrating the app's value and addressing their specific needs and concerns , more importantly, integrating security features using Pangea's APIs would enhance their confidence in the app and roll in out to the entire country. 

## What it does
Key Features:
1. User-friendly Interface:The app boasts an intuitive and user-friendly interface, ensuring easy navigation for both donors and recipients.

2. Donor Registration:Individuals can register as blood donors, providing their information and medical history to help maintain a comprehensive donor database.

3. Real-time Donor Locator:The app enables real-time tracking of available blood donors within a specified radius, ensuring timely access to life-saving blood supplies.

4. Appointment Scheduling: Donors can schedule blood donation appointments at their convenience, reducing waiting times and ensuring a steady supply of blood.

5. Emergency Requests: Hospitals and medical facilities can send emergency blood requests directly through the app, instantly notifying nearby donors who match the required blood type.

6. Blood Type Compatibility: The app checks donor blood types against recipient requirements, ensuring safe and accurate blood transfusions.

7. Health Records:Donors can maintain their health records, allowing for easy monitoring and notifications for future donations.

8. Notifications:Users receive timely reminders for upcoming appointments, eligibility to donate, and critical updates on blood shortages or emergencies.

9. Community Engagement: The app encourages community engagement through gamification, challenges, and events to motivate regular blood donations.

10. Information Hub: It provides educational content about the importance of blood donation, guidelines, and FAQs to dispel myths and misconceptions.

11. Feedback and Rating: Users can rate their donation experience, helping to improve services and enhance transparency.

12. Analytics and Reporting:The Ministry of Health can access comprehensive analytics and reports to make informed decisions, optimize blood donation campaigns, and allocate resources effectively.

13. Privacy and Security:* Robust security measures are in place to protect user data and maintain confidentiality.
## How we built it
Christine my team mate came up with the UI/Ux using figma and gimp, she is our UX?UX star.

I implement her designs using React Native so that the app can work well on android, IOS and web, this is because Kenya hasa  bigger mble penetration than other platform, we had to go with mobile first.

The API is built using Nodeejs , mongoDB and delpoyed on Google cloud platform, Pangea Node.js SDK made our work much easier !


## Challenges we ran into
The team mates are busy, Christine is an Nurse and I'm  a fulltime engineer, finding the time to thoroughly studying Pangea's security platform and APIs documentation. Understand the capabilities and functionalities they offer, including authentication, audit logging, secrets management, and sensitive data removal took lots of our time that we expected, family time suffered!
## Accomplishments that we're proud of
Integrating security features using Pangea's APIs  enhanced members  confidence in the app
## What we learned
By taking security steps and presenting a compelling case, we can increase the likelihood of St. John Ambulance and the Ministry of Health in Kenya using the app regularly and considering its acquisition.
## What's next for cityOne git 

Increase the likelihood of St. John Ambulance and the Ministry of Health in Kenya using the app regularly and considering its acquisition.


week 1
- Ideation - to come up with a Project idea
  personas
- Breakdown your project into tasks
- Report the total number of tasks for the project
- Assign tasks to all te team members
- Plan and scedule stand ups within your team
- Plan a weekly Demo schedule with your Supervisor
- Set up your Github repo for te project

Other weeks

- Sprint planning
- Coding
- Code Review
- Deployment
- Sprint Review
 # Run RN Mobile app

 The project is using Expo React native 

 npm i

 npm expo start

  # Run API - Configure GCP

curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install git
sudo npm install pm2 -g

<!-- Project in Action - [Jobify](https://www.jobify.live/) -->

Find the App Useful? [You can always buy me a coffee at payoneer:imbugad@gmail.com]()

#### Run The App Locally

```sh
npm run install-dependencies
```

- rename .env.temp to .env
- setup values for - MONGO_URL, JWT_SECRET, JWT_LIFETIME

```sh
npm start
```

- visit url http://localhost:80/




  ------------------------------------

  Back-end and GCP setup (Node.Js )

  1. Create VM , 
  2. Configure API's runtime environment
      - Node - Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.Node.js binary distributions are available from NodeSource.https://github.com/nodesource/distributions

     package-manager#debian-and-ubuntu-based-linux-distributions
      - PM2 - ADVANCED, PRODUCTION PROCESS MANAGER FOR NODE.JS
PM2 is a daemon process manager that will help you manage and keep your application online 24/7 https://pm2.keymetrics.io/
  3. Git clone repo
  4. In the project directory, 
       - Setup .env file ==> touch .env && nano .env -> copy paste secrets & save
       - Run npm install  ---> npm i
       - Run pm2   ------- sudo pm2 start server.js && sudo pm2 monit
       - server > Server is listening on port 80...   

  5. Configure load balancing for the API with your domain name

  Mobile Setup (React Native)

  - Use EAS to deploy to play store

## 1. Public URL and Access to Code Repository:

  -url--> https://github.com/Domminique/chapchap_api_v1
   - We will host the project on a public code repository platform like GitHub, ensuring visibility for the judges to review the code.
   - The code repository will contain the entire project, including frontend code, backend configurations, and any additional scripts or resources.



# Configure GCP

curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install git
sudo npm install pm2 -g

Project in Action - [Jobify](https://www.jobify.live/)

Find the App Useful? [You can always buy me a coffee](paypal:imbugad@gmail.com)

#### Run The App Locally

```sh
npm run install-dependencies
```

- rename .env.temp to .env
- setup values for - MONGO_URL, JWT_SECRET, JWT_LIFETIME

```sh
npm start

```

- visit url http://localhost:3000/


## 2. Architecture Diagram:
   - We will create a high-level architecture diagram illustrating the components and their interactions within the app.
   - The diagram will showcase the integration of MongoDB Atlas, Google Cloud products, and other relevant services or APIs used in the app.




## Design & Process #ff7519

### Brief description: City One Blood Donation Network app - (**city one** is a division in St.John Ambulance, Nairobi Region, Kemya)

An health care platform that enables African blood donors, hospitals and health workers to sell products online. 

### List a few main features:

- Hospitals can search for and match blood donors based on location langauge, skills, goals, and country
- Pricing will be individualised based on organizations preference and demand , it will be free for not-for-profit and charity orgarnisations
- Strong social media interration with reviews, posts and analytics
- Managers can upload farmer and buyers in pdf, json or excell data formats

### List roles of typical users:

a. Hospital Manager
b. Blood Donor
c. Blood in_need 

## 2a. Writing user personas

Ibrahim is a busy working paramedic who wants to access city one bdapp and make sure that he can see all blood donation activities of his Program. He also uses city one bdapp to see engagement reports, detailed meeting lists, graphics, custom reports. He also uses the mobile app to automate meeting and calls with blood donors and buyers. Ibrahim wants to save time and money, and he wants a blood donors Management platform that gives his time back.

Dominic is a farmer and a busy start-up founder who wants to send direct messages or join video calls his buyers and to explore tools that will save him time and learn in the process . Dominic likes to perform all operations on her phone.

## 2b. Writing user stories

Search for for blood donors and buyers

As a Hospital Manager , I want to search for blood donors and buyers of my blood donation program , see engagement reports, detailed meeting lists, graphics, custom reports of all blood donation activities.

Check useful graphics
As a farmer, I want to Check useful graphics to measure my blood donation program.

## 3. Defining SLIs and SLOs

#### userstory SLI

Check useful graphics

#### SLO

1. available 99.95%
2. 5% of requests complete in under 300 ms

#### SLI

1. Fraction of 200 vs 500 HTTP responses from
   API endpoint measured per day
2. Time to last byte GET requests measured
   every 10 seconds aggregated per minute

## 4. Design microservices for your application

A diagram showing your application's microservices and their connections.

# diagram here

## . Designing REST APIs

services and their resources and operations .

### Service name

Account Service

### Collections

transaction

### Methods

list
deposit
withdraw
transfer

## 6. Defining storage characteristics

### required storage features

#### Service

#### Structured or Unstructured

#### SQL or NoSQL

NoSQL

#### Strong or Eventual Consistency

Strong M

#### Amount of Data (MB, GB, TB, PB, ExB)

20GB

#### Read only or Read/Write

## 7. Choosing Google Cloud Storage and Data Services

#### Google Cloud storage products for each service

MongoDB Atlas

## 8a. Defining network characteristics for your services

### Service

Account

### Internet facing or Internal only

### HTTP

### TCP

Yes

### UDP

### Multiregional?

No

## 8b. Select the load balancers for your services

Google Cloud load balancer product(s) for each service.

### Service , http, TCP(yes), UDP

## 9. Diagramming your network

### diagram that depicts how your services will communicate over the network. Include regions, zones, load balancers, CDN, and DNS if applicable

# Newtwork Diagram here

## 10. Designing reliable, scalable applications

### Even if some service is down, we want the web frontend of our application to be available nearly all the time. We also want the website to be fast with very low latency to users all over the world. On the next slide, draw a diagram that depicts how we can achieve this using Google Cloud services.

## # Reliable, scalable Diagram here

## 11a. Disaster recovery scenario

### We've deployed for high availability by replicating resources in multiple zones. However, to meet regulatory requirements, We need a plan to recover from a disaster that brings down the entire region. The current architecture is depicted below.So we create a plan to bring up your application in another region if our main region is down.

# Disaster recovery scenario diagram

## 11b. Service disaster recovery scenarios

### Write a high-level list of possible scenarios on the next slide.

### Scenarion one

#### Service

Ratings Service

#### Scenario

Programmer deleted all ratings accidentally

#### Recovery Point Objective

24 hours

#### Recovery Time Objective

1 hour

#### Priority

Med

### Scenario two

#### Service

blood donors Service

#### Scenario

blood donors database crashes

#### Recovery Point Objective

0 (can’t lose any data)

#### Recovery Time Objective

2 minutes

#### Priority

High

## 11c. Resource disaster recovery plans

### For Scenarion one

### Resource

Ratings Database

### Backup Strategy

Daily automated backups

### Backup Location

Multi-Regional Cloud Storage Bucket

### Recovery Procedure

Run Restore Script

### For Scenarion two

### Resource

Orders Database

### Backup Strategy

Failover replica plus daily backups

### Backup Location

Multi-zone deployment

### Recovery Procedure

Automated

## 12. Modeling secure Google Cloud services

### A diagram that depicts how we will secure your services. Include firewalls, IAM roles, service accounts and network resources as appropriate.

# A diagram that depicts how you will secure your services

## 13. Cost estimating and planning

### We Use the pricing calculator to determine and record on the next slide the cost of your microservices.

### Service name

Accounts

### Google Cloud Resource

MongoDB Atlas + 2 VMs + Load balancer

### Cost

$574.71/month



