# Casa de Cultura São Mateus

A **Casa de Cultura São Mateus** é uma plataforma digital desenvolvida para aproximar a comunidade das atividades culturais da região. O site permite conhecer eventos, consultar informações, explorar categorias e realizar inscrições, facilitando o acesso à cultura, à arte e ao lazer.

Nosso objetivo é fortalecer a divulgação de iniciativas culturais, valorizar os artistas locais e ampliar a participação da população nas atividades promovidas na região de São Mateus, na Zona Leste de São Paulo.

## 🌐 Projeto publicado

Acesse a plataforma:

**[Casa de Cultura São Mateus — Acessar site](https://ccm-sao-mateus.onrender.com)**

---

## 🛠️ Tecnologias utilizadas

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS

### Backend
- Python
- Django
- Django REST Framework

### Banco de dados
- PostgreSQL

### Infraestrutura
- Docker
- Render
- Neon PostgreSQL

---

## 📂 Estrutura do projeto

- `frontend/` — Interface da plataforma desenvolvida em React.
- `backend/` — API, regras de negócio e autenticação desenvolvidas com Django.

---

## ⚙️ Executando localmente

### Backend — Django

1. Entre na pasta `backend`.
2. Crie um ambiente virtual:

   ```bash
   python -m venv venv
   ```

3. Ative o ambiente virtual no PowerShell:

   ```powershell
   venv\Scripts\Activate
   ```

4. Instale as dependências:

   ```bash
   python -m pip install -r requirements.txt
   ```

5. Execute as migrações:

   ```bash
   python manage.py migrate
   ```

6. Carregue os dados iniciais:

   ```bash
   python manage.py loaddata dados_iniciais
   ```

7. Inicie o servidor:

   ```bash
   python manage.py runserver
   ```

Backend disponível em:

`http://localhost:8000`

---

### Frontend — React

1. Entre na pasta `frontend`.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o ambiente de desenvolvimento:

   ```bash
   npm run dev
   ```

Frontend disponível em:

`http://localhost:5173`

---

## 🔌 Endpoints da API

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/api/eventos/` | Lista os eventos disponíveis |
| GET | `/api/eventos/?categoria=1` | Filtra eventos por categoria |
| GET | `/api/categorias/` | Lista as categorias cadastradas |

### Endereços locais

- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:8000
- **Eventos:** http://localhost:8000/api/eventos/
- **Categorias:** http://localhost:8000/api/categorias/

---

## 🎯 Objetivo do projeto

Promover a democratização do acesso à cultura por meio da tecnologia, facilitando a divulgação de eventos, fortalecendo a conexão entre a comunidade e os espaços culturais e valorizando as iniciativas locais de São Mateus.
