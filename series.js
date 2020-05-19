const series = {
   titile: "sports",
   name: "Football"
}

const seriesdata = JSON.stringify(series);
console.log(seriesdata);

const parsedata = JSON.parse(seriesdata);
console.log(parsedata);