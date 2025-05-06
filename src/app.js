import "bootstrap";
import "./style.css";


function generateDomainCombinations() {

  let pronouns = ['the', 'our'];
  let adjectives = ['great', 'big'];
  let nouns = ['jogger', 'racoon'];
  let domains = ['.com', '.online']
  let domainCombinations = []

  for (let pronoun = 0; pronoun < pronouns.length; pronoun++) {
    for (let adjective = 0; adjective < adjectives.length; adjective++) {
      for (let noun = 0; noun < nouns.length; noun++) {
        for (let domain = 0; domain < domains.length; domain++) {
          domainCombinations.push(pronouns[pronoun] + adjectives[adjective] + nouns[noun] + domains[domain])
        }
      }
    }
  }
  return domainCombinations
}

let generateDomains = generateDomainCombinations()

let domainList = document.querySelector("#random")
generateDomains.map((item) => {
  domainList.innerHTML += `
    <tr>
        <td>           
            ${item}
        </td>
    </tr>
    `
})