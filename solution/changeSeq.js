function changeSequence(arr) {
    let increasing = arr[1] > arr[0] ? true : false;
    let stateChange = false;
    let target = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (increasing && arr[i + 1] > arr[i]) {
            continue;
        }
        if (!increasing && arr[i + 1] < arr[i]) {
            continue;
        } else {
            stateChange = true;
            return (target = i);
        }
    }
    return stateChange ? target : -1;
}
