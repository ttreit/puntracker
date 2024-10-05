-- Create table users
CREATE TABLE users (id SERIAL UNIQUE PRIMARY KEY, name varchar(30) UNIQUE);

-- Create table puns
CREATE TABLE puns (
    id SERIAL UNIQUE,
    user_fk INT,
    pun TEXT,
    created_date DATE, 
    CONSTRAINT users_fk_constraint FOREIGN KEY(user_fk) REFERENCES users(id) ON DELETE SET NULL
    );

-- Add some data to each table
INSERT INTO users (name) VALUES
    ('Tammy'), 
    ('Andreas');

INSERT INTO puns(user_fk, pun, created_date) VALUES
    (2, 'Lets get Kraken', CURRENT_DATE),
    (2, 'Lets get Schmaken', CURRENT_DATE);
    
-- Alter columns
-- ALTER TABLE users ADD CONSTRAINT name_constraint UNIQUE (name);

