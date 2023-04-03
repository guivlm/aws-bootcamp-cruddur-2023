# FROM 824281092287.dkr.ecr.sa-east-1.amazonaws.com/cruddur-python:3.10-slim-buster
FROM python:3.10-slim-buster

# Inside Container
# make a new folder inside container
WORKDIR /backend-flask

# Outside Container -> Inside
# this contains the libraries you want to install to run the app
COPY requirements.txt requirements.txt

# Inside Container
# Install the python libraries used for the app
RUN pip3 install -r requirements.txt

# Outside Container -> Inside
# .means everything in the current directory
# . /backend-flask (outside container)
# .  /backend-flask (inside container)
COPY . .

# Sent Environent Variables (Env Vars)
# Inside Container and will remain set when the container is running
# ENV FLASK_ENV=development
ENV FLASK_DEBUG=1

EXPOSE ${PORT}

# CMD (Command)
# python3 -m flask run --host=0.0.0.0 --port=4567
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0", "--port=4567"]