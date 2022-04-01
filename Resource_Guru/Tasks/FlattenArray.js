const FlattenArray = (array) => {
    if (array.length === 0){return 'Array is empty'}; // check for empty array

    let flattened = array.toString().split(',').map((x) => parseInt(x)); // convert array to string, splt string and then parse values
    return flattened; // return array
}

module.exports = { FlattenArray };