.PHONY: up down build frontend-dev logs test

up:
	docker compose up --build

down:
	docker compose down -v

frontend-dev:
	cd frontend && npm install && npm run dev

build:
	docker compose build

logs:
	docker compose logs -f

test:
	pytest services -q
