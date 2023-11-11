
export function callAPI(url, processData, n = 10) {
    if (n === 0){
        console.log(`Failed to get data: ${url}`);
        return [];
    }
    const start = new Date();
    fetch(url)
            .then(res => res.json())
            .then(data => {
                processData(data);
                const end = new Date();
                console.log(`Success (Time: ${end-start} milliseconds, URL: ${url})`)
            })
            .catch(error => {
                const end = new Date();
                console.log(`Error fetching data (Time: ${end-start} milliseconds, URL: ${url})`)
                callAPI(url, processData, n-1)
            });
  }

