#Peponi 
##Paradise in Swahili

A Rails + Angular app hosted on Azure. We ingest data using TI hardware and SigFox.

###Use Case
You work in logistics, and it's your job to make sure packages get delivered in a timely manner and in working condition. Wouldn't it be nice to know if your package is damaged in real time? Peponi monitors the health of your pallets, presenting you with an intuitive and appealing interface to view your assets. 

Built by Neeraj, Toby, Brendan, Ali, and Ian at the SmartCity IoT SF Hackathon.

To view frontend:
1) navigate to "public"
2) run "npm start"
3) in browser, navigate to "localhost:8000"
4) navigate to "angular_app"
and voila!

To setup the backend: 
1) Ensure you're in the root directory of the project.
2) Switch to ruby 2.1.2 by using the command `rvm use 2.1.2`
3) Run `bundle install`
4) Make sure you copied the database.yml file from Slack into the config folder
5. Run `rails s` to start your Rails server!