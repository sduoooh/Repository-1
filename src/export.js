import { ref } from "vue"

class day {
    constructor(Data) {
        this.day = Data.getDate()
        this.color = null //Data.color
        this.weekRank = Data.getDay()
        this.show = null //Data.information
        this.index = null //Data.index
    }
}

export const MyData = ref([])

let start = new Date()
let end = new Date()
let now = new Date()

start.setDate(0)
now.setMonth(now.getMonth()+1)
now.setDate(0)
end.setMonth(end.getMonth()+2)
end.setDate(0)

let time = start.getDate() + now.getDate() + end.getDate()

for (let i = start,j = 1;j <= time; j++){
    i.setDate(j)
    temp = new day(i)
    MyData.value.push(temp)
}