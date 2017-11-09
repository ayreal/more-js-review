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

    // pokeFinder(pokemon) {
    //   debugger;
    // }

    render() {
      return `
        <p>name: ${this.name}</p>
        <p>type: ${this.type}</p>
        <p>num: ${this.num}</p>

      `;
    }

    static all() {
      return all;
    }
  };
})();
