use movies; 

CREATE TABLE movies (
    ID int auto_increment primary key not null, 
    title varchar(255),
    description varchar(255), 
    year varchar(255), 
    score int, 
    image varchar(255),
    watched varchar(255)
)