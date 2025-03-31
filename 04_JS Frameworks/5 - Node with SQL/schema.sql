create database if not EXISTS delta_app;

USE delta_app;
SHOW TABLES;

create table user(
    id varchar(50) primary key,
    username varchar(50) unique,
    email varchar(50) unique not null,
    password varchar(50) not null
);