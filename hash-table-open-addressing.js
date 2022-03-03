class HashTable{
    constructor(){
        this.size = 100;
        this.buckets = Array(100).fill(null);
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
        let keyHash = this.hash(key);
        if (this.buckets[keyHash] === null || this.buckets[keyHash].key === key) {
            this.buckets[keyHash] = { key: key, val: value };
        } else {
            while (this.buckets[keyHash] !== null) {
                keyHash++;
            }
            this.buckets[keyHash] = { key: key, val: value };
        }
        
    }

    get(key){
        const keyHash = this.hash(key);
        for (let i = keyHash; i < this.buckets.length; i++) {
            if (!this.buckets[i]) {
                continue;
            }
            if (this.buckets[i].key === key) {
                return this.buckets[i].val;
            }
        }
        return undefined;
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