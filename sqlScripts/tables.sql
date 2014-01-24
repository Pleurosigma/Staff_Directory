create table Person
(
personId int not null auto_increment,
staffLevelId int,
statusId int,
divisionId int,
firstName varchar(255),
lastName varchar(255),
phoneNumber varchar(10),
yearsOfService varchar(10),
createdDate date,
modifiedDate date,
primary key (personId),
foreign key (staffLevelId) references StaffLevel(staffLevelId),
foreign key (divisionId) references Division(divisionId)
);

create table User
(
userId int not null auto_increment,
personId int,
permissionLevel varchar(255),
username varchar(255),
passwordHash varchar(255),
createdDate date,
modifiedDate date,
primary key (userId),
foreign key (personId) references Person(personId)
);

create table Session
(
sessionId int not null auto_increment,
userId int,
sessionKey varchar(255),
expireTime time,
createdDate date,
modifiedDate date,
primary key (sessionId),
foreign key (userId) references User(userId)
);

create table StaffLevel
(
staffLevelId int not null auto_increment,
personId int,
level varchar(255),
description text,
createdDate date,
modifiedDate date,
primary key (staffLevelId)
);

create table Division
(
divisionId int not null auto_increment,
personId int,
name varchar(255),
description text,
createdDate date,
modifiedDate date,
primary key (divisionId)
);