import { Bike } from "./bike";
import{User} from "./user"

export class Rent{
    filter(arg0: (item: any) => boolean) {
        throw new Error("Method not implemented.");
    }
    private constructor(
        public bike: Bike,
        public user: User,
        public dateFrom: Date,
        public dateTo: Date,
        public dateReturned?: Date

    ){}

   static create(rents: Rent[], bike: Bike,user: User, startDate: Date, endDate: Date){
    const canCreate = Rent.canRent(rents, startDate, endDate)
    if(canCreate){
        return new Rent(bike, user, startDate, endDate)
    }
    throw new Error('Overlapping dates for this rent.')
   }
   
    static canRent(rents: Rent[], startDate: Date, endDate: Date):
    boolean {
        return !rents.some(rent=>{
            return startDate <= rent.dateTo && 
                   endDate >= rent.dateFrom
        })

    }
}

// const bike = new Bike('bike1', 'mountain', 30, 100, 100.5, 'my desc', 5, [])

// const user = new User('teste', 'teste@mail.com', '1234')
// const today = new Date()
// const twoDaysLater = new Date()
// twoDaysLater.setDate(twoDaysLater.getDate() +2)
// const tomorrow = new Date()
// tomorrow.setDate(tomorrow.getDate() + 1)
// const twoDaysAfterTomorrow = new Date()
// twoDaysAfterTomorrow.setDate(tomorrow.getDate() + 2)
// const rent1 = Rent.create([], bike, user, today, twoDaysLater)
// const rent2 = Rent.create([rent1], user, user, tomorrow, twoDaysAfterTomorrow)
// console.log(rent2)