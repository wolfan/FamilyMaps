// LOGIC DOME

// Result[]
// 1: 辈分
// 2：亲疏远近
// 3：兄弟姐妹祖亲子孙关系

// result.toString().length >3 & >0 : 出服
// result[2] = [血亲，近亲，[五服:[远亲]]，[九服:[同宗]]，[出服:[同族]]
// result[2] = [1,2,3],[4,5],[6,7,],[8],[9]

// 关于计算值所得辈份推导。
// 祖辈：result[1] >= 1 : Parents
// 父辈：result[1] >1 & != 1 : ancestor
// 平辈：result[1] == 0 : Same-generation
// 子辈：result[1] < 1 : Offspring