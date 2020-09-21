class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        event.preventDefault();

        this.repositories.push({
            name: 'Alvaro Junior',
            description: 'Estudante de engenharia da computação',
            avatar_url: 'https://avatars1.githubusercontent.com/u/64383944?s=460&u=5065c52a7002485233133a35f97876da3c6c9284&v=4',
            html_url: 'http://github.com/alvarojunior02'
        });

        this.render();
    }

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();