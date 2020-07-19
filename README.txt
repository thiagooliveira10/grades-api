heroku create

git remote // novo remote

git push heroku master

heroku ps:scale web=1 -- INCIAR
heroku ps:scale web=0 -- PARAR APP. Ex.: reload

add file profile
	web: node app.js
add start package.json

heroku open

heroku logs --tail


pp.listen(process.env.PORT || 5000


node -r dotenv/config experimental-modules app.js

heroku apps:rename pokemon-back-api

//alterar variaveis no ambiente do heroku