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

create table Status
(
statusId int not null auto_increment,
personId int,
status varchar(255),
description text,
createdDate date,
modifiedDate date,
primary key (statusId)
);

create table Person
(
personId int not null auto_increment,
staffLevelId int,
divisionId int,
statusId int,
firstName varchar(255),
lastName varchar(255),
phoneNumber varchar(10),
yearsOfService varchar(10),
createdDate date,
modifiedDate date,
primary key (personId),
foreign key (staffLevelId) references StaffLevel(staffLevelId),
foreign key (divisionId) references Division(divisionId),
foreign key (statusId) references Status(statusId)
);

create table User
(
userId int not null auto_increment,
personId int,
statusId int,
permissionLevel varchar(255),
username varchar(255),
passwordHash varchar(255),
createdDate date,
modifiedDate date,
primary key (userId),
foreign key (personId) references Person(personId),
foreign key (statusId) references Status(statusId)
);

create table Session
(
sessionId int not null auto_increment,
userId int,
statusId int,
sessionKey varchar(255),
expireTime time,
createdDate date,
modifiedDate date,
primary key (sessionId),
foreign key (userId) references User(userId),
foreign key (statusId) references Status(statusId)
);