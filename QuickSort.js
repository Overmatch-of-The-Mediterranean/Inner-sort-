
function QuickSort(arr, low, high) {
  // 当排序好后的pivot左右两边只剩一个时，排序完成。
  if (low > high) return;

  // 每次选择序列的第一个元素作为pivot
  let pivot = arr[low];
  let left = low, right = high;

  // 先从最右端开始移动
  while (left !== right) {
    if (arr[right] === '') {
      if (arr[left] > pivot) {
        arr[right] = arr[left];
        right--;
      } else {
        left++;
      }
    }
    else {
      // right指向的值比pivot小，将其移到left指向的元素中
      if (arr[right] < pivot) {
        arr[left] = arr[right];
        // 移动后，将该位置制空。当作判断条件，以便当发生元素值交换时，左右能交替进行。
        arr[right] = '';
        left++;
      } else {
        // right的值比pivot大，不移动，right前移继续比较，直至right的值比pivot小
        right--;
      }
    }
  }
  // 将pivot放在left与right重合的位置
  arr[left] = pivot;

  // 递归，pivot两边待排序的序列看成两个单独的整体
  // 左边整体的最大索引为，pivot，left，right重合的索引值减一,最小索引为上次序列的最小索引
  QuickSort(arr, low, right - 1);
  // 右边整体的最小索引为，pivot，left，right重合的索引值加一,最大索引为上次序列的最大索引
  QuickSort(arr, right + 1, high);
}

let a = [0, 1, 1, 1, 4, 5, 3, 7, 7, 8, 10, 2, 7, 8, 0, 5, 2, 16, 12, 1, 19, 15, 5, 18, 2, 2, 22, 15, 8, 22, 17, 6, 22, 6, 22, 26, 32, 8, 10, 11, 2, 26, 9, 12, 9, 7, 28, 33, 20, 7, 2, 17, 44, 3, 52, 27, 2, 23, 19, 56, 56, 58, 36, 31, 1, 19, 19, 6, 65, 49, 27, 63, 29, 1, 69, 47, 56, 61, 40, 43, 10, 71, 60, 66, 42, 44, 10, 12, 83, 69, 73, 2, 65, 93, 92, 47, 35, 39, 13, 75];
QuickSort(a, 0, a.length - 1);
console.log(a);