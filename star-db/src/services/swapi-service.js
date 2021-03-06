export default class SwapiService {
  _apiBase = 'https://swapi.co/api';

  async getResourse(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResourse(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResourse(`/people/${id}/`);
  }

  async getAllPlanets() {
    const res = await this.getResourse(`/planents/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResourse(`/planents/${id}/`);
  }

  async getAllStarships() {
    const res = await this.getResourse(`/starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.getResourse(`/starships/${id}/`);
  }
}

const swapi = new SwapiService();

swapi.getAllPeople().then(people => {
  people.forEach(p => {
    console.log(p.name);
  });
});
