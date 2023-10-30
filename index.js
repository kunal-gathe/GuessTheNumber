function mergeSort(arr, start, end) {
  if (start >= end) return;

  let mid = Math.floor((start + end) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);

  merge(arr, start,mid, end);
}

function merge(arr, start, mid, end) {
  let temp = new Array(end - start + 1);
  let i = start;
  let j = mid + 1;
  let k = 0;

  while (i <= mid && j <= end) {
    if (arr[i] < arr[j]) {
      temp[k] = arr[i];
      i++;
      
    } else {
      temp[k] = arr[j];
      j++
    }
    k++
  }

  while( i <= mid){
    temp[k++] = arr[i++]
  }
  while( j <= mid){
    temp[k++] = arr[j++]
  }

  for( k=0, i = start; k < temp.length; k++, i++){
    arr[i] = temp[k]
  }
}
let arr = [6,5,4,3,2,1];
mergeSort(arr, 0 ,arr.length-1);
console.log(arr);


function quickSort(arr, si, ei) {
    if (si >= ei) return;
    let pIndx = partition(arr, si, ei);
    quickSort(arr, si, pIndx - 1);
    quickSort(arr, pIndx + 1, ei);
}

function partition(arr, si, ei) {
    let pivot = arr[ei];
    let i = si - 1;

    for (let j = si; j < ei; j++) {
        if (arr[j] <= pivot) {
            i++;
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
    i++;
    let temp = pivot;
    arr[ei] = arr[i];
    arr[i] = temp;
    return i;
}

// let arr = [6, 5, 4, 3, 2, 1];
// quickSort(arr, 0, arr.length - 1);
// console.log(arr);
