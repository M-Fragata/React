

type User = {
    name: string,
    age: number,
    distance: number,
    team?: string
}

export function useMessage({name, age}: User) {

        function show(message: string) {
            console.log(name, age, message)
        }
/*
    function card({name, age, distance, team}: User) {
        
        `<div>
           <p> Nome: <strong> ${name} </strong> </p>
           <p> Idade: ${age} </p>
           <p> Distância: ${distance} </p>
           <p> Equipe: ${team} </p>
        </div>`
        
    }
*/

    return { show }
}
