INSERT INTO users (username, email, password)
VALUES
('testuser', 'user@gmail.com', 'REPLACE_THIS_WITH_PASSWORD_HASH')
ON CONFLICT (username) DO NOTHING; -- Prevents errors if you run this migration multiple times