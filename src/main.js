class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');

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

        console.log(this.repositories);
    }
}

new App();