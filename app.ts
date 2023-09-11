import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";

export class App {
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []

    findUser(email: string): User | undefined {
        return this.users.find(user => { return user.email === email})
    }

    registerUser(user: User): void {
        for (const rUser of this.users) {
            if (rUser.email === user.email) {
                throw new Error('Duplicate user.')
            }
        }
        this.users.push(user)
    }

    registerBike(bike:Bike): void{
        bike.id = crypto.randomUUID()
        /*for(const rBike of this.bikes){
            if(rBike.id === bike.id){
                throw new Error('bike already registered')
            }
        }*/
        this.bikes.push(bike)
    }

    removeUser(email: string){
       this.users = this.users.filter(rUser => rUser.email !== email)
    }

    rentBike(bike: Bike, user: User, startDate: Date, endDate: Date): void{
        const array = this.rents.filter((bikes)=>bike === bikes.bike)

        const newrent = Rent.create(array, bike, user,startDate, endDate)
        this.rents.push(newrent)
    }

    returnBike(bike: Bike){
       let today = new Date()
       today.getDate
       for(const rRent of this.rents){
        if(rRent.bike === bike){
            rRent.dateReturned = today
        }

    }
  }

  ListUsers():User[]{
    var j = 0
    var users = []
    for(j; j < this.users.length; j++){
        users[j] = this.users[j]
    }
    return users
  }

  ListBikes():Bike[]{
    var j = 0
    var bikes = []
    for(j; j <= this.bikes.length; j++){
        bikes[j] = this.bikes[j]
    }
    return bikes
  }

  ListRents():Rent[]{
    var j = 0
    var rents = []
    for(j; j <= this.rents.length; j++){
        rents[j] = this.rents[j]
    }
    return rents
  }

  AutenticaUser(senha: string, email: string): void{
    const test = this.findUser(email)
    if(test?.password === senha){
        console.log('login realizado com sucesso')
    }else {
        console.log('usuário ou senha errados')
    }
  }


}


// import {Bike} from "./bike";
// import {Rent} from "./rent";
// import {User} from "./user";

// export class App{
//     users: User[] = []
//     bikes: Bike[] = []
//     rents: Rent[] = []

//     // register bike
//     // remove user
//     // rent bike
//     // return bike
    
//     findUser(email: string): User | undefined{
//         return this.users.find(user =>{ return user.email === email})
//     }

//     addUser(user: User):void{
//         for(var j = 0;j<this.users.length;j++){
//             if(this.users[j].email===user.email){
//                 throw new Error('duplicate user')

//             }
//         }
        
//         this.users.push(user)
//     }
// }

    
//     //     for(const rUser of this.users){
//     //         if(rUser.email===user.email){ ->>>>>>>>>>>(serve para comparar tipo e valor os ===)
//     //             throw new Error('duplicate user')

//     //         }
//     //     }
        
//     //     this.users.push(user)
//     // }

// //     //addUser(user: User){
// //         //for(const rUser of this.users){
// //             //if(rUser.email === user.email){
// //                 throw new Error('User already registered')
// //             }
// //         }
// //         this.users.push(user)
// //     }
    
// // }


