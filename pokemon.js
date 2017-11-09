const Pokemon = (() => {
  const all = [];
  return class Pokemon {
    constructor(data) {
      this.num = data.num; // a string
      this.name = data.name;
      this.img = data.img;
      this.height = data.height;
      this.weight = data.weight;
      this.type = data.type; //an array
      this.weakness = data.weakness; //an array
      this.next_evolution = data.next_evolution; //an array
      all.push(this);
      // debugger;
    }

    render() {
      console.log(this);
      return `
        <img src="${this.img}"></img><br>
        <p>name: ${this.name}</p>
        <p>type: ${this.type}</p>
        <p>num: ${this.num}</p>
        <p id="all-evolutions">next evolution:</p>

      `;
    }

    renderEvolutions() {
      return this.next_evolution.map(e => {
        console.log(e);
        // debugger;
        let evolution = pokeFinder(`${e.name}`); // this is a Pokemon obj
        return `
        <a href="#" onClick="">${e.name}</a>`;
      });
    }

    static all() {
      return all;
    }
  };
})();
