/*
        fetch('https://rickandmortyapi.com/api/episode')
            .then((response) => response.json())
            .then((data) => {
                const { results } = data;
                const numepisode = results.map((result) => {
                    const fechalanzamiento = result.air_date;
                    const fecha = fechalanzamiento.split(' ');
                    if (fecha[0] === 'January') {
                        const personajes = result.characters;
                        for (const personaje of personajes) {
                            console.log(
                                `En el capítulo estrenado el día ${fechalanzamiento} sale  ${personaje} `
                            );
                        }
                        return personajes;
                    }
                });
            })
            .catch((error) => console.log(error));
*/
fetch('https://rickandmortyapi.com/api/episode')
    .then((response) => response.json())
    .then((data) => {
        const { results } = data;
        const numepisode = results.map((result) => {
            const fechalanzamiento = result.air_date;
            const fecha = fechalanzamiento.split(' ');
            if (fecha[0] === 'January') {
                const personajes = result.characters;
                for (const personaje of personajes) {
                    fetch(personaje)
                        .then((response) => response.json())
                        .then((data) => {
                            const nombre = data.name;
                            console.log(
                                `${nombre} apareció en el capítulo estrenado el día ${fechalanzamiento}`
                            );
                        })
                        .catch((error) => console.log(error));
                }
            }
        });
    })
    .catch((error) => console.log(error));
