class DataRepository {
    constructor(initialItems = []) {
        this.items = initialItems;
    }
    add(item) {
        this.items.push(item);
    }
    remove(id) {
        this.items = this.items.filter(item => item.id !== id);
        const filt = this.items;
        if (!filt) {
            console.log('error');
        }
    }
}
const userRepos = new DataRepository();
userRepos.add({ id: 1, name: "John" });
userRepos.add({ id: 3, name: "Midun" });
console.log(userRepos.find(user => user.name === "John"));
console.log(userRepos.find(user => user.name === "Jake"));
userRepos.remove(1);
console.log(userRepos.find(user => user.name === "Midn"));
