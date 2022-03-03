export class HashTable{
    constructor(){
        this.size = 16;
        this.buckets = Array(16).fill(null);
    }

    hash(key) {
        let hash = 0;
        for (const char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size; // % by array size
    }
    // will override existing 
    set(key, value) {
        const keyHash = this.hash(key);
        this.buckets[keyHash] = value;
    }

    get(key){
        const keyHash = this.hash(key);
        return this.buckets[keyHash];
    }

    showInfo() {
        for (const key in this.buckets) {
            if (this.buckets[key] !== null) {
                console.log(key, this.buckets[key]);
            }
        }
    }
}


const table1 = new HashTable();

for (const char of 'academind'){
    table1.set(char, char);        
}

for (const char of 'hello'){
    table1.set(char, char);        
}

for (const char of 'does this work'){
    table1.set(char, char);        
}

console.log(table1.showInfo());

// reducing the size shows that values are lost
// due to the size limitation the hash function generates the keys
// for different values

// key collisions - data loss, overriding 
