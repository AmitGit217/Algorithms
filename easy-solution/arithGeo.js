function arithGeo(arr) {
    const notGeo = [];
    const notArith = [];
    for (let i = 0; i < arr.length; i++) {
        const arithmetic = arr[1] - arr[0];
        const geometric = arr[1] / arr[0];
        const notLastIndex = arr[i] != arr[arr.length - 1];
        if (notLastIndex) {
            if (arr[i + 1] - arr[i] != arithmetic) {
                notArith.push("false");
            }
            if (arr[i + 1] / arr[i] != geometric) {
                notGeo.push("false");
            }
        }
    }
    if (!notGeo.length && notArith.length) {
        return "Geometric";
    }
    if (notGeo.length && !notArith.length) {
        return "Arithmetic";
    } else {
        return -1;
    }
}
