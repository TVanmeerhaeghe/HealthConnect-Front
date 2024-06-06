# Doctor Directory Front-End

This project is a simple front-end for a Doctor Directory application. It allows users to search for doctors by name or specialty.

## Project Structure

```markdown
.
│── index.html
│── index.css
│── app.js
├── .github
│   └── workflows
│       └── ci.yml
├── Dockerfile
└── README.md


## Getting Started

### Prerequisites

- Docker
- Node.js (optional, if you want to run the server locally)

### Running Locally

To run the project locally, simply open the `index.html` file in your browser.

### Running with Docker

To run the project with Docker, follow these steps:

```sh
docker build -t doctor-directory-frontend .
docker run -p 8080:80 doctor-directory-frontend


### Explications des Sections

1. **Project Overview**: Donne une description rapide de ce que fait votre projet.
2. **Project Structure**: Montre la structure du projet pour aider les autres à comprendre l'organisation des fichiers.
3. **Getting Started**
   - **Prerequisites**: Liste des prérequis nécessaires pour exécuter le projet.
   - **Running Locally**: Instructions pour exécuter le projet localement en ouvrant simplement le fichier `index.html`.
   - **Running with Docker**: Instructions pour exécuter le projet avec Docker, y compris les commandes nécessaires pour construire et exécuter le conteneur Docker.
4. **CI/CD Pipeline**: Fournit des instructions et un exemple de fichier de workflow GitHub Actions pour configurer CI/CD pour votre projet. 
   - **Setting up Secrets**: Explique comment configurer les secrets nécessaires pour pousser les images Docker sur Docker Hub.
5. **ASCII Art**: Ajoute un dessin ASCII pour une touche visuelle amusante.

  _____             _             
 |  __ \           (_)            
 | |  | | ___ _ __  _ _ __   __ _ 
 | |  | |/ _ \ '_ \| | '_ \ / _` |
 | |__| |  __/ | | | | | | | (_| |
 |_____/ \___|_| |_|_|_| |_|\__, |
                             __/ |
                            |___/ 