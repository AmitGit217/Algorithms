function arithGeo(arr) {
    let isArith = true;
    let isGeo = true;

    const geometric = arr[1] / arr[0];
    const arithmetic = arr[1] - arr[0];

    for (let i = 1; i < arr.length - 1 && (isArith || isGeo); i++) {
        isGeo = isGeo && arr[i + 1] / arr[i] == geometric;
        isArith = isArith && arr[i + 1] - arr[i] == arithmetic;
    }

    if (isArith && isGeo) {
        return -1;
    } else if (isGeo) {
        return "Geometric";
    } else if (isArith) {
        return "Arithmetic";
    } else {
        return -1;
    }
}
