-- Cria o banco de dados
--DATABASE_URL="postgresql://koruuser:korupassword@localhost:5432/koru_company?schema=public"--
--DATABASE_URL="postgresql://koruuser:korupassword@localhost:5432/koru_company?schema=public"--


CREATE DATABASE koru_company;

-- Conecte-se ao banco criado (rodar no terminal psql ou use \c koru_company no psql)
\c koru_company;

-- Cria a tabela contacts
-- Cria a tabela contacts
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  phone VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT,
  endereco VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
