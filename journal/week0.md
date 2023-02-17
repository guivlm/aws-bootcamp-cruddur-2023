# Week 0 — Billing and Architecture

### 1 - Create an Admin User:

<img width="800" alt="image" src="https://user-images.githubusercontent.com/20449025/218699528-b33b66a8-3457-492a-a80c-7ba9767d1f63.png">

**Notes:** This user has been created through the AWS UI by accessing IAM (Identity and Access Management).

---

### 2 - Set MFA Admin User:

<img width="800" alt="image" src="https://user-images.githubusercontent.com/20449025/218707853-dbdd5fdb-85eb-485e-b12d-598be5c9c55a.png">

**Notes:** I've had the opportunity to enable Multi-Factor Authentication for both my created users: Root & Admin.
In this case, I've used my iPad with Google Authenticator as a method for verifying the identity.

---

### 3 - Set IAM role to Admin User:

<img width="800" alt="image" src="https://user-images.githubusercontent.com/20449025/218709209-9c6fe06e-c280-400a-8ed2-9bb92579bf07.png">

**Notes:** In this case, I've created a group named "Admin" and assigned the standard "Administrator" policy access under it.
The Admin user has been assigned to the Admin Group.

---

### 4 - Generate AWS Credentials:

<img width="800" alt="image" src="https://user-images.githubusercontent.com/20449025/218702338-a392f5b6-b696-4e01-9387-ce0e6116b47d.png">

**Notes:** I had the opportunity to explore the AWS Command Line Interface with some commands, as well as to explore the related documentation.

---

### 5 - Install AWS CLI

<img width="800" alt="image" src="https://user-images.githubusercontent.com/20449025/218705873-59fbb350-489a-4940-9deb-df360efa115e.png">

**Notes:** I already had the AWS CLI installed on my machine.
With that being said, I've had the opportunity to explore Gitpod for the very first time.
I admired how it's easy to use that tool to provision different environments/branches integrated with Git.
Another learning was about creating automation to setup the Gitpod environment for whenever the system starts.
I could have used my local VSCode, but once it was the first time I was using Gitpod, I didn't notice the fact that it was consuming credits. This a point to explore in the next lessons.

---

### 6 - Create a Billing Alarm

<img width="800" alt="image" src="https://user-images.githubusercontent.com/20449025/218706502-9981c553-8b3e-49c7-bfb6-0b0b32555802.png">

<img width="800" alt="image" src="https://user-images.githubusercontent.com/20449025/218711961-b634bdd2-7d74-4530-b3c2-0f09024cf88c.png">

<img width="800" alt="image" src="https://user-images.githubusercontent.com/20449025/218712673-be651d2c-9baf-492d-98f1-2c5feeda97bc.png">

**Notes:** I had the opportunity to create a billing alarm through AWS CLI.
Once I brought a DNS before the bootcamp starts, I was charged more than my target (the least the better) and was able to receive a notification alert almost immediately.
I noticed that the payloads in general with JSON are pretty easy to read and understand, and the documentation covers it very well.

---

### 7 - Create a budget

<img width="800" alt="image" src="https://user-images.githubusercontent.com/20449025/218707071-ad41d090-a251-4e38-9ceb-5621430e4158.png">

<img width="800" alt="image" src="https://user-images.githubusercontent.com/20449025/218715916-7eb5b719-588f-4290-8416-182314a597d1.png">

**Notes:** I was able to understand the different types of budgets that can be created.
Also, the possibility of creating a budget for credits is pretty cool, once I was able to get some of them from the MongoDB webinar.
I've created one about cost zero and another one regarding the DNS' implicity costs.

---

### 8 - Use Cloud Shell:

<img width="800" alt="image" src="https://user-images.githubusercontent.com/20449025/218701249-a81b8103-7658-4705-b588-4722ff274d25.png">

**Notes:** A second opportunity for exploring the cloud shell.
It's a great asset when you don't have access to a computer, you can go with it on mobile as well.

---

### 9 - Simple Notification Service (SNS):

<img width="800" alt="image" src="https://user-images.githubusercontent.com/20449025/218714194-0154c046-6450-4915-8b7d-70caef60b4b0.png">

<img width="800" alt="image" src="https://user-images.githubusercontent.com/20449025/218713730-377d01fa-a946-4f6f-898b-8047e80e1dad.png">

**Notes:** In this case, I've logged a support ticket due to overcharging, which was pretty easy and answered fast.
I admired how fast the answer was for a free tier (actually I bought a DNS), but what I meant was about not having any kind of premier support acquired.

---

### 10 - Open a ticket for AWS

<img width="800" alt="image" src="https://user-images.githubusercontent.com/20449025/218710428-c5b46bcb-8672-48fd-8a67-64b48763fbec.png">

**Notes:** On this case, I've logged a support ticket due to overcharging, which was pretty easy and answered fast.
I admired how fast was the answer for a free-tier (actually I bought a DNS), but what I meant was about not having any kind of premier support acquired.

---

### 11 - Architectural diagrams in Lucid Charts

#### Conceptual Diagram

<img width="800" alt="image" src="https://user-images.githubusercontent.com/20449025/219007769-f395df61-44bb-46b2-bac2-8a2a2fb53f55.png">

#### Logical Diagram

<img width="800" alt="image" src="https://user-images.githubusercontent.com/20449025/219790371-9a773bd3-4127-4f65-bc59-ffbd942a3c96.png">

**Notes:** I already knew LucidChart because I use to draw Salesforce Architecture Designs in that.
However, it was a quite bit now because I had to understand the application flow better and understand a little bit more regarding the available services in AWS as well to use the right icons. Also, I knew the AWS Architecture Icons portal, which is a great general guideline. I was wondering about making the "napkin" like in the class, but I've decided to make it simpler but modern at the same time.
The link for accessing the Lucid Chart Diagrams is [here](https://lucid.app/lucidchart/ac38fc14-27c1-4633-aacb-9f3f3471f853/edit?viewport_loc=-27%2C220%2C857%2C912%2CO1qxHzVObvgE&invitationId=inv_8954e717-32a1-43a0-a45b-6374f77ba5d0)
