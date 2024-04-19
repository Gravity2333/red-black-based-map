const RBTree = require("./RBT");

class RBMap {
  constructor() {
    this.store = new RBTree();
    this.length = 0;
  }

  set(key, value) {
    this.store.insert(key, value);
    this.length++;
  }

  get(key) {
    return this.store.search(key)?.value;
  }

  delete(key) {
    return this.store.delete(key);
  }

  has(key) {
    return !!this.store.search(key)?.value;
  }

  clear() {
    this.store.clear();
  }

  *[Symbol.iterator](){
    yield* this.store
  }
}

module.exports = RBMap;

const rbMap = new RBMap();
rbMap.set("a", "200");
rbMap.set("b", "300");
rbMap.set("name", "hello world");
rbMap.set("age", "1200");
rbMap.set("score", "20220");
console.log(rbMap.get("name"));
console.log(rbMap.get("score"));
for(let i of rbMap){
  console.log(i)
}
