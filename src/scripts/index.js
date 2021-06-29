// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";


// \/ All of your javascript should go here \/

const form = document.querySelector("#submit-form")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const message = document.querySelector("#message")
const check = document.querySelector("#checkbox")


form.addEventListener("submit",onSubmit)


async function onSubmit(e){
    e.preventDefault()

    const user ={
        name:name.value,
        email:email.value,
        password:password.value,
        message:message.value,
        checked:check.value
    }
    
    await fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        body: JSON.stringify(user)
    })
    .then(response=> {
        console.log(response)
        return response.json()})
    .then(result=> alert("Thank you for your submit UserID: "+result.id))
    .catch(error => console.log(error))

}