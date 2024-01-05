import { gsonPair } from "./gson.pair";

export class gson{
    private pairs : gsonPair[] = [];

    public add(aKey : String, aValue){
        this.pairs.push({key: aKey, value: aValue});
        return this;
    }
    
    public read(){
        for (let index = 0; index < this.pairs.length; index++) {
            const element = this.pairs[index];
            console.log(element);
        }
    }

    public getByKey(aKey : String){
        for (let index = 0; index < this.pairs.length; index++) {
            const element = this.pairs[index];
            if(element.key == aKey)
                return element;
        }
        return ;
    }

    public count() : number{
        return this.pairs.length;
    }

    public getByIndex(aIndex : number){
        return this.pairs[aIndex];
    }
}