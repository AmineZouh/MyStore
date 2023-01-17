export class Order{
  id:number
  fullName:string
  address:string
  creditCard:string
  total:number

  constructor(){
    this.id=1
    this.fullName=''
    this.address=''
    this.creditCard=''
    this.total=0
  }
}