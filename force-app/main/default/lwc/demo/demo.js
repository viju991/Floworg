import { LightningElement, track } from 'lwc';

export default class Demo extends LightningElement {
 subject = "Apex"
 isvisible = false
 name
 carlist = ["Audi","Mercedes","Toyota","Renault"]
 ceolist=[{
    id:1,
    company:"Google",
    ceo:"Sundar Pichai"

 },
{
    id:2,
    company:"Apple",
    ceo:"Tim Cook"   
},
{
    id:3,
    company:"Facebook",
    ceo:"Mark Zukerberg"
},
{
    id:4,
    company:"Amazon",
    ceo:"Jeff Bezos"
}]
   address={
        "city":"Shipur",
        "state":"Maharashtra",
        "country":"India"
    }
    subjectChange(event){
        this.subject = event.target.value
    }
    handleChange(event){
        this.address = {...this.address,"city" : event.target.value}
       
        // this.address.city = event.target.value
    }

    users = ["Jayu","Sai","Piya"]
    num1=40
    num2=10

    get firstvalue(){
        return this.users[2]
    }

    get multiply(){
        return this.num1 * this.num2
    }
    handleClick(){
        this.isvisible = true
    }
    changeHandle(event){
        this.name = event.target.value
    }

    get namechange(){
        return this.name === 'Hello'
    }
}