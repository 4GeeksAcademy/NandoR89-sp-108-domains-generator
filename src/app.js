import "bootstrap";
import "./style.css";



function generateDomain(){

    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let domain = ['.com', '.online']

    let diferentsDomain = []

    for (let p = 0; p < pronoun.length; p++) {
        for (let a = 0; a < adj.length; a++) {
            for (let n = 0; n < noun.length; n++) {
                for (let d = 0; d < domain.length; d++){
                    diferentsDomain.push(pronoun[p] + adj[a] + noun[n] + domain[d])
                }
            }
        } 
    } 
    return diferentsDomain
}

let dominios = generateDomain()

let domainList = document.querySelector("#random")
dominios.map((item) => {
    domainList.innerHTML += `
    <tr>
        <td>           
            ${item}
        </td>
    </tr>
    `
})