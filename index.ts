interface Repository<T>{
    items: T[];
    add(item: T): void;
    remove(id: number): void;
    find(predicate: (item: T) => boolean): T | undefined;
}

class DataRepository<T extends {id:number}>implements Repository <T>{
    items:T[]

    constructor(initialItems:T[] = []){
        this.items = initialItems
    }

    add(item: T): void{
         this.items.push(item)
    }
    remove(id:number):void{
        if(this.isEmpty()){
            console.log ('Queue is empty')
        }
        let objectWithIdIndex = this.items.findIndex(item => item.id === id)
        if(objectWithIdIndex >=0){
            this.items.splice(objectWithIdIndex, 1)
        }
        else{
            console.log('item not found')
        }
       
    }

    isEmpty(){
        return this.items.length == 0;
    }

    find(predicate: (item: T) => boolean): T | undefined{
        return this.items.find(predicate)
    }

}
interface User {
    id: number;
    name: string;
}

const userRepos = new DataRepository<User>();
userRepos.add({ id: 1, name: "John" });
console.log(userRepos.find(user => user.name === "John"));