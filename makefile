build:
	docker build -t portfolio-front ./
start:
	docker run -p 3000:3000 -it --name portfolio-front-container portfolio-front
remove:
	docker rm portfolio-front-container
	docker rmi portfolio-front