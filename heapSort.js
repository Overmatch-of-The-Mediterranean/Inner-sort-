// 堆映射到数组中，相当于二叉树从上到下，从左到右依次放入数组
// 最后一个父元素的索引值为；元素个数/2 向下取整 再-1

function heapSort(arr) {

  // 创建大顶堆
  buildMaxHeap(arr);

  for (let i = arr.length - 1; i >= 0; i--) {
    // 每次完成一次循环，i减一，是为了排除已经排列的元素
    swap(arr, i, 0);
    adjustMaxHeap(arr, i, 0);
  }
  return arr;


  // 创建大顶堆逻辑
  function buildMaxHeap(arr) {
    let length = arr.length;
    let lastParentNode = Math.floor(length / 2) - 1;
    for (let j = lastParentNode; j >= 0; j--) {
      adjustMaxHeap(arr, length, j);
    }
  }

  // 最大堆调整逻辑
  function adjustMaxHeap(arr, maxIndex, index) {
    // max的作用：存放最大值的索引
    let max, left, right;
    while (true) {
      max = index;
      left = index * 2 + 1;
      right = index * 2 + 2;
      if (left < maxIndex && arr[left] > arr[max]) max = left;
      if (right < maxIndex && arr[right] > arr[max]) max = right;
      if (index !== max) {
        swap(arr, max, index);
        // 当交换父子节点值后,index指向被交换的值max,再次循环,调整max所在的那一支系，使其符合父元素大于子元素的特点
        index = max;
      } else break;
    }
  }

  // 交换父子节点值
  function swap(arr, max, index) {
    [arr[max], arr[index]] = [arr[index], arr[max]]
  }
}
let a = [0, 1, 1, 1, 4, 5, 3, 7, 7, 8, 10, 2, 7, 8, 0, 5, 2, 16, 12, 1, 19, 15, 5, 18, 2, 2, 22, 15, 8, 22, 17, 6, 22, 6, 22, 26, 32, 8, 10, 11, 2, 26, 9, 12, 9, 7, 28, 33, 20, 7, 2, 17, 44, 3, 52, 27, 2, 23, 19, 56, 56, 58, 36, 31, 1, 19, 19, 6, 65, 49, 27, 63, 29, 1, 69, 47, 56, 61, 40, 43, 10, 71, 60, 66, 42, 44, 10, 12, 83, 69, 73, 2, 65, 93, 92, 47, 35, 39, 13, 75];
console.log(heapSort(a));