class HashTable{
    constructor(){
        this.size = 16;
        this.buckets = Array(16).fill(null).map(() => []);//a bucket full of arrays, a nested array
    }

    hash(key) {
        let hash = 0;
        for (const char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size; // % by array size
    }

    
    set(key, value) {
        const keyHash = this.hash(key);
        const bucketArray = this.buckets[keyHash];
        const storedElement = bucketArray.find((element) => {
            return element.key === key; // will return true if we already stored such a key
        });
        if (storedElement) {
            storedElement.val = value;
        } else {
            bucketArray.push({ key: key, val: value });
        }

    }

    get(key){
        const keyHash = this.hash(key);
        const bucketArray = this.buckets[keyHash];
        const storedElement = bucketArray.find(element => {
            return element.key === key;
        });
        return storedElement;
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