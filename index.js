class DataRepository {
    constructor(initialItems = []) {
        this.items = initialItems;
    }
    add(item) {
        this.items.push(item);
    }
    remove(id) {
        if (this.isEmpty()) {
            console.log('Queue is empty');
        }
        let objectWithIdIndex = this.items.findIndex(item => item.id === id);
        if (objectWithIdIndex >= 0) {
            this.items.splice(objectWithIdIndex, 1);
        }
        else {
            console.log('item not found');
        }
    }
    isEmpty() {
        return this.items.length == 0;
    }
    find(predicate) {
        return this.items.find(predicate);
    }
}
const userRepos = new DataRepository();
userRepos.add({ id: 1, name: "John" });
console.log(userRepos.find(user => user.name === "John"));
