# Foodictive-API
This repository is for our team made API. This API is created by our Cloud Computing team. Food data API is an API that created to serve detailed data about food that has been identified by our app. After the food image is identified, our app will show detailed information about that food like recipe and description.
<br />

## Our Cloud Computing Team:
- Krisostomos Abdixta Winarto (C2007F0682)
- Candhy Fadhila Arsyad (C2007F0683)
<br />

## Prerequisites
Before you can deploy this API on cloud you will need these stuffs:
- Food data API that has been uploaded into Github
- a Google Cloud Platform with enough credit
- a compute engine
- a firewall rule
<br />

## Deploy the API on google cloud
### Make a firewall configuration
1. Make sure you have a google cloud project with billing account running on it
2. Open **Navigation menu**, choose **VPC Network**, and then open **Firewall** page.
3. Make a firewall configuration with target tag set to **web-server**, source IPv4 ranges set to **0.0.0.0/0** and allow **custom TCP port 5000**
4. Press **Create** button.

### Make a compute engine
1. Open **Navigation menu** and then choose **Compute Engine**
2. Make a compute engine instance with this configuration:
- Region : asia-southeast1
- Zone : asia-southeast1-b
- Machine type : n1-standard-1 (1 vCPU, 3.75 GiB memory)
- Boot Disk : 
  * Operating System : Ubuntu
  * Type : Balanced Persistent disk
  * Size : 10 GB
  * Image : Ubuntu 20.04 LTS
- Open **Networking, Disks, Security, Management, Sole-Tenancy** menu
- Under **Networking** section, add **web-server** as target tags
- Click **Create** button

### Host the API in Compute Engine
1. Press **SSH** button on VM Instance that just made
2. Make sure that git already installed on compute engine instance by checking on the version of git using command:
```
git --version
```
3. Clone the repository of this API using
```
git clone https://github.com/Foodictive/Foodictive-API.git
```
4. Access the folder of Food data API using
```
cd Foodictive-API
``` 
5. Install node version manager or nvm on your compute engine instance using
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```
6. Close your SSH session using
```
exit
```
7. Access SSH by clicking on **SSH** button in VM Instances page
8. Install Node.js using command
```
nvm install v16.14.0
```
9. Access the folder of Food data API using
```
cd Foodictive-API
```
10. Install all module that needed using command
```
npm install
```
11. Run the server using command
```
npm run start-prod
```
12. Access the server using one of this link (replace "VM-Instance-External-IP" with your compute engine external IP)
- To get all food data
```
http://VM-Instance-External-IP:5000/foods
```
- To get food data based on id
```
http://VM-Instance-External-IP:5000/foods/food-id
```
- To get food data based on food name
```
http://VM-Instance-External-IP:5000/foods?name=food-name
```
13. To make sure that API is still running. Although the SSH is closed. Install Node.js Process Manager using this command
```
cd ..
```
```
npm install -g pm2
```
14. Access the folder of Food data API using
```
cd Foodictive-API
``` 
15. run the server using command
```
pm2 start npm --name "Foodictive-API" -- run "start-prod"
```

During development process, our team were working on our private repository and then we downloaded all the files from that repository before we uploaded it to this repository. So all the commit history is erased. This is our commit history on the first repository. Our commit history can also be seen at this link: https://github.com/Abdixta-Winarto/Foodictive.git.
![github com_Abdixta-Winarto_Foodictive_commits_main_Food-data-API](https://user-images.githubusercontent.com/105838486/170880902-5d03558d-f878-482b-b555-3739e06782a2.png)
