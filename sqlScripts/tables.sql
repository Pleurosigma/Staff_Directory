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
primary key (personId)
);

create table User
(
userId int not null auto_increment,
foreign key (personId) references Person(personID),
permissionLevel varchar(255),
username varchar(255),
passwordHash varchar(255),
createdDate date,
modifiedDate date,
primary key (userId)
);

create table Session
(
sessionId int not null auto_increment,
foreign key (userId) references User(userId),
sessionKey varchar(255),
expireTime time,
createdDate date,
modifiedDate date,
primary key (sessionId)
);

create table StaffLevel
(
staffLevelId int not null auto_increment,
foreign key (personId) references Person(personId),
level varchar(255),
description text,
createdDate date,
modifiedDate date,
primary key (staffLevelId)
);

create table Division
(
divisionId int not null auto_increment,
foreign key (personId) references Person(personId),
name varchar(255),
description text,
createdDate date,
modifiedDate date,
primary key (divisionId)
);