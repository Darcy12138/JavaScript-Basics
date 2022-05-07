/* 
  功能：打印正三角或倒三角★
  参数1：行数
  参数2：要打印正三角还是倒三角？
      '正'：正三角
      '倒'：倒三角
 */
function star(row, show) {
  if (show === '正') {
    for (let i = 1; i <= row; i++) {
      for (let j = 1; j <= i; j++) {
        document.write('★')
      }
      document.write('<br>')
    }
  } else {
    for (let i = row; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        document.write('★')
      }
      document.write('<br>')
    }
  }
}
