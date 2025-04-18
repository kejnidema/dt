FROM postgres:latest

ENV POSTGRES_USER=dt
ENV POSTGRES_PASSWORD=dentaltourism
ENV POSTGRES_DB=dt

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432